import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import getProducts from "../../helpers/getProducts";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const {initialProducts} = require('../../helpers/configuration');
const initialProduct = initialProducts[0];

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(initialProduct);
    const [error, setError] = useState(false);
    const {productId} = useParams();
    const updateProducts = () => {
        getProducts(productId)
            .then((product) => setProduct(product))
            .catch((error) => {
                console.log(error);
                setError(true);
            })};

    useEffect(() => {
        updateProducts();
    }, []);

    return(
        <>
            { error && <Navigate to="/oops" replace={true}/> }
            <ItemDetail {...product} />
        </>
    );
};

export default ItemDetailContainer;