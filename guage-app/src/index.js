import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cart from './componenets/cart-component/Cart';
import { BrowserRouter } from 'react-router-dom';
import SettingsBank from './componenets/setting-components/SettingsBank';
import LoginBusiness from './sections/LoginBusiness';

ReactDOM.render(
    <React.StrictMode>
     {/* <App /> */}
      <Cart />
      {/* <SettingsBank /> */}

    </React.StrictMode>
  ,
  document.getElementById('root')
);