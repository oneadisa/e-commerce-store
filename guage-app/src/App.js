import React from 'react';
import LandingPage from './componenets/landing-pages-components/LandingPage';
import ProductsAll from './componenets/store-components/ProductsAll';
import ProductsNew from './componenets/store-components/ProductsNew';
import ProductsOrders from './componenets/store-components/ProductsOrders';


function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <ProductsNew />
    </div>
  );
}

export default App;
