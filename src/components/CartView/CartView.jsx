import "./CartView.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
function CartView() {
  const {cart, removeItem} = useContext(cartContext)
  if(cart.length !== 0)  
  return (
    <div>
      <h2 style={{color:"black"}}>CARRITO</h2>
      <table style={{border:"1px solid black"}}>
      <tr >
        <th style={{color:"black"}}>type</th>
        <th style={{color:"black"}}>type</th>
        <th style={{color:"black"}}>type</th>
        <th style={{color:"black"}}>type</th>
      </tr>
      {cart.map( el => <div key={el.id} style={{color:"black"}}>
        <tr>
          <td>{el.title}</td>
          <td>{el.price}</td>
          <td>{el.count}</td>
          <td onClick={()=>{removeItem(el.id)}}>x</td>
        </tr>
      </div>)}

      </table>
    </div>
  )
  return(
    <h1 style={{color:"black"}}>TU CARRITO ESTÁ VACÍO</h1>
  )
}

export default CartView
