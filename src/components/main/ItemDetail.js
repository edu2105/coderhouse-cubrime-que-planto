import React from "react";
import ItemCount from "./ItemCount";
import '../../stylesheets/ItemDetail.css';

const ItemDetail = ({id, title, description, pictureUrl, category, stock, pricing, caring, onAdd}) => {
    const priceWithDiscount = pricing.netAmount - ((pricing.netAmount * pricing.discountPercentage) / 100);
    const wateringLevel = ["Bajo", "Medio", "Alto"];
    
    return(
        <section className="item-detail-section">
            <div className="item-detail-container">  
                <div className="detail-container">
                    <div className="image">
                        <img src={pictureUrl} alt={title} />
                    </div>
                    <div className="detail-attributes">
                        <div className="attributes">
                            <h2>{title}</h2>
                            <span>{category}</span>
                            <span>Riego <strong>{wateringLevel[caring.watering - 1]}</strong></span>
                            <span>Quedan <strong>{stock}</strong> disponibles</span>
                            <span className={pricing.discountPercentage === 0 ? "price" : undefined}>Precio: <strong>$ {pricing.netAmount}</strong> c/u</span>
                            {pricing.discountPercentage > 0 && (
                            <>
                                <span>Descuento: {pricing.discountPercentage}%</span>
                                <span className="price">Final: <strong>$ {priceWithDiscount}</strong> c/u</span>
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