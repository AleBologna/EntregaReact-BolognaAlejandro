import { useEffect, useState } from 'react';
import dataBase from '../../data/dataBase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

/*LLamo de forma asincrónica al objeto dataBase*/
/* AsyncMockService */

function getData(){
    return new Promise (resolve =>{
        setTimeout(() =>{
            resolve(dataBase)
        },1000)
    })
}
function ItemListContainer (){
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();
    
    useEffect (() =>{
        getData().then(response =>{ 
        if(categoryId){
            const filterProducts = response.filter(el=> el.category ===categoryId)  
            setProducts(filterProducts)
        }else{
            setProducts(response);
        }
        });
    },[categoryId])

    return(
        <>
        {/* ItemList hace el map del array de products */}
            <ItemList products={products}/>
        </>
    )
}
export default ItemListContainer;