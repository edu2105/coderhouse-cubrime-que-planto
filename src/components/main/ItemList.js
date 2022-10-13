import React from "react";
import Item from "./Item";
import '../../stylesheets/ItemList.css';

const ItemList = ({products, loading}) => {
    return(
        <div className="item-list">
            {products.map((product) => {
                return(
                    <Item {...product} key={product.id} loading={loading}/>
                );
            })}
        </div>
    );
}; 

export default ItemList;