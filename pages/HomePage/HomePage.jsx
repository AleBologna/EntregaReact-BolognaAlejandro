import { useParams } from "react-router-dom";
import ItemListContainer from "../../src/components/ItemListContainer/ItemListContainer"
import "./homePage.css"
function HomePage() {
  
  const {categoryId} = useParams();

  return (
    <>
    {categoryId === undefined?
     <>
    <div className="containerImg">
        <img src="/assets/images/imgPrincipal.webp" className="imgPrincipal" alt="" />
      </div>
      <div className="containerImgMedia">
      <img src="/assets/images/imgPrincipalMedia.webp" className="imgMediaPrincipal" alt="" />
      </div>
      </>
      :(
      (categoryId === "Remeras" || categoryId === "Calzados" || categoryId === "Pantalones" || categoryId === "Buzos")
      &&
      <h1 style={{color:"#000"}}>{categoryId}</h1>)
  } 
      <ItemListContainer />
    </>
  )
}

export default HomePage
