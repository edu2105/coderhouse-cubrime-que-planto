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
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CodeIcon from '@mui/icons-material/Code';
import AttributionIcon from '@mui/icons-material/Attribution';

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
                <a href="https://www.instagram.com/cssdevarmy/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{fontSize: "1.8rem"}} /></a>
                <a href="https://www.facebook.com/groups/1000488043331424/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{fontSize: "1.8rem"}} /></a>
                <a href="https://ar.pinterest.com/search/pins/?q=planta&rs=typed" target="_blank" rel="noopener noreferrer"><PinterestIcon style={{fontSize: "1.8rem"}} /></a>
            </section>
            <section className="nav-options">
                {navOptions.map(({id, title, route}) =>
                    <NavLink className="nav-bar-link" to={route} key={id} end={route === "/" ? "end" : undefined}>{title}</NavLink>)}
            </section>
            <section className="contact-info">
                <div className="info-item">
                    <WhatsAppIcon /> 
                    <span>+541166666666</span>
                </div>
                <div className="info-item">
                    <CallIcon /> 
                    <span>+54 9 45454545</span>
                </div>
                <div className="info-item">
                    <MailOutlineIcon /> 
                    <span>info@cubrimequeplanto.com</span>
                </div>
                <div className="info-item">
                    <PlaceIcon /> 
                    <a href="https://www.google.com/maps/place/Habana+y+Segurola/@-34.6007808,-58.520578,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb77a562dcd87:0x7882eb67703b848!8m2!3d-34.6007885!4d-58.5183861" target="_blank" rel="noopener noreferrer"><span>Habana 4401, CABA, Buenos Aires, Argentina</span></a>
                </div>
            </section>
            <section className="copyright-info">
                <div className="info-item">
                    <CopyrightIcon />
                    <span>Copyright Cubrime Que Planto 2022</span>
                </div>
                <div className="info-item">
                    <CodeIcon />
                    <span>Hecho por Ganimeing</span>
                </div>
                <div className="info-item">
                    <AttributionIcon />
                    <span>Todos los derechos reservados</span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;