import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campaigns from './componenets/individual-component/Campaigns';
import ExploreStores from './componenets/individual-component/ExploreStores';
import ProductsOrders from './componenets/store-components/ProductsOrders';
import ProductsNew from './componenets/store-components/ProductsNew';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    
     {/* <App /> */}
     {/* <Campaigns /> */}
     <ExploreStores />
     {/* <ProductsOrders /> */}
     {/* <ProductsNew /> */}
  
    </React.StrictMode>
  ,
  document.getElementById('root')
);


