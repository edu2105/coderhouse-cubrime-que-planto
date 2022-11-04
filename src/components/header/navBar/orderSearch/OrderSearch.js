import React from 'react';
import { useState } from 'react';
import ReceiptIcon from '@mui/icons-material/Receipt';
import getOrders from "../../../../firebase/getOrders";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
import './OrderSearch.css';

const OrderSearch = () => {
    const [orderSearch, setOrderSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [orderResult, setOrderResult] = useState({
        orderId: "", 
        totalQty: "", 
        totalPrice: "",
        date: ""
    });
    const clearSearch = () => {
        setOrderResult("");
        setOrderSearch(false);
    }
    const onOrderSearchClickHandler = () => {
        orderSearch && setOrderResult("");
        setOrderSearch(current => !current);
    };
    const onOrderChangeHandler = (id) => {
        if(!id){
            setOrderResult("");
            setIsLoading(false);
            setError(false);
            return;
        }
        setIsLoading(true);
        getOrders(id)
            .then(result => {
                setError(false);
                setIsLoading(false);
                let date = new Date(1970, 0, 1);
                date.setSeconds(result.data().date.seconds - 10800);
                setOrderResult({
                    ...orderResult,
                    orderId: id, 
                    totalQty: result.data().totalQty, 
                    totalPrice: result.data().totalPrice,
                    date: date
                });
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    };

    return (
        <div className="order-search-container">
            <ReceiptIcon 
                style={{fontSize: "1.5rem", color: "white", cursor: "pointer"}}
                titleAccess="Mis ordenes"
                onClick={onOrderSearchClickHandler} />
            <span className="order-search-title">Ordenes</span>
            {orderSearch && 
            <section className="order-search-view">
                <input 
                    type="text" 
                    className="order-search-input"
                    placeholder="Código de orden"
                    autoFocus={orderSearch && "autoFocus"}
                    onChange={e => {onOrderChangeHandler(e.target.value)}} />
                {isLoading && <CircularProgress />}
                {!error ? (
                            <div className={orderResult.orderId ? "order-search-result" : "order-search-result hidden"}>
                                {orderResult.date && <span>{`Compra realizada el ${orderResult.date.getDate()}-${orderResult.date.getMonth()+1}-${orderResult.date.getFullYear()}`}</span>}
                                <span>{orderResult.totalQty} productos = ${orderResult.totalPrice} final</span>
                                <h4>Ver más detalles <Link to={`/orden/${orderResult.orderId}`} onClick={clearSearch}>{orderResult.orderId}</Link></h4>
                            </div>) : (<p className="order-search-failed">La orden que buscas no existe, lo sentimos</p>)}
            </section>}
        </div>
    );
}

export default OrderSearch;