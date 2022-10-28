import React, {useState, useEffect} from "react";
import '../../stylesheets/ItemListContainer.css'
import ItemList from "./ItemList";
import { Navigate, useParams } from "react-router-dom";
import getDocsFromFirebase from "../../helpers/getDocsFromFirebase";

const {initialProducts} = require('../../helpers/configuration');

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const updateProducts = () => {
        getDocsFromFirebase("category", categoryId)
            .then( (result) => {
                const listProducts = result.docs.map( item => {
                    return {
                        ...item.data(),
                        docId: item.id
                    }
                });
                console.log(listProducts);
                listProducts.length ? setProducts(listProducts) : setError(true);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
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