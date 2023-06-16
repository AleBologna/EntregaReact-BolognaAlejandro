import { useContext } from "react";
import "./cartWidget.css"
import 'boxicons'
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
function CartWidget (){
    const styleLink = {
        textDecoration:"none", 
        color:"#fff", 
    }
    
    const {countItems} = useContext(cartContext) 
 
return (
    <Link to="/cart" style={styleLink}>
    <div className="cartClass">
    <box-icon name='cart' color='#fff'></box-icon>
    {countItems() !==0 && <span>{countItems()}</span>}
    </div>
    </Link>
)
}
export default CartWidget;