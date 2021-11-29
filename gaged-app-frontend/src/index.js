import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
// import Cart from './componenets/cart-component/Cart';
// import { BrowserRouter } from 'react-router-dom';
// import SettingsBank from './componenets/setting-components/SettingsBank';
// import LoginBusiness from './sections/LoginBusiness';

ReactDOM.render(
  <Provider store={store}>
     <App />
     {/* <Cart /> */}
     
    </Provider>






    
     
     
     

    
  ,
  document.getElementById('root')
);