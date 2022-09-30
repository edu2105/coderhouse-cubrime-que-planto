import React from "react";
import '../../stylesheets/Main.css';
import ItemListContainer from "./ItemListContainer";

function Main(){
    const {greeting} = require('../../configuration');
    
    return(
        <div className="main">
            <ItemListContainer greeting={greeting}/>
        </div>
    );
};

export default Main;