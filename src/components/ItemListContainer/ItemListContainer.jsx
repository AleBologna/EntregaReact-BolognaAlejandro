import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getCategoryData, getData } from '../../services/firebase';

function ItemListContainer (){
    let [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();
    
    //Le paso una funcion dependiendo el resultado de la condicion
    const fetchData = categoryId === undefined? getData : getCategoryData

    useEffect (() =>{
        fetchData(categoryId)
        .then(response => setProducts(response))
        .finally(() => {
            setIsLoading(false)
        });
    },[categoryId])

    return(
        <>
        {/* ItemList hace el map del array de products */}
            <ItemList isLoading={isLoading} products={products}/>
        </>
    )
}
export default ItemListContainer;