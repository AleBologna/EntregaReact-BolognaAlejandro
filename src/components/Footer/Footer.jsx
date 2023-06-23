import 'boxicons'
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
     
      <div className="containerLink">
        
        <ul className="decorationLink">
          
          <li>
            <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
            <box-icon type='logo' name='instagram'  size="md"></box-icon>
            </a>
          </li>
          <li>
            <a href="https://es-la.facebook.com/" target='_blank' rel="noopener noreferrer">
             <box-icon type='logo' name='facebook-circle' size="md"></box-icon>
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/" target='_blank' rel="noopener noreferrer">
              <box-icon type='logo' name='whatsapp'  size="md"></box-icon>
            </a>
          </li>
        </ul>
        <p className="Pie__Texto">Desarrollado por Alejandro G. Bologna</p>
      </div>
    </footer>
  );
}

export default Footer;
