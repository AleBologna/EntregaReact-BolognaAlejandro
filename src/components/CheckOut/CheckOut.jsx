import {useState } from "react";
import "./checkOut.css";
import 'boxicons';
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
    return (
    

  <form onSubmit={onSubmit}>
    
    <div className="checkoutTitle">
      <h1 style={{color:"black"}}>Ingresa tus datos para completar la compra <box-icon type='solid' name='shopping-bags' style={{width:"35px", height:"30px"}}></box-icon></h1>
    </div>
    <div className="checkout-container">
      <div className="boxInput">
        <label className="label">Nombre</label>
        <input
        required
          value={userData.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="boxInput">
        <label className="label">Teléfono</label>
        <input
        required
          value={userData.phone}
          name="phone"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="boxInput">
        <label className="label">Email</label>
        <input
        required
          value={userData.email}
          name="email"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <button className="btnEdit">Crear orden</button>
      <button className="btnEdit" onClick={handleReset}>Vaciar</button>
      </div>
    </form>
    )
}

export default CheckOut
