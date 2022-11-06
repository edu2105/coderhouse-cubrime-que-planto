import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getOrders from '../../../firebase/getOrders';
import OrderDetail from './OrderDetail';
import { Navigate } from 'react-router-dom';

const {initialOrder} = require('../../../helpers/configuration');

const OrderDetailContainer = () => {
    const {orderId} = useParams();
    const [error, setError] = useState(false);
    const [order, setOrder] = useState(initialOrder);
    const updateOrderDetails = () => {
        getOrders(orderId)
            .then(result => result.data() ? setOrder(result.data()) : setError(true))
            .catch((error) => {
                console.log(error);
                setError(true)
            });
    };

    useEffect(() => {
        updateOrderDetails();
    }, [orderId])
    

    return (
        <>
            { error && <Navigate to="/oops" replace={true}/> }
            <OrderDetail 
                id={orderId}
                order={order} />
        </>
    )
};

export default OrderDetailContainer;