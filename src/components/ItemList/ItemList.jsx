import "./itemList.css"
import Flex from '../Flex/Flex';
import Item from '../Item/Item'; 
import 'boxicons'
import Loader from '../Loader/Loader';
function ItemList({products, isLoading}){
  if(isLoading)
  return <Loader/>

  if(products.length ===0) 
  return(
<div className="box">    
   <box-icon type='solid' name='shopping-bag' style={{height:"300px", width:"300px"}}></box-icon>
   <p>No se encontraron productos</p>
</div>
    ) 
    
    
  return (
    <>
    <Flex>
      {
        products.map((el) => (
        //Llama a Item y le pasa como props lo que tiene el objeto dataBase
        <Item 
            key={el.id}
            {...el}
          />   
        ))
        }
        </Flex>
    </>
  )
}

export default ItemList
