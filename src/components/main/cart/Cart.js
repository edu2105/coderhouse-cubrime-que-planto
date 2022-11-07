import React, { useContext, useState } from "react";
import { CartContext } from '../../../context/CartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import basket from '../../../images/basket.png';
import Order from "../order/Order";
import putProducts from '../../../firebase/putProducts';
import SweetAlert2 from "react-sweetalert2";
import CircularProgress from '@mui/material/CircularProgress';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import updateProducts from "../../../firebase/updateProducts";
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { cart, totalQty, totalPrice, addItem, deleteItem, clear } = useContext(CartContext);
    const [swalProps, setSwalProps] = useState({});
    const [enableProgress, setEnableProgress] = useState(false);
    const [orderId, setOrderId] = useState();
    const isCartEmpty = cart.length === 0;
    const onContentCopy = () => {
        navigator.clipboard.writeText(orderId);
        toast.success(`Número de orden copiado al portapapeles`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    };
    const countHandler = (op, item) => {
        if(item.quantity !== item.stock && op === 1){
            addItem(item, 1);
        }else if(item.quantity > 1 && op === -1){
            addItem(item, -1);
        };
    };
    const onOrderFormSubmitHandler = (event, formData) => {
        event.preventDefault();

        setEnableProgress(true);
        const finalOrder = {
            ...formData,
            items: cart.map((item) => (
                    {
                        id: item.id,
                        title: item.title,
                        quantity: item.quantity,
                        price: item.finalPrice
                     })),
            totalQty,
            totalPrice
        };

        cart.forEach( item => {
            const newStock = item.stock - item.quantity;
            updateStock(item.id, newStock);
        });

        putProducts(finalOrder)
            .then(result => {
                setEnableProgress(false);
                setOrderId(result.id);
                setSwalProps({
                    show: true,
                    title: '¡Gracias por tu compra!'
                });           
                clear();
            })
            .catch( e => {
                console.log(e);
            });
    };
    const updateStock = (id, newStock) => {
        updateProducts(id, {stock: newStock});
    };

    return(
        <div className="cart-container">
            { isCartEmpty ? (
                    <div className="cart-empty">
                        <section>
                            <img src={basket} alt="Empty Basket" />
                            <h2>Parece que tu canasta está vacía</h2>
                            <p>Te invitamos a explorar todas nuestras plantas para sumar más vida a tu vida</p>
                            <Link to="/"><button className="button-home">Ir a Inicio</button></Link>
                        </section>
                    </div>
                ) :
                (
                    <>
                        <section className="cart-details-section">
                            <div className="cart-details">
                                { cart.map((item) => {
                                return (
                                    <li className="cart-item-detail" key={item.id}>
                                        <Link to={`/producto/${item.id}`} style={{width: "15%", height: "100%"}}><img src={item.pictureUrl} alt={item.title} /></Link>
                                        <section className="price-details">
                                            <h3>{item.title}</h3>
                                            <div className="quantity-mod">
                                                <button className="quantity-remove" onClick={() => countHandler(-1, item)} disabled={item.quantity === 1 && "disabled"}>-</button>
                                                <span>{item.quantity} x {item.finalPricePerUnit}</span>
                                                <button className="quantity-add" onClick={() => countHandler(1, item)} disabled={item.quantity === item.stock && "disabled"}>+</button>
                                            </div>
                                        </section>
                                        <section className="price-final">
                                            <h3>${item.finalPrice}</h3>
                                            <HighlightOffIcon 
                                                style={{color: "red", cursor: "pointer"}}
                                                onClick={ () => {deleteItem(item.id)} } />
                                        </section>
                                    </li>
                                )
                                }) }
                            </div>
                            <div className="cart-total">
                                <DeleteIcon 
                                    style={{textAlign: "center", color:"red", width: "12%", marginLeft: "2rem", cursor: "pointer"}}
                                    fontSize="large"
                                    onClick={clear} />
                                <span>{totalQty} plantas</span>
                                <span>Total: ${totalPrice}</span>
                            </div>
                        </section>
                        <Order onSubmitForm={onOrderFormSubmitHandler} />
                    </>
                ) }
            { enableProgress && (
            <div className="progress-container">
                <CircularProgress thickness={5}/>
            </div> ) }
            <SweetAlert2 {...swalProps}>
                <p>El código de tu orden es <b>{orderId}</b></p>
                <ContentCopyIcon 
                    style={{cursor: "pointer", marginTop: "1rem"}}
                    onClick={onContentCopy} />
            </SweetAlert2>
            <ToastContainer />
        </div>
    );
};

export default Cart;