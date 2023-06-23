import "./cartView.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import 'boxicons'
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from "../../services/firebase";
import CheckOut from "../CheckOut/CheckOut";


function CartView() {
  const {cart, removeItem, totalPrice, clear} = useContext(cartContext)
  const navigateTo = useNavigate()
  async function handleConfirm(userData){
    const order = {
      items: cart,
      buyer: userData,
      date: new Date(),
      totalPrice: totalPrice(),
    } 
    const id = await createOrder(order)
    clear()
    navigateTo(`/order-confirmation/${id}`)
  }
  if(cart.length !== 0)  
  return (
    <div>
      <h2 style={{color:"black"}}>CARRITO</h2>
      <table className="cartTable">
      <thead className="cartTable_Head">
      <tr className="cartTable_Row">
        <th style={{color:"black"}}>Titulo</th>
        <th style={{color:"black"}}>Cantidad</th>
        <th style={{color:"black"}}>Precio</th>
        <th style={{color:"black"}}>Subtotal</th>
        <th style={{color:"black"}}>Remover</th>
      </tr>
      </thead>
      <tbody>
      {cart.map( el => (
        <tr key={el.id} className="cartTable_Row">
          <td>{el.title}</td>
          <td>{el.count}</td>
          <td>${el.price}</td>
          <td>${el.count * el.price}</td>
          <td onClick={()=>{removeItem(el.id)}}><box-icon className="box-icon" name='trash' color='#af3131' ></box-icon></td>
        </tr>
      ))}
      </tbody>
      </table>
      <div className="cartList_Detail">
      <div className="cartList_Total">
        <h4>Total de compra:</h4>
        <h4>${totalPrice()}</h4>  
      </div>
      </div>
      <Link to="/">Volver al inicio</Link>
      <CheckOut onConfirm={handleConfirm} />
      <br />
      <br />
     
    </div>
  )
  return(
    <h1 style={{color:"black"}}>TU CARRITO ESTÁ VACÍO</h1>
  )
}

export default CartView
