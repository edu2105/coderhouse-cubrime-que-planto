import React, { useEffect } from "react";
import './Main.css';
import ItemDetailContainer from "./mainComponents/ItemDetailContainer";
import ItemListContainer from "./mainComponents/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import PageNotFound from "./notFound/PageNotFound";
import OrderDetailContainer from "./order/OrderDetailContainer";
import CookieConsent from "react-cookie-consent";

const Main = () => {

    useEffect(() => {
        window.onbeforeunload = () => window.scrollTo(0, 0);
    }, []);

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />}/>
                <Route path="/canasta" element={<Cart />}/>
                <Route path="/orden/:orderId" element={<OrderDetailContainer />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
            <CookieConsent
                location="bottom"
                buttonText="Entiendo y Acepto"
                cookieName="cookieConsentOk"
                style={{ textAlign: "center", background: "#42bb13", color: "#cfcfcf", fontSize: "1.2rem" }}
                buttonStyle={{ background: "#0092a5", borderRadius: ".5rem", padding: ".5rem", color: "#cfcfcf", fontSize: "13px" }}>
                    Este sitio utiliza cookies para agilizar tu experiencia de compra
            </CookieConsent>
        </main>
    );
};

export default Main;