import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import HomePage from '../pages/HomePage/HomePage';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartContextProvider>    
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/product/:id" element={ <ItemDetailContainer/> }/>
        <Route path="/category/:categoryId" element={ <HomePage/> }/>
        <Route path="/cart" element={ <CartView/> }/>
        <Route path="/order-confirmation/:orderid" element={ <OrderConfirm/>}/>
        <Route path="*" element={ <h1 style={{color:"black", textAlign:"center"}}>ERROR 404: PAGE NOT FOUND</h1>} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App
