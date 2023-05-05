import './main.css'
function ItemListContainer (props){
    const styleGreeting ={
        color: props.color
    }
    return(
        <h1 className='greeting' style={styleGreeting}>{props.children}</h1>
    )
}
export default ItemListContainer;