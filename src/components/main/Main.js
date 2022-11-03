import React from "react";
import './Main.css';
import ItemDetailContainer from "./mainComponents/ItemDetailContainer";
import ItemListContainer from "./mainComponents/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import PageNotFound from "./notFound/PageNotFound";
import OrderDetailContainer from "./order/OrderDetailContainer";

const Main = () => {
    const greeting = "🌱Mirá, elegí y suma más vida a tu vida🪴";
    
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={greeting} />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />}/>
                <Route path="/canasta" element={<Cart />}/>
                <Route path="/orden/:orderId" element={<OrderDetailContainer />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </main>
    );
};

export default Main;