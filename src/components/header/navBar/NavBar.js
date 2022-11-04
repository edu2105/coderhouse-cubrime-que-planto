import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = ({navOptions, children}) => {
    return(
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                {navOptions.map(({id, title, route}) =>
                    <NavLink 
                        className="nav-bar-link" 
                        to={route} 
                        key={id} 
                        end={route === "/" && "end"}>
                        {title}
                    </NavLink>)}
            </ul>
            {children}
        </nav>
    );
};

export default NavBar;