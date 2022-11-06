import React, { useState, useEffect, useRef, useContext }  from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/cartWidget/CartWidget";
import logo from '../../images/cqp-logo.png';
import { Link } from "react-router-dom";
import { MobileContext } from "../../context/MobileContext";
import SearchBar from "./navBar/searchBar/SearchBar";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import getNavOptions from "../../firebase/getNavOptions";
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import OrderSearch from "./navBar/orderSearch/OrderSearch";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Hamburger from 'hamburger-react'
import './Header.css';

const {initialNavOptions} = require('../../helpers/configuration');

const Header = () => {
    const [navOptions, setNavOptions] = useState(initialNavOptions);
    const [isLoading, setIsLoading] = useState(true);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const headerRef = useRef();
    const {navMobileToggled, navMobileToggleHandler, mobileHeader} = useContext(MobileContext);
    const cartButtonStyle = {
        fontFamily: 'Courgette', 
        fontSize: "1.1rem", 
        backgroundColor: "#0092a5" };
    const cartIconStyle = {
        fontFamily: 'Courgette', 
        fontSize: "2.2rem", 
        color: "#0092a5",
        marginTop: ".7rem",
        marginRight: "1rem" };

    const onScrollDown = () => {
        const navOffset = headerRef.current.offsetTop;
        return window.pageYOffset > navOffset ? setIsScrollDown(true) : setIsScrollDown(false);
    };
    const updateNavOptions = () =>{
        getNavOptions()
            .then((result) => {
                const navOptionsList = result.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                });
                setNavOptions(navOptionsList);
                setIsLoading(false);
            });
    }
    const onToggleHandler = (toggled) => {
       toggled ? navMobileToggleHandler(true) : navMobileToggleHandler(false);
    };

    useEffect(() => {
        updateNavOptions();

        window.addEventListener('scroll', onScrollDown);

        return () => {
            window.removeEventListener('scroll', onScrollDown);
        }
    },[]);

    return(
        <>
            {!mobileHeader ? (
                <header className={isScrollDown ? "header scroll" : "header"} ref={headerRef}>
                    {isLoading ? (
                        <CircularProgress style={{marginTop: "1rem"}}/>
                    ) : (
                        <>
                            <Link to="/">
                                <img className="logo" src={logo} alt="Logo" />
                            </Link>
                            <NavBar navOptions={navOptions}>                        
                                <CartWidget>
                                    <Button 
                                        variant="contained" 
                                        startIcon={<ShoppingCartRounded />}
                                        style={cartButtonStyle}>
                                        Canasta
                                    </Button>
                                </CartWidget>
                                <OrderSearch />
                            </NavBar>
                            <SearchBar />
                        </>
                    ) }
                </header>
                ) : (<header className="header-mobile scroll" ref={headerRef}>
                {isLoading ? (
                    <CircularProgress style={{marginTop: "1rem"}}/>
                ) : (
                    <>
                        <Hamburger 
                            size={25}
                            direction="left"
                            toggled={navMobileToggled}
                            onToggle={toggled => {onToggleHandler(toggled)}} />
                        <Link to="/">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                        <CartWidget>
                            <AddShoppingCartIcon 
                                style={cartIconStyle} />
                        </CartWidget>
                        {navMobileToggled && <div className="nav-bar-mobile-container">
                            <section className="searchers">
                                <SearchBar />
                                <OrderSearch />
                            </section>
                            <NavBar navOptions={navOptions} />
                        </div>}
                    </>
                ) }
            </header>)}   
        </>
    );
}

export default Header;