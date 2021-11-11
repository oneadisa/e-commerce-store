/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './componenets/landing-pages-components/LandingPage';

import ProductsAll from './componenets/store-components/ProductsAll';
import ProductsNew from './componenets/store-components/ProductsNew';
import ProductsOrders from './componenets/store-components/ProductsOrders';


import SignUpGeneral from './sections/SignUp/SignUpGeneral';
import SetUpProfile1 from './sections/SignUp/SetUpProfile-1';
import SetUpProfile2Individual from './sections/SignUp/SetUpProfile-2-individual';
import SetUpProfile2Business from './sections/SignUp/SetUpProfile-2-business';
import Login from './sections/Login';


function App() {
  return (
    <Router>
    <div className="App">

      {/* <LandingPage /> */}
      {/* <ProductsNew /> */}

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<SignUpGeneral/>} />
        <Route path='/signup/1' element={<SetUpProfile1/>} />
        <Route path='/signup/2/individual' element={<SetUpProfile2Individual/>} />
        <Route path='/signup/2/business' element={<SetUpProfile2Business/>} />
        <Route path='guage/login' element={<Login/>} />
        <Route path='/store/products/all' element={<ProductsAll/>} />
        <Route path='/store/products/new' element={<ProductsNew/>} />
        <Route path='/store/products/orders' element={<ProductsOrders/>} />

      </Routes>
      

    </div>
    </Router>
  );
}

export default App;
