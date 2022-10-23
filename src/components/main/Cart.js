import React, { useContext } from "react";
import '../../stylesheets/Cart.css';
import { Context } from '../../context/CartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const { cart, totalQty, totalPrice, deleteItem, clear } = useContext(Context);
    console.log(cart);

    return(
        <div className="cart-container">
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
        </div>
    );
};

export default Cart;