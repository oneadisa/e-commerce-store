import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campaigns from './componenets/individual-component/Campaigns';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    
     {/* <App /> */}
     <Campaigns />
  
    </React.StrictMode>
  ,
  document.getElementById('root')
);


