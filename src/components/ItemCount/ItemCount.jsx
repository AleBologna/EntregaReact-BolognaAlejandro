import "./ItemCount.css"
import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1)
  function add(){
    if(count < props.stock){
      setCount(count+1);
    }
  }
  let disabledAdd = count === props.stock;
   function subtract(){ 
    if(count>1){
    setCount(count-1);
   } 
  } 
  let disabledSubtract = count === 1;
  
  return (
    <div className="count-Center">
        <div className='count-Info'>
          <button disabled={disabledSubtract} onClick={subtract} className="btn-Count"><p>-</p></button>
          <span className="count-Number">{count}</span>
          <button disabled={disabledAdd} onClick={add} className="btn-Count"><p>+</p></button>
        </div>
        <button className="btn-Cart">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
