import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import getDocsFromFirebase from "../../helpers/getDocsFromFirebase";

const {initialProducts} = require('../../helpers/configuration');
const initialProduct = initialProducts[0];

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(initialProduct);
    const [error, setError] = useState(false);
    const {productId} = useParams();
    const updateProducts = () => {
        getDocsFromFirebase(productId, "id")
            .then((result) => result.data() ? setProduct(result.data()) : setError(true))
            .catch((error) => {
                console.log(error);
            })};

    useEffect(() => {
        updateProducts();
    }, [productId]);

    return(
        <>
            { error && <Navigate to="/oops" replace={true}/> }
            <ItemDetail {...product} />
        </>
    );
};

export default ItemDetailContainer;