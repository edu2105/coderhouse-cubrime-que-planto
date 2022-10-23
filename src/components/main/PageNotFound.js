import React, { useEffect, useRef, useState } from "react";
import '../../stylesheets/PageNotFound.css'
import plant from '../../images/plant404.png';

const PageNotFound = () => {
    const [enableOnMouseMove, setEnableOnMouseMove] = useState(true);
    const [imgPosition, setImgPosition] = useState({x: 0, y: 0});
    const [imgRotation, setImgRotation] = useState(0);

    const imgRef = useRef();
    const toggleOnMouseMove = () => {
        setEnableOnMouseMove(!enableOnMouseMove); 
    }
    const followPointer = (e) =>{
        setImgPosition({
            x: e.clientX,
            y: e.clientY
        });
    };
    const imgStyle = {
        transform: `rotate(${imgRotation}deg)`
    };

    useEffect( () => {
        let boxBoundingRect = imgRef.current.getBoundingClientRect();
        let boxCenter = {
            x: boxBoundingRect.left + boxBoundingRect.width/2, 
            y: boxBoundingRect.top + boxBoundingRect.height/2
        };
        let angle = Math.atan2(imgPosition.x - boxCenter.x, - (imgPosition.y - boxCenter.y) )*(180 / Math.PI);
        setImgRotation(angle);
    }, [imgPosition])

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
                        Parece que la página o producto que estás buscando no existe
                    </article>
                </div>
                <img src={plant} alt="404 logo" onClick={toggleOnMouseMove} onMouseMove={enableOnMouseMove ? followPointer : undefined} ref={imgRef} style={imgStyle}/>
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