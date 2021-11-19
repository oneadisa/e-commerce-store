import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campaigns from './componenets/individual-component/Campaigns';
import ExploreStores from './componenets/individual-component/ExploreStores';
import ProductsOrders from './componenets/store-components/ProductsOrders';
import ProductsNew from './componenets/store-components/ProductsNew';
import PublishedStore from './componenets/published-component/PublishedStore';
import SettingsGeneral from './componenets/setting-components/SettingsGeneral';
import SettingsBank from './componenets/setting-components/SettingsBank';
import SettingsStore from './componenets/setting-components/SettingsStore';
import ExploreCampaigns from './componenets/individual-component/ExploreCampaigns';
import CampaignsFirst from './componenets/individual-component/CampaignsFirst';
import CampaignsSecond from './componenets/individual-component/CampaignsSecond';
import CampaignsThird from './componenets/individual-component/CampaignsThird';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    
     {/* <App /> */}
     {/* <Campaigns /> */}
     {/* <ExploreStores /> */}
     {/* <ProductsOrders /> */}
     {/* <ProductsNew /> */}
     {/* <PublishedStore /> */}
     {/* <SettingsGeneral /> */}
     {/* <SettingsBank /> */}
     {/* <SettingsStore /> */}
     {/* <ExploreCampaigns /> */}
     {/* <CampaignsFirst /> */}
     {/* <CampaignsSecond /> */}
     <CampaignsThird />
  
    </React.StrictMode>
  ,
  document.getElementById('root')
);


