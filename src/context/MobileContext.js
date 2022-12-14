import React, { createContext, useEffect, useState } from "react";

export const MobileContext = createContext();
export const MobileProvider = ({children}) => {
    const [windowWidth, setWindowWith] = useState(window.innerWidth);
    const [navMobileToggled, setNavMobileToggled] = useState(false);
    let mobileHeader = windowWidth < 941;

    const handleWindowWidth = () => {
        setWindowWith(window.innerWidth);
    };
    const navMobileToggleHandler = (toggle) => {
        setNavMobileToggled(toggle);
    };

    useEffect(() => {
        mobileHeader = windowWidth < 941;
        window.addEventListener('resize', handleWindowWidth)

        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, [windowWidth]);

    return(
        <MobileContext.Provider value={{navMobileToggled, navMobileToggleHandler, mobileHeader}}>{children}</MobileContext.Provider>
    )
};