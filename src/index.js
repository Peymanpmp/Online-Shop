import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
//import ProductsContextProvider from './GLobal/ProductContext';
import ProductsContextProvider from './GLobal/ProductContext';
import CartContextProvider from './GLobal/CartContetxt'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductsContextProvider>
      <CartContextProvider>
        <Router> 
          <App />
        </Router>
      </CartContextProvider>
    </ProductsContextProvider>
);


