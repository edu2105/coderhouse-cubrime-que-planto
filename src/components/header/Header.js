import React, { useState, useEffect, useRef }  from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/cartWidget/CartWidget";
import logo from '../../images/cqp-logo.png';
import { Link } from "react-router-dom";
import SearchBar from "./navBar/searchBar/SearchBar";
import CircularProgress from '@mui/material/CircularProgress';
import getNavOptions from "../../firebase/getNavOptions";
import OrderSearch from "./navBar/orderSearch/OrderSearch";
import './Header.css';

const {initialNavOptions} = require('../../helpers/configuration');

const Header = () => {
    const [navOptions, setNavOptions] = useState(initialNavOptions);
    const [isLoading, setIsLoading] = useState(true);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const headerRef = useRef();
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

    useEffect(() => {
        updateNavOptions();

        window.addEventListener('scroll', onScrollDown);

        return () => {
            window.removeEventListener('scroll', onScrollDown);
        }
    },[]);

    return(
        <header className={isScrollDown ? "header scroll" : "header"} ref={headerRef}>
            {isLoading ? (
                <CircularProgress style={{marginTop: "1rem"}}/>
            ) : (
                <>
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <NavBar navOptions={navOptions}>                        
                        <CartWidget />
                        <OrderSearch />
                    </NavBar>
                    <SearchBar />
                </>
            ) }
        </header>
    );
}

export default Header;