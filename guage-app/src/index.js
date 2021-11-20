import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cart from './componenets/cart-component/Cart';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
     {/* <App /> */}
      <Cart />

    </React.StrictMode>
  ,
  document.getElementById('root')
);


