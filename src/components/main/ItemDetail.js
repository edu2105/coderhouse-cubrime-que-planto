import React, { useState } from "react";
import ItemCount from "./ItemCount";
import '../../stylesheets/ItemDetail.css';
import { Link } from "react-router-dom";

const ItemDetail = ({id, title, description, pictureUrl, category, stock, pricing, caring}) => {
    const priceWithDiscount = pricing.netAmount - ((pricing.netAmount * pricing.discountPercentage) / 100);
    const wateringLevel = ["Bajo", "Medio", "Alto"];
    const isPricingDiscount = pricing.discountPercentage > 0;
    const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
    const onAdd = () => {
        console.log("Item added to bucket");
        setIsAddToCartClicked(true);
    };
    
    return(
        <section className="item-detail-section">
            <div className="item-detail-container">  
                <div className="detail-container">
                    <img src={pictureUrl} alt={title} />
                    <div className="detail-attributes">
                        <div className="attributes">
                            <h2>{title}</h2>
                            <span>{category}</span>
                            <span>Riego {wateringLevel[caring.watering - 1]}</span>
                            <span>Quedan {stock} disponibles</span>
                            <span className={!isPricingDiscount ? "price" : undefined}>Precio: <strong className={!isPricingDiscount ? "strong" : undefined}>$ {pricing.netAmount}</strong> c/u</span>
                            {isPricingDiscount && (
                            <>
                                <span>Descuento: {pricing.discountPercentage}%</span>
                                <span className="price">Final: <strong className="strong">$ {priceWithDiscount}</strong> c/u</span>
                            </>
                            )}
                        </div>
                        <div className="end-btn-container">
                            <Link to="/canasta"><button className={isAddToCartClicked ? "end-btn visible" : "end-btn"}>Finalizar compra</button></Link>
                            <ItemCount 
                                extraStyles={isAddToCartClicked ? {display: "none"} : {display: "block"}}
                                initialValue={0}
                                stock={stock}
                                onAdd={onAdd} />
                        </div>
                    </div>
                </div>
                <div className="detail-description">
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;