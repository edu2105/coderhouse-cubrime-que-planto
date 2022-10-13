import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import getProducts from "../helpers/getProducts";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const initialProduct = {
    id: 1,
    title: "",
    description: "",
    price: "",
    pictureUrl: "https://unsplash.com/es/fotos/v5re1loi264"
};

const ItemDetailContainer = () => {
    const[product, setProduct] = useState(initialProduct);
    const {productId} = useParams();
    const updateProducts = () => {
        getProducts(productId)
            .then((product) => setProduct(product));
    };
    const onAdd = () => {
        console.log("Item added to bucket");
    };

    useEffect(() => {
        updateProducts();
    }, []);

    return(
        <div className="item-detail-container">
            <ItemDetail {...product} />
            <ItemCount 
                    initialValue={0}
                    stock={5}
                    onAdd={onAdd} />
        </div>
    );
};

export default ItemDetailContainer;