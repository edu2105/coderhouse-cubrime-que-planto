import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import './CreditCardForm.css';
 
const CreditCardForm = ({onSubmitHandler}) => {
    const [cardData, setCardData] = useState({
        cvc: '',
        month: '',
        year: '',
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
        if((name==="number" || name==="cvc" || name==="month" || name==="year") && !isFinite(value)){
            setCardData({
                ...cardData,
                [name]: ""
            });
            return;
        }

        if(name==="month"){
            setCardData({
                ...cardData,
                [name]: value,
                expiry: value + cardData.year
            });
        }else if(name==="year"){
            setCardData({
                ...cardData,
                [name]: value,
                expiry: cardData.month + value
            });
        }else{
            setCardData({
                ...cardData,
                [name] : value
            });
        }
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
                    type="text"
                    name="number"
                    maxLength="16"
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
                <span>
                    <input
                        className='form-card-input expiry'
                        type="text"
                        maxLength="2"
                        name="month"
                        placeholder="MM"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={cardData.month}
                        required />
                    /
                    <input
                        className='form-card-input expiry'
                        type="text"
                        maxLength="2"
                        name="year"
                        placeholder="YY"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={cardData.year}
                        required />
                </span>
                <input
                    className='form-card-input cvc'
                    type="text"
                    maxLength="3"
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