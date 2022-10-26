import React, { useContext } from "react";
import '../../stylesheets/Cart.css';
import { Context } from '../../context/CartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import basket from '../../images/basket.png';

const Cart = () => {
    const { cart, totalQty, totalPrice, deleteItem, clear } = useContext(Context);
    const isCartEmpty = cart.length === 0;

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
                    <section className="cart-details-section">
                        <div className="cart-details">
                            { cart.map((item) => {
                            return (
                                <li className="cart-item-detail" key={item.id}>
                                    <img src={item.pictureUrl} alt={item.title} />
                                    <section className="price-details">
                                        <h3>{item.title}</h3>
                                        <span>{item.quantity} x {item.finalPricePerUnit}</span>
                                    </section>
                                    <section className="price-final">
                                        <h3>$ {item.finalPrice}</h3>
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
                                style={{textAlign: "center", color:"red", width: "10rem", marginLeft: "2rem", cursor: "pointer"}}
                                fontSize="large"
                                onClick={clear} />
                            <span>{totalQty} plantas</span>
                            <span>Total: $ {totalPrice}</span>
                        </div>
                    </section>
                ) 
            }
        </div>
    );
};

export default Cart;