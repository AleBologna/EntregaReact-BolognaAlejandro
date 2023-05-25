import "./cartWidget.css"
import 'boxicons'
function CartWidget (){
return (
    <div className="cartClass">
    <box-icon name='cart' color='#fff'></box-icon>
    <span>0</span>
    </div>
)
}
export default CartWidget;