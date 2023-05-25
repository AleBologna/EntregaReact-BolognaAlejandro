import { useEffect, useState } from 'react';
import dataBase from '../../data/dataBase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

/*LLamo de forma asincrónica al objeto dataBase*/

function getItemData(id){
    return new Promise (resolve =>{
        setTimeout(() =>{
            const request = dataBase.find( el => el.id === parseInt(id))
            resolve(request)
        },1000)
    })
}

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
   
  const {id} = useParams();

  useEffect (() =>{
        getItemData(id).then(response =>{ 
        setProduct(response);
        });
    },[id])
    
    return (
        //debe estar en ItemDetail
   <ItemDetail product ={product} />
  )
}

export default ItemDetailContainer
