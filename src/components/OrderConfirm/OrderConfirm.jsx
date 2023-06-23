import { useParams } from "react-router-dom"

function OrderConfirm() {
  
    const {orderid} = useParams()
//HACER UN GETDOC Y TRAER LOS DETALLES DE LA COMPRA
    return (
    <div>
      <h1 style={{color:"black"}}>tu orden de compra es {orderid}</h1>
    </div>
  )
}

export default OrderConfirm
