import React from "react";
import '../../../stylesheets/NavBar.css';

function NavBar({navOptions, children}){
    let optionList = navOptions.map((element) =>
      <li key={element.id}><a href="#0">{element.title}</a></li>);

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