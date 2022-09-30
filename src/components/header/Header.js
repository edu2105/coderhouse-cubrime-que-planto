import React from "react";
import NavBar from "./navBar/NavBar";
import CartWidget from "./navBar/CartWidget";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import '../../stylesheets/Header.css';

function Header(){
    const {navOptions, headerImg} = require('../../configuration');
    const iconStyle = {
        fontSize: '2.3rem', 
        color:"#00BCD4" };

    return(
        <header className="header" id="header">
            <img src={require(`../../images/${headerImg}`)} alt="Company Logo" />
            <NavBar navOptions={navOptions}>
                <IconButton 
                    color="primary" 
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