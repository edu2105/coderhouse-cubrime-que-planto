import React from "react";

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
    return(
        <>
           <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <div className="item-details">
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </>
    );
};

export default ItemDetail;