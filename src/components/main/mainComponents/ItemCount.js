import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, onAdd, extraStyles}) => {
    const [count, setCount] = useState(0);
    const [isMaxStock, setIsMaxStock] = useState(false);
    const [cartDisabled, setCartDisabled] = useState(true);
    let aux = 0;

    const countHandler = op => {
        if(count !== stock || op !== 1){
            setIsMaxStock(false);
            setCount(count + op);
            aux = count + op;
            aux <= 0 ? setCartDisabled(true) : setCartDisabled(false);
        }else{
            setIsMaxStock(true);
        };
    };

    return(
        <div className="item-count-container" style={extraStyles}>
            {isMaxStock && <span className="item-error-msg">{ stock === 0 ? 'No hay stock disponible' : 'No puedes superar el stock'}</span>}
            <div className="item-count-ui">
                <button className="item-btn left" onClick={() => countHandler(-1)} disabled={count <= 0 ? "disabled" : undefined}>-</button>
                <input type="number" name="items" id="items-count" value={count} readOnly/>
                <button className="item-btn right" onClick={() => countHandler(1)}>+</button>
            </div>
            <button className="cart-btn" onClick={stock > 0 ? () => { onAdd(count) } : undefined} disabled={cartDisabled}>Agregar a canasta</button>
        </div>
    );
};

export default ItemCount;