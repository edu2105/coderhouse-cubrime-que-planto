import React from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/CartWidget";
import { useState, useEffect, useRef } from "react";
import logo from '../../images/cqp-logo.png';
import '../../stylesheets/Header.css';
import { Link } from "react-router-dom";
import SearchBar from "./navBar/SearchBar";

const Header = () => {
    const {navOptions} = require('../../helpers/configuration');
    const [className, setClassName] = useState("header");
    const headerRef = useRef();
    const onScrollDown = e => {
        const navOffset = headerRef.current.offsetTop;
        return window.pageYOffset > navOffset ? setClassName("header scroll") : setClassName("header");
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollDown);

        return () => {
            window.removeEventListener('scroll', onScrollDown);
        }
    },[]);

    return(
        <header className={className} id="header" ref={headerRef}>
            <Link to="/">
                <img className="logo" src={logo} alt="Company Logo" />
            </Link>
            <NavBar navOptions={navOptions}>
                <SearchBar />
                <CartWidget />
            </NavBar>
        </header>
    );
}

export default Header;