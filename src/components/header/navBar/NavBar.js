import React from "react";
import '../../../stylesheets/NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = ({navOptions, children}) => {
    let optionList = navOptions.map(({id, title, route}) =>
    <NavLink to={route} key={id} end={route === "/" ? "end" : undefined}>{title}</NavLink>);

    return(
        <nav className="nav-bar">
            <ul>
                {optionList}
            </ul>
            {children}
        </nav>
    );
};

export default NavBar;