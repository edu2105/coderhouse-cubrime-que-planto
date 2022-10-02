import React from "react";
import '../../../stylesheets/NavBar.css';
import { useState } from 'react';

function NavBar({navOptions, children}){
    const [liClicked, setLiClicked] = useState(0);
    const sectionHandler = (e, id) => {
        setLiClicked(id);
    };

    let optionList = navOptions.map(({id, title}) =>
      <li key={id} onClick={(e) => sectionHandler(e, id)} className={id === liClicked ? "active" : undefined}><a href="#0">{title}</a></li>);

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