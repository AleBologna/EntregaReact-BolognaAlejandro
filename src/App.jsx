import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import HomePage from '../pages/HomePage/HomePage';

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkVbBU4jKHGszqhCvievR-f8JEspbBVeo",
  authDomain: "react-proyectofinal-1edf2.firebaseapp.com",
  projectId: "react-proyectofinal-1edf2",
  storageBucket: "react-proyectofinal-1edf2.appspot.com",
  messagingSenderId: "357443718526",
  appId: "1:357443718526:web:64465a9ce5f6037abab72f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
console.log(db);
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
        <Route path="*" element={ <h1 style={{color:"black"}}>ERROR 404: PAGE NOT FOUND</h1>} />
      </Routes> 
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App
