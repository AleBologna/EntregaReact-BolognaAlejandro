import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getItemData } from '../../services/firebase';


function ItemDetailContainer() {
    const [errors,setErorrs] = useState(null)
  const [product, setProduct] = useState(null)
   
  const {id} = useParams();
  
  useEffect (() =>{
        getItemData(id)
        .then(response =>{ 
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
