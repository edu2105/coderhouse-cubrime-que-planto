import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import './CreditCardForm.css';
 
const CreditCardForm = ({onSubmitHandler}) => {
    const [cardData, setCardData] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: ''
      });
    
    const handleInputFocus = (e) => {
        setCardData({
            ...cardData, 
            focus: e.target.name
        });
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData({
            ...cardData,
            [name] : value
        });
    };
  
    return (
        <div id="PaymentForm" className='credit-card-form-container'>
            <Cards
                cvc={cardData.cvc}
                expiry={cardData.expiry}
                name={cardData.name}
                focused={cardData.focus}
                number={cardData.number} />
            <form 
                className='credit-card-form'
                onSubmit={(e) => onSubmitHandler(e, cardData)}>
                <input
                    className='form-card-input'
                    type="number"
                    name="number"
                    placeholder="Número de tarjeta"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardData.number}
                    required />
                <input
                    className='form-card-input'
                    type="text"
                    name="name"
                    placeholder="Nombre del titular"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardData.name}
                    required />
                <input
                    className='form-card-input'
                    type="date"
                    name="expiry"
                    placeholder="Válido hasta"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardData.expiry}
                    required />
                <input
                    className='form-card-input'
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardData.cvc}
                    required />
                <input  
                    className='form-submit'
                    type="submit" 
                    value="GUARDAR" />
            </form>
        </div>
    );
}

export default CreditCardForm;