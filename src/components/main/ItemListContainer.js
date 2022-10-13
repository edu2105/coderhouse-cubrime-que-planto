import React, {useState, useEffect} from "react";
import '../../stylesheets/ItemListContainer.css'
import ItemList from "./ItemList";
import getProducts from "../helpers/getProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const {initialProducts} = require('../../configuration');
    const [products, setProducts] = useState(initialProducts);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    const updateProducts = () => {
        getProducts(categoryId)
            .then((products) => {
                setProducts(products);
                setLoading(false);
            });
    };

    useEffect(() => {
        console.log("HOLA");
        updateProducts();
    }, [categoryId]);

    return(
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <ItemList products={products} loading={loading} />
        </div>
    );
};

export default ItemListContainer;