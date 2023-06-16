import Flex from '../Flex/Flex';
import Item from '../Item/Item'; 
import Loader from '../Loader/Loader';
function ItemList({products, isLoading}){
  if(isLoading)
  return <Loader/>

  if(products.length ===0) return <h1 style={{color:"black"}}>No se encontraron productos</h1>
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
