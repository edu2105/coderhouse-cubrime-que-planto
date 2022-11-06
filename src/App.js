import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WidthProvider } from './context/MobileContext';

function App() {  
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <WidthProvider>
            <Header/>
          </WidthProvider>
          <Main />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;