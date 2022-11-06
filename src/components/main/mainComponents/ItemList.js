import React from "react";
import Item from "./Item";
import './ItemList.css';

const ItemList = ({products, loading}) => {
    return(
        <div className="item-list">
            {products.map((product) => {
                return(
                    <li key={product.id}>
                        <Item 
                            {...product} 
                            loading={loading} />
                    </li>
                );
            })}
        </div>
    );
}; 

export default ItemList;