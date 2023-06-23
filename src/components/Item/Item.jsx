
import './item.css'
import { Link } from 'react-router-dom';
function Item(props){
return(
<>
<Link className="decoration" to={`/product/${props.id}`}>
    <div className="card">
        <div className='card-Box'>
            <img className='card-Image' src={props.img} alt="img" />
        </div>
        <div className='card-Info'>
            <p className='card-Title'>{props.title}</p>
            <strong><h3 className='card-Price'>${props.price}</h3></strong>
        </div>
   
        {
            props.stock === 0 && <p style={{color:"#FF4A41", marginTop:"auto"}}>No hay stock</p>
        }
        <button className='btn-Detail'>Ver detalle</button>
    
    </div>
    </Link>
</>
)
}
export default Item;