import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css"
import { Link, useLocation } from "react-router-dom";

function NavBar(){
    
let location = useLocation();
useEffect(() =>{
    window.scrollTo(0,0);
}, [location])

    let [activeBtn,setActiveBtn] = useState(false);
    return(
        <nav className="nav">

        <Link to="/"><img src="/assets/images/logo.png" alt="LOGO" className="logo"/></Link>

        <div onClick={() => setActiveBtn(!activeBtn)} className="burger">
            <div className={`span ${activeBtn ? 'span1' : ''}`}></div>
            <div className={`span ${activeBtn ? 'span2' : ''}`}></div>
            <div className={`span ${activeBtn ? 'span3' : ''}`}></div>
        </div>

        <ul className={`navList ${activeBtn ? '' : 'mobileMenu'}`}> 
            <li className="navLinks"><Link to="/category/Remeras">Remeras</Link></li> 
            <li className="navLinks"><Link to="/category/Calzados">Calzados</Link></li> 
            <li className="navLinks"><Link to="/category/Pantalones">Pantalones</Link></li> 
            <li className="navLinks"><Link to="/category/Buzos">Buzos</Link></li> 
       </ul> 

       <CartWidget/>

       </nav>
    )

}

export default NavBar;