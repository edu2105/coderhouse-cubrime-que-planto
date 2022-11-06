import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { Navigate, useParams } from "react-router-dom";
import getProducts from "../../../firebase/getProducts";
import './ItemListContainer.css'

const {initialProducts} = require('../../../helpers/configuration');

const ItemListContainer = () => {
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const updateProducts = () => {
        getProducts("category", categoryId)
            .then( (result) => {
                const listProducts = result.docs.map((item) => {
                    return {
                        ...item.data(),
                        docId: item.id
                    }
                });
                listProducts.length ? setProducts(listProducts) : setError(true);
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
            <h1><span role="img" aria-label="growing-plant">🌱</span>Mirá, elegí y suma más vida a tu vida<span role="img" aria-label="plant">🪴</span></h1>
            <ItemList products={products} loading={loading} />
        </div>
    );
};

export default ItemListContainer;