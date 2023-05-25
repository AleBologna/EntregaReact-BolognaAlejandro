import Flex from '../Flex/Flex';
import Item from '../Item/Item'; 
function ItemList({products}){
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
