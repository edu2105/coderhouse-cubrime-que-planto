import React, { useContext } from "react";
import './CartWidget.css';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { Context } from '../../../../context/CartContext';

const CartWidget = ({children}) => {
    const badgeColors = {
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: "#d204f5" } };
    const { totalQty } = useContext(Context);

    return(
        <div className="cart-widget">
            <Badge 
                sx={badgeColors}
                badgeContent={totalQty}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                <Link 
                    to="/canasta"
                    style={{textDecoration: "none"}}>
                    {children}
                </Link>
            </Badge>
        </div>
    );
};

export default CartWidget;