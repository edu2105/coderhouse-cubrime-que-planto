import React from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/cartWidget/CartWidget";
import { useState, useEffect, useRef } from "react";
import logo from '../../images/cqp-logo.png';
import './Header.css';
import { Link } from "react-router-dom";
import SearchBar from "./navBar/searchBar/SearchBar";
import getNavOptions from "../../firebase/getNavOptions";

const {initialNavOptions} = require('../../helpers/configuration');

const Header = () => {
    const [navOptions, setNavOptions] = useState(initialNavOptions);
    const [className, setClassName] = useState("header");
    const headerRef = useRef();
    const onScrollDown = () => {
        const navOffset = headerRef.current.offsetTop;
        return window.pageYOffset > navOffset ? setClassName("header scroll") : setClassName("header");
    };
    const updateNavOptions = () =>{
        getNavOptions()
            .then((result) => {
                const navOptionsList = result.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                });
                console.log(navOptionsList);
                setNavOptions(navOptionsList);
            });
    }

    useEffect(() => {
        updateNavOptions();

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