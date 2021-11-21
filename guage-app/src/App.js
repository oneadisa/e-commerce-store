/* eslint-disable no-unused-vars */
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
}

from 'react-router-dom';

import LandingPage from './componenets/landing-pages-components/LandingPage';


import ProductsAll from './componenets/store-components/ProductsAll';
import ProductsNew from './componenets/store-components/ProductsNew';
import ProductsOrders from './componenets/store-components/ProductsOrders';


import SignUpGeneral from './sections/SignUp/SignUpGeneral';
import SetUpProfile1 from './sections/SignUp/SetUpProfile-1';
import SetUpProfile2Individual from './sections/SignUp/SetUpProfile-2-individual';
import SetUpProfile2Business from './sections/SignUp/SetUpProfile-2-business';
import LoginUser from './sections/LoginUser';
import LoginBusiness from './sections/LoginBusiness';

import Campaigns from './componenets/individual-component/Campaigns';
import ExploreStores from './componenets/individual-component/ExploreStores';
import CampaignsFirst from './componenets/individual-component/CampaignsFirst';
import CampaignsSecond from './componenets/individual-component/CampaignsSecond';
import CampaignsThird from './componenets/individual-component/Campaigns';
import ExploreCampaigns from './componenets/individual-component/ExploreCampaigns';

import SettingsBank from './componenets/setting-components/SettingsBank';
import SettingsGeneral from './componenets/setting-components/SettingsGeneral';
import SettingsStore from './componenets/setting-components/SettingsStore';

import PublishedStore from './componenets/published-component/PublishedStore';

import Cart from './componenets/cart-component/Cart';



function App() {
  return (<Router> <div className="App"> {
      /* <LandingPage /> */
    }

      {
      /* <ProductsNew /> */
    }

    <Routes> <Route path='/'element= {
      <LandingPage/>
    }

    /> 
    <Route path='/gaged'element= {
      <LandingPage/>
    }

    /> 
    <Route path='/signup'element= {
      <SignUpGeneral/>
    }

    /> <Route path='/signup/1'element= {
      <SetUpProfile1/>
    }

    /> <Route path='/signup/2/individual'element= {
      <SetUpProfile2Individual/>
    }

    /> <Route path='/signup/2/business'element= {
      <SetUpProfile2Business/>
    }

    /> <Route path='/userLogin'element= {
      <LoginUser history= {
        undefined
      }

      />
    }

    /> <Route path='/businessLogin'element= {
      <LoginBusiness/>
    }

    /> <Route path='/store/products/all'element= {
      <ProductsAll/>
    }

    /> <Route path='/store/products/new'element= {
      <ProductsNew/>
    }

    /> <Route path='/store/products/orders'element= {
      <ProductsOrders/>
    }

    /> <Route path='/explore'element= {
      <ExploreStores/>
    }

    /> <Route path='/campaigns'element= {
      <Campaigns/>
    }

    /> <Route path='/settings/general'element= {
      <SettingsGeneral/>
    }

    /> <Route path='/settings/bank'element= {
      <SettingsBank/>
    }

    /> <Route path='/settings/store'element= {
      <SettingsStore/>
    }

    /> <Route path='/published'element= {
      <PublishedStore/>
    }
    />
    <Route path='/campaigns/first'element= {
  <CampaignsFirst/>
      }
    /> 

    <Route path='/campaigns/second'element= {
      <CampaignsSecond/>
      }
      /> 

      <Route path='/campaigns/third'element= {
        <CampaignsThird/>
      }
      /> 

      <Route path='/campaigns/explore'element= {
        <ExploreCampaigns/>
      }
      /> 

      <Route path='/cart'element= {
        <Cart/>
      }
      /> 
    
     </Routes> </div> </Router>);
}

export default App;