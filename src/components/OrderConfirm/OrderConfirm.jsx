import { useParams } from 'react-router-dom';

function OrderConfirm() {

    const {orderid} = useParams();
  
    return (
    <div>
      <h1 style={{color:"#000",textAlign:"center", margin:"10px"}}>¡Muchas gracias por tu compra!</h1>
      <h1 style={{color:"#000",textAlign:"center"}}>Tu orden de compra es {orderid}</h1>
    </div>
  )
}

export default OrderConfirm
