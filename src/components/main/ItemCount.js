import React, { useState } from "react";
import '../../stylesheets/ItemCount.css';

const ItemCount = ({initialValue, stock, onAdd, style}) => {
    const [count, setCount] = useState(initialValue);
    const [cartDisabled, setCartDisabled] = useState(true);
    let aux = initialValue;

    const countHandler = op => {
        if(count === stock && op === 1){
            console.log("Maximum stock available");
        }else if(count === 0 && op === -1){
            console.log("Negative values are not allowed");
        }else{
            setCount(count + op);
            aux = count + op;
            aux <= 0 ? setCartDisabled(true) : setCartDisabled(false);
        };
    };

    return(
        <div className="item-count-container">
            <div className="item-count-ui">
                <button className="item-btn left" onClick={() => countHandler(-1)} disabled={count <= 0 ? "disabled" : undefined}>-</button>
                <input type="number" name="items" id="items-count" value={count} readOnly/>
                <button className="item-btn right" onClick={() => countHandler(1)}>+</button>
            </div>
            <button className="cart-btn" onClick={stock > 0 ? onAdd : undefined} disabled={cartDisabled} style={style}>Agregar a canasta</button>
        </div>
    );
};

export default ItemCount;