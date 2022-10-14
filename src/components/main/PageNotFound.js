import React from "react";
import '../../stylesheets/PageNotFound.css'
import plant from '../../images/plant404.png';

const PageNotFound = () => {
    return(
        <div className="page-container">
            <div className="page-error">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
            <div className="page-message-container">
                <div className="page-message">
                    <article>
                        Parece que la página que estás buscando no existe
                    </article>
                </div>
                <img src={plant} alt="404 logo" />
                <div className="page-message">
                    <article>
                        Usa la barra de inicio para acceder a nuestro contenido disponible
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;