import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    useEffect (function(){
        console.log ("the component is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }
    return(
        <div className="catalog">
            <h1>Check out our {products.length} amazing products in our catalog!</h1>
            {products.map (p => <Product data={p}></Product>)}
        </div>

    );

}

export default Catalog;