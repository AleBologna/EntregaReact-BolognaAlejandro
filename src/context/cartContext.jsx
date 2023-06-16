import { createContext, useState } from "react";

export const cartContext = createContext({cart:[]}) 

export function CartContextProvider({children}){
    const [cart,setCart] = useState([]);
    
    function addItem(product, count){
        const newCart = [...cart]
        if(isInCart(product.id)){
            setCart(
                cart.map((cartItem) =>{
                    if(cartItem.id === product.id){
                        return{ ...cartItem, count: cartItem.count + count}
                    }else{
                        return { ...cartItem }
                    }
                })
            );
        }else{
            newCart.push({...product, count})
            setCart(newCart)
        }
    } 
    function isInCart(id){
        return cart.some(el => el.id === id)
    }
    function countItems(){
        let total=0;
        cart.forEach(el => {
            total += el.count
        })
        return total;
    }
 
    function clear(){
        setCart([]);
    }
    function removeItem(idRemove){
         setCart(cart.filter (el => el.id !== idRemove))
    }
    return(
        <cartContext.Provider value = { { cart, setCart, addItem, countItems, removeItem, clear, isInCart} }>
            {children}
        </cartContext.Provider>
    ) 
}