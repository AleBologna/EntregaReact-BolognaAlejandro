import { useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { cartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
function ItemDetail({ product }) {
  const { addItem, removeItem, isInCart } = useContext(cartContext);
  
  function onAddToCart(count) {
    addItem(product, count);
  }

  if (product) {
    if(product.img !== undefined){
    return (
      <>
        <div className="box-detail">
          <div className="box-img">
            <img className="img-detail" src={product.img} alt="img" />
          </div>
          <div className="textDetail">
            <h3 className="classCategory">{product.category}</h3>
            <h1 className="classTitle">{product.title}</h1>
            <h3 className="classPrice">Precio: ${product.price}</h3>
            {isInCart(product.id) ? (
              <div className="containerBtn">
              <Link to="/cart" className="btnLink">Ir al carrito</Link>
              <a onClick={() => removeItem(product.id)} className="btnEliminar">Eliminar</a>
              </div>
            ) : (
              <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
            )}
          </div>
        </div>
      </>
    )}else{
      return (
      <div className="box2">    
        <box-icon type='solid' name='shopping-bag' style={{height:"300px", width:"300px"}}></box-icon>
        <p>No se encontró el producto</p>
     </div>
     )
    }
  }
  return <Loader />;
}

export default ItemDetail;
