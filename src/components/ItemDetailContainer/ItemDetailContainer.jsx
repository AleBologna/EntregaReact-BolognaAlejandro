import { useEffect, useState } from 'react';
import dataBase from '../../data/dataBase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

/*LLamo de forma asincrónica al objeto dataBase*/

function getItemData(id){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            const request = dataBase.find( el => el.id === parseInt(id))
            if(request)
            resolve(request)
            else
            reject(new Error("ERROR: Producto no encontrado"))

        },1000)
    })
}

function ItemDetailContainer() {
    const [errors,setErorrs] = useState(null)
  const [product, setProduct] = useState(null)
   
  const {id} = useParams();

  useEffect (() =>{
        getItemData(id).then(response =>{ 
        setProduct(response);
        })
        .catch(error =>{
            setErorrs(error.message)
        })
    },[id])
    if(errors) return (<div style={{color:"black"}}>
        <h1>Error</h1>
        <p>{errors}</p>
        </div>);
    return (
    <>
   <ItemDetail product ={product} />
   
   </>
    )

}

export default ItemDetailContainer
