import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Order.css';
import CreditCardForm from './creditCardForm/CreditCardForm';
import { useEffect } from 'react';

const Order = ({onSubmitForm}) =>{
    const [isDelivery, setIsDelivery] = useState(false);
    const [isCard, setIsCard] = useState(false);
    const [isCardFormSubmitted, setIsCardFormSubmitted] = useState(false);
    const [enableSubmission, setEnableSubmission] = useState(true);
    const [orderData, setOrderData] = useState({
        name: '',
        surname: '',
        email: '',
        address: '',
        cardDetails: '',
        delivery: false,
        cardPayment: false
    });
    const deliveryOnChangeHandler = (isChecked) => {
       setIsDelivery(isChecked);
        setOrderData({
            ...orderData,
            delivery: isChecked
        });
    }
    const cardOnChangeHandler = (isChecked) => {
        setIsCard(isChecked);
        isChecked && setIsCardFormSubmitted(false);
        setOrderData({
            ...orderData,
            cardPayment: isChecked
        });
    }
    const onCreditCardFormSubmitHandler = (event, cardInfo) => {
        event.preventDefault();
        setIsCardFormSubmitted(true);

        setOrderData({
            ...orderData,
            cardDetails: cardInfo
        });
    };
    const onInputChangeHandler = (e) => {
        const {name, value} = e.target;
        setOrderData({
            ...orderData,
            [name]: value
        });
    };

    useEffect(() => {
        orderData.cardPayment ? (isCardFormSubmitted ? setEnableSubmission(true): setEnableSubmission(false)) : setEnableSubmission(true);
    }, [orderData, isCardFormSubmitted]);

    return(
        <div className='order-form-container'>
            <form className='order-form' onSubmit={(e) => onSubmitForm(e, orderData)}>
                <fieldset className='order-form-fieldset'>
                    <legend className='order-form-legend'>Orden</legend>
                    <h3 className='order-form-title'>¿Quién compra?</h3>
                    <section className="order-form-details">
                        <div className="form-floating-effect">
                            <input 
                                className='floating-input' 
                                type="text" 
                                placeholder=' '
                                name='name'
                                value={orderData.name}
                                onChange={onInputChangeHandler}
                                required />
                            <label className='floating-label'>Nombre</label>
                        </div>
                        <div className="form-floating-effect">
                            <input 
                                className='floating-input' 
                                type="text" 
                                placeholder=' ' 
                                name='surname'
                                value={orderData.surname}
                                onChange={onInputChangeHandler}
                                required />
                            <label className='floating-label'>Apellido</label>
                        </div>
                        <div className="form-floating-effect">
                            <input 
                                className='floating-input' 
                                type="email" 
                                placeholder=' ' 
                                name='email'
                                value={orderData.email}
                                onChange={onInputChangeHandler}
                                required />
                            <label className='floating-label'>Email </label>
                        </div>
                        <div className="form-floating-effect">
                            <input 
                                className='floating-input' 
                                type="text" 
                                placeholder=' ' 
                                name='address'
                                value={orderData.address}
                                onChange={onInputChangeHandler}
                                required />
                            <label className='floating-label'>Dirección</label>
                        </div>
                    </section>
                    <h3 className='order-form-title'>Método de entrega</h3>
                    <section className="order-form-check">
                        <div className={isDelivery ? 'order' : 'order active'}>
                            <StorefrontIcon className='order-icon' />
                            <p className='order-detail'>Retiralo en alguno de <Link to="/canasta">nuestros locales</Link></p>
                        </div>
                        <Switch 
                            onChange={(e) => deliveryOnChangeHandler(e.target.checked)}
                            color="default"
                            className='order-switch' />
                        <div className={isDelivery ? 'order active' : 'order'}>
                            <DeliveryDiningIcon className='order-icon' />
                            <p className='order-detail'>Te lo llevamos a tu casa</p>
                        </div>
                    </section>
                    <h3 className='order-form-title'>Método de pago</h3>
                    <section className="order-form-check">
                        <div className={isCard ? 'order' : 'order active'}>
                            <LocalAtmIcon className='order-icon' />
                            <p className='order-detail'>En Efectivo</p>
                        </div>
                        <Switch 
                            onChange={(e) => cardOnChangeHandler(e.target.checked)}
                            color="default"
                            className='order-switch' />
                        <div className={isCard ? 'order active' : 'order'}>
                            <CreditCardIcon className='order-icon' />
                            <p className='order-detail'>Con tarjeta de Débito/Crédito</p>
                        </div>
                    </section>
                    <input 
                        className={enableSubmission ? 'order-form-submit' : 'order-form-submit disabled'}
                        type="submit" 
                        value="Finalizar Compra" />
                </fieldset>
            </form>
            { (isCard && !isCardFormSubmitted) && (<CreditCardForm onSubmitHandler={onCreditCardFormSubmitHandler} />)}
        </div>
    )
}

export default Order;