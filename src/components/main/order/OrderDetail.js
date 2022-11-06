import React from 'react';
import './OrderDetail.css';

const OrderDetail = ({id, order}) => {
    let date = new Date(1970, 0, 1);
    date.setSeconds(order.date.seconds - 10800);

    return (
        <div className='order-detail-container'>
            <section className='order-detail-section'>
                <h2 className='title'>Detalle de la orden</h2>
                <h3 className='sub-title'>{id}</h3>
                <div className="sub-sections-container">
                    <section className='personal-details-section'>
                        <div className='personal-details'>
                            <h3>Información personal</h3>
                            <span>{order.name}</span>
                            <span>{order.surname}</span>
                            <span>{order.email}</span>
                        </div>
                        <div className="payment-details">
                            <h3>Método de pago</h3>
                            <span>{order.cardPayment ? "Tarjeta de crédito/débito" : "En efectivo"}</span>
                            {order.cardPayment && <span>{`Terminada en **** ${order.cardDetails.number.slice(-4)}`}</span>}
                        </div>
                    </section>
                    <section className="summary-details">
                        <h3>Información de la compra</h3>
                        <span>{`Realizada el ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</span>
                        <ul className="product-details">
                                {order.items.map((item) =>
                                    <li key={item.title}>{item.title} x {item.quantity} a ${item.price} final</li>)}
                        </ul>
                        <h2>Total: <strong>${order.totalPrice}</strong></h2>
                    </section>
                </div>
            </section>
        </div>
    )
};

export default OrderDetail;