import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props){
    useEffect (function(){
        console.log("this is a product")
    },[]);

    return(
        <div className="product">
            <img src="https://picsum.photos/239/225" alt=""></img>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>{props.data.price}</label>
                <label>Total</label>
            </div>
            <QuantityPicker/>
    
        </div>

    );
}

export default Product;