import React from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/CartWidget";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect, useRef } from "react";
import Logo from '../../images/logo2.png';
import '../../stylesheets/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const {navOptions} = require('../../helpers/configuration');
    const iconStyle = {
        fontSize: "2.3rem", 
        color:"#0092a5" };
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
                <img src={Logo} alt="Company Logo" />
            </Link>
            <NavBar navOptions={navOptions}>
                <IconButton 
                    style={iconStyle}
                    aria-label="user login">
                    <PersonIcon 
                        style={iconStyle}/>
                </IconButton>
                <CartWidget />
            </NavBar>
        </header>
    );
}

export default Header;