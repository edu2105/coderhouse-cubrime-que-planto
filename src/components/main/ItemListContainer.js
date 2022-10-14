import React, {useState, useEffect} from "react";
import '../../stylesheets/ItemListContainer.css'
import ItemList from "./ItemList";
import getProducts from "../helpers/getProducts";
import { Navigate, useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const {initialProducts} = require('../../configuration');
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    const updateProducts = () => {
        getProducts(categoryId)
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    };

    useEffect(() => {
        updateProducts();
    }, [categoryId]);

    return(
        <div className="item-list-container">
            { error && <Navigate to="/oops" replace={true}/> }
            <h1>{greeting}</h1>
            <ItemList products={products} loading={loading} />
        </div>
    );
};

export default ItemListContainer;