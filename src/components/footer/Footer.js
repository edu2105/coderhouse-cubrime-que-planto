import React from "react";
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { NavLink } from "react-router-dom";
import getNavOptions from '../../firebase/getNavOptions';
import { useState, useEffect } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const {initialNavOptions} = require('../../helpers/configuration');

const Footer = () => {
    const [navOptions, setNavOptions] = useState(initialNavOptions);
    const updateNavOptions = () =>{
        getNavOptions()
            .then((result) => {
                const navOptionsList = result.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                });
                setNavOptions(navOptionsList);
            });
    }

    useEffect(() => {
        updateNavOptions();
    },[]);

    return(
        <footer className="footer">
            <section className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <PinterestIcon />
            </section>
            <section className="nav-options">
                {navOptions.map(({id, title, route}) =>
                    <NavLink className="nav-bar-link" to={route} key={id} end={route === "/" ? "end" : undefined}>{title}</NavLink>)}
            </section>
            <section className="contact-info">
                <div className="contact-item">
                    <WhatsAppIcon /> 
                    <span>+541166666666</span>
                </div>
                <div className="contact-item">
                    <CallIcon /> 
                    <span>+54 9 45454545</span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;