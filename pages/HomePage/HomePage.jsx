import ItemListContainer from "../../src/components/ItemListContainer/ItemListContainer"
import "./homePage.css"
function HomePage() {
  return (
    <>
      <div className="containerImg">
        <img src="/src/assets/images/imgPrincipal.webp" className="imgPrincipal" alt="" />
      </div>
      <div className="containerImgMedia">
        <img src="/src/assets/images/imgPrincipalMedia.webp" className="imgMediaPrincipal" alt="" />
      </div>
      <ItemListContainer />
    </>
  )
}

export default HomePage
