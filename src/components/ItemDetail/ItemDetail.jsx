import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"
function ItemDetail({product}) {
  return (
    <>
      <div className="box-detail">
        <div className="box-img">
        <img className="img-detail" src={product.img} alt="" />
        </div>
        <div>
        <h1 className="color">{product.title}</h1>
        <h1 className="color">Precio: ${product.price}</h1>
        <ItemCount stock={product.stock}/>
        </div>
        
      </div>
    </>
  )
}

export default ItemDetail
