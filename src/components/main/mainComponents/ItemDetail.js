import React, { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css';

const ItemDetail = ({loading, ...product}) => {
    const priceWithDiscount = product.pricing.netAmount - ((product.pricing.netAmount * product.pricing.discountPercentage) / 100);
    const wateringLevel = ["Bajo", "Medio", "Alto"];
    const isPricingDiscount = product.pricing.discountPercentage > 0;
    const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
    const { addItem, isInCart } = useContext(CartContext);

    const disableCartBtn = isInCart(product.id);
    const onAdd = (count) => {
        toast.success(`Agregaste ${count} ${product.title} a tu canasta`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setIsAddToCartClicked(true);
        addItem(
            {   ...product,
                finalPricePerUnit: priceWithDiscount,
                finalPrice: priceWithDiscount * count,
                quantity: count
            }, count);
    };

    useEffect(() => {
        disableCartBtn && setIsAddToCartClicked(true);
    }, [disableCartBtn])
    
    return(
        <section className="item-detail-section">
            {loading ? (<CircularProgress />) : (
                <>
                    <div className="item-detail-container">  
                        <div className="detail-container">
                            <img src={product.detailImg} alt={product.title} />
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
                                        stock={product.stock}
                                        onAdd={onAdd}
                                        disableCartBtn={disableCartBtn} />
                                </div>
                            </div>
                        </div>
                        <div className="detail-description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <ToastContainer />
                </>
            )}
        </section>)
};

export default ItemDetail;