import ItemList from "../ItemList/index.jsx";
import "./main.css";


function ItemListContainer(props){
    //console.log(props.data)
    return(
        <section className="title" id="Home">
            <div className="max-width">
                <h1 className="title">{props.greeting}</h1>
            <ItemList/>
            </div>
        </section>
    )
}
export default ItemListContainer;