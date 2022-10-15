import React from "react";
import '../../stylesheets/Main.css';
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

const Main = ({cartBadge}) => {
    const greeting = "🌱Mirá, elegí y suma más vida a tu vida🪴";
    
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={greeting} />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />}/>
                <Route path="/canasta" element={<Cart />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </main>
    );
};

export default Main;