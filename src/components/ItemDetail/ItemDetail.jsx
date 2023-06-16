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
    /*sweet alert*/
    console.log(`Agregaste ${count} - ${product.title} al carrito`);
  }
  if (product) {
    return (
      <>
        <div className="box-detail">
          <div className="box-img">
            <img className="img-detail" src={product.img} alt="" />
          </div>
          <div>
            <h1 className="color">{product.title}</h1>
            <h1 className="color">Precio: ${product.price}</h1>
            {isInCart(product.id) ? (
              <>
              <Link to="/cart">Ir al carrito</Link>
              <button onClick={() => removeItem(product.id)}>eliminar</button>
              </>
            ) : (
              <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
            )}
          </div>
        </div>
      </>
    );
  }
  return <Loader />;
}

export default ItemDetail;
