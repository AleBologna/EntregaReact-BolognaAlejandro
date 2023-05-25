import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css"
import { Link } from "react-router-dom";

function NavBar(){
    let [activeBtn,setActiveBtn] = useState(false);
    return(
        <nav className="nav">

        <Link to="/"><img src="../src/assets/images/logo.png" alt="LOGO" className="logo"/></Link>

        <div onClick={() => setActiveBtn(!activeBtn)} className="burger">
            <div className={`span ${activeBtn ? 'span1' : ''}`}></div>
            <div className={`span ${activeBtn ? 'span2' : ''}`}></div>
            <div className={`span ${activeBtn ? 'span3' : ''}`}></div>
        </div>

        <ul className={`navList ${activeBtn ? '' : 'mobileMenu'}`}> 
            <li className="navLinks"><Link to="/category/remera">Remeras</Link></li> 
            <li className="navLinks"><Link to="/category/calzado">Calzados</Link></li> 
            <li className="navLinks"><Link to="/category/pantalon">Pantalones</Link></li> 
            <li className="navLinks"><Link to="/category/buzo">Buzos</Link></li> 
       </ul> 

       <CartWidget/>

       </nav>
    )

}

export default NavBar;