import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const localCart = JSON.parse(localStorage.getItem("items")) || [];
    const [cart, setCart] = useState(localCart);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        let quantity = 0;
        let price = 0;

        cart.forEach( item => {
            quantity += item.quantity;
            price += item.finalPrice;

            setTotalQty(quantity);
            setTotalPrice(price);
        })

        localStorage.setItem("items", JSON.stringify(cart));
    }, [cart])

    const addItem = (item, itemQty) => {
        setTotalQty(totalQty + itemQty);
        if(isInCart(item.id)){
            const cartUpdated = cart.map( cartItem => {
                const newQuantity = cartItem.quantity + itemQty;
                if(cartItem.id === item.id){
                  return {...cartItem, quantity: newQuantity, finalPrice: cartItem.finalPricePerUnit * newQuantity};
                }else{
                    return cartItem;
                } 
            });
            setCart(cartUpdated);
        }else{
            setCart([...cart, item]);
        }
    };

    const deleteItem = (id) => {
        cart.length === 1 ? clear() : setCart(cart.filter( item => item.id !== id ));
    };

    const isInCart = (id) => cart.some( item => item.id === id);
    
    const clear = () => {
        setCart([]);
        setTotalQty(0);
        setTotalPrice(0);
    };

    return(
        <CartContext.Provider value={{cart, totalQty, totalPrice, addItem, deleteItem, isInCart, clear}}>{children}</CartContext.Provider>
    )
};