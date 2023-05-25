import ItemCount from '../ItemCount/ItemCount';
import './item.css'
import { Link } from 'react-router-dom';
function Item(props){
return(
<>
    <div className="card">
        <div className='card-Box'>
            <img className='card-Image' src={props.img} alt="img" />
        </div>
        <div className='card-Info'>
            <p className='card-Title'>{props.title}</p>
            <strong><h3 className='card-Price'>${props.price}</h3></strong>
        </div>
    <ItemCount stock={props.stock}/>
    <Link to={`/product/${props.id}`}>
        <button className='btn-Detail'>Ver detalle</button>
    </Link>
    </div>
</>
)
}
export default Item;