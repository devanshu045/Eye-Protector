import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cartstate from './context/cart/Cartstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   < Cartstate>
   <App />
   </Cartstate>
    
  </React.StrictMode>
);