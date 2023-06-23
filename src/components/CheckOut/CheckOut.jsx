import { useContext, useState } from "react"
import "./checkOut.css"
import { cartContext } from "../../context/cartContext"

function CheckOut({onConfirm}) {
  const [userData, setUserData] = useState({
    nombre: "",
    phone: "",
    email: "",
  });
  
  function onInputChange(evt) {
    const prop = evt.target.name;
    const value = evt.target.value;
    const newData = { ...userData };
    newData[prop] = value;
    setUserData(newData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(userData);
    onConfirm(userData);
  }

  function handleReset(evt) {
    evt.preventDefault();
    setUserData({
      nombre: "",
      phone: "",
      email: "",
    });
  }
 
  const styleInput = { display: "flex", marginBottom: 24 };
  const label = { width: "100px", marginRight: 4, color:"black" };

 const {cart} = useContext(cartContext);
    
 if(cart.length !== 0) { 
    return (
    

  <form className="checkout-container" onSubmit={onSubmit}>
      <h1 style={{color:"black"}}>Ingresa tus datos para completar la compra 🛍</h1>
      <div style={styleInput}>
        <label style={label}>Nombre</label>
        <input
          value={userData.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div style={styleInput}>
        <label style={label}>Teléfono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div style={styleInput}>
        <label style={label}>Email</label>
        <input
          value={userData.email}
          name="email"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <button className="btnEdit">Crear orden</button>
      <button onClick={handleReset}>Vaciar</button>
    </form>

  )}else{
  return(
    <h1 style={{color:"Black"}}>Todavía no has hecho compras!</h1>
  )}
}

export default CheckOut
