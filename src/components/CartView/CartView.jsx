/*Mostrar los productos del context y si esta vacio hacer una condicion*/
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
function CartView() {
  const {cart, removeItem} = useContext(cartContext)
  if(cart.length !== 0)  
  return (
    <div>
      <h2 style={{color:"black"}}>CARRITO</h2>
      {cart.map( el => <ul key={el.id} style={{color:"black"}}>
        <li>{el.title}</li>
        <li>{el.price}</li>
        <li>{el.count}</li>
        <li onClick={()=>{removeItem(el.id)}}>x</li>
      </ul>)}
    </div>
  )
  return(
    <h1 style={{color:"black"}}>TU CARRITO ESTÁ VACÍO</h1>
  )
}

export default CartView
