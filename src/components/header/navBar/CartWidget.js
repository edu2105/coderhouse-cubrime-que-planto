import React from "react";
import '../../../stylesheets/CartWidget.css';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

const CartWidget = ({numberOfItems}) => {
    const buttonStyle = {
        fontFamily: 'Courgette', 
        fontSize: "1.1rem", 
        backgroundColor: "#0092a5" };
    const badgeColors = {
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: "#d204f5"
        }
      };

    return(
        <div className="cart-widget">
            <Badge 
                sx={badgeColors}
                badgeContent={numberOfItems}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                <Link 
                    to="/canasta"
                    style={{textDecoration: "none"}}>
                    <Button 
                        variant="contained" 
                        startIcon={<ShoppingCartRounded />}
                        style={buttonStyle}>
                        Canasta
                    </Button>
                </Link>
            </Badge>
        </div>
    );
};

export default CartWidget;