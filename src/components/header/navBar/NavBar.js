import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { MobileContext } from "../../../context/MobileContext";
import './NavBar.css';

const NavBar = ({navOptions, children}) => {
    const {navMobileToggleHandler, mobileHeader} = useContext(MobileContext);

    return(
        <nav className="nav-bar">
            <ul className={mobileHeader ? "nav-bar-list mobile" : "nav-bar-list"}>
                {navOptions.map(({id, title, route}) =>
                    <NavLink 
                        className="nav-bar-link"
                        onClick={() => {navMobileToggleHandler(false)}}
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