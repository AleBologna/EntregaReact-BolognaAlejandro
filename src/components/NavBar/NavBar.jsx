import CartWidget from "./CartWidget";
import "./navBar.css"

function NavBar(){
    return(
        <nav className="nav">
        <img src="../src/assets/images/logo.png" alt="LOGO" className="logo"/>
        <ul className="navList"> 
        <li className="navLinks"><a href="#">Destacados</a></li> 
        <li className="navLinks"><a href="#">Ropa</a></li> 
        <li className="navLinks"><a href="#">Calzados</a></li> 
        <li className="navLinks"><a href="#">Accesorios</a></li> 
        <li className="navLinks"><a href="#"></a></li> 
       </ul> 
       <CartWidget/>
       </nav>    
    )

}

export default NavBar;