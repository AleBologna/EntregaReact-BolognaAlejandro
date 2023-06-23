import "./cartView.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import 'boxicons'
import { useNavigate } from 'react-router-dom';
import { createOrder } from "../../services/firebase";
import CheckOut from "../CheckOut/CheckOut";


function CartView() {
  const style ={color:"white"};
  const {cart, removeItem, totalPrice, clear} = useContext(cartContext)
  const navigateTo = useNavigate()
  async function handleConfirm(userData){
    const order = {
      items: cart,
      buyer: userData,
      date: new Date(),
      totalPrice: totalPrice(),
    } 
    const id = await createOrder(order);
    clear();
    navigateTo(`/order-confirmation/${id}`)
  }
  if(cart.length !== 0)  
  return (
    <div>
      <h2 className="titleCart">CARRITO</h2>
      <table className="cartTable">
      <thead className="cartTable_Head">
      <tr className="cartTable_Row">
        <th style={style}>Titulo</th>
        <th style={style}>Cantidad</th>
        <th style={style}>Precio</th>
        <th style={style}>Subtotal</th>
        <th style={style}>Remover</th>
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
      <CheckOut onConfirm={handleConfirm} />
      <br />
      <br />
     
    </div>
  )
  return(
    <div className="box3">    
   <box-icon type='solid' name='basket' style={{height:"300px", width:"300px"}}></box-icon>
   <p>¡Tu carrito está vacio!</p>
</div>
  )
}

export default CartView
