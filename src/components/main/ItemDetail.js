import React from "react";
import ItemCount from "./ItemCount";
import '../../stylesheets/ItemDetail.css';

const ItemDetail = ({id, title, description, pictureUrl, category, stock, pricing, caring, onAdd}) => {
    const priceWithDiscount = pricing.netAmount - ((pricing.netAmount * pricing.discountPercentage) / 100);
    const wateringLevel = ["Bajo", "Medio", "Alto"];
    const isPricingDiscount = pricing.discountPercentage > 0;
    
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
                        <ItemCount 
                            className="item-count"
                            initialValue={0}
                            stock={stock}
                            onAdd={onAdd} />
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