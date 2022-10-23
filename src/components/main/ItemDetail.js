import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import '../../stylesheets/ItemDetail.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/CartContext';

const ItemDetail = (product) => {
    const priceWithDiscount = product.pricing.netAmount - ((product.pricing.netAmount * product.pricing.discountPercentage) / 100);
    const wateringLevel = ["Bajo", "Medio", "Alto"];
    const isPricingDiscount = product.pricing.discountPercentage > 0;
    const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
    const { addItem } = useContext(Context);
    const onAdd = (count) => {
        setIsAddToCartClicked(true);
        addItem({...product, finalPricePerUnit: priceWithDiscount, finalPrice: priceWithDiscount * count, quantity: count}, count);
    };
    
    return(
        <section className="item-detail-section">
            <div className="item-detail-container">  
                <div className="detail-container">
                    <img src={product.pictureUrl} alt={product.title} />
                    <div className="detail-attributes">
                        <div className="attributes">
                            <h2>{product.title}</h2>
                            <span>{product.category}</span>
                            <span>Riego {wateringLevel[product.caring.watering - 1]}</span>
                            <span>Quedan {product.stock} disponibles</span>
                            <span className={!isPricingDiscount ? "price" : undefined}>Precio: <strong className={!isPricingDiscount ? "strong" : undefined}>$ {product.pricing.netAmount}</strong> c/u</span>
                            {isPricingDiscount && (
                            <>
                                <span>Descuento: {product.pricing.discountPercentage}%</span>
                                <span className="price">Final: <strong className="strong">$ {priceWithDiscount}</strong> c/u</span>
                            </>
                            )}
                        </div>
                        <div className="end-btn-container">
                            <Link to="/canasta"><button className={isAddToCartClicked ? "end-btn visible" : "end-btn"}>Finalizar compra</button></Link>
                            <ItemCount 
                                extraStyles={isAddToCartClicked ? {display: "none"} : {display: "block"}}
                                initialValue={0}
                                stock={product.stock}
                                onAdd={onAdd} />
                        </div>
                    </div>
                </div>
                <div className="detail-description">
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;