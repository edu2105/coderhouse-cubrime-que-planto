import React from "react";
import '../../../stylesheets/CartWidget.css';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';

function CartWidget({numberOfItems}){
    const buttonStyle = {
        fontFamily: 'Courgette', 
        fontSize: "1.1rem", 
        backgroundColor: "#00BCD4" };

    return(
        <div className="cart-widget">
            <Badge 
                badgeContent={10} 
                color="secondary"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                <Button 
                    variant="contained" 
                    startIcon={<ShoppingCartRounded />}
                    style={buttonStyle}>
                    Canasta
                </Button>
            </Badge>
        </div>
    );
};

export default CartWidget;