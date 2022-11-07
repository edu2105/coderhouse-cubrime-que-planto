import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import getProducts from "../../../firebase/getProducts";

const {initialProducts} = require('../../../helpers/configuration');

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(initialProducts[0]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {productId} = useParams();
    const updateProducts = () => {
        getProducts("id", productId)
            .then((result) => {
                setIsLoading(false);
                result.data() ? setProduct(result.data()) : setError(true)
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })};

    useEffect(() => {
        setIsLoading(true);
        updateProducts();
    }, [productId]);

    return(
        <>
            { error && <Navigate to="/oops" replace={true}/> }
            <ItemDetail 
                {...product}
                loading={isLoading} />
        </>
    );
};

export default ItemDetailContainer;