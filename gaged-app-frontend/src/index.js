import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Wallet from "./componenets/wallet-component/Wallet";
// import "semantic-ui-css/semantic.min.css";
// import Organisaction from "./componenets/addnew-campaign-component/Organisation";
// import Demographics from "./componenets/addnew-campaign-component/Demographics";
// import Target from "./componenets/addnew-campaign-component/Target";
// import TargetII from "./componenets/addnew-campaign-component/TargetII";
// import Finance from "./componenets/addnew-campaign-component/Finance";
// import SetSchedule from "./componenets/addnew-campaign-component/SetSchedule";
// import Review from "./componenets/addnew-campaign-component/Review";
// import Cart from './componenets/cart-component/Cart';
// import { BrowserRouter } from 'react-router-dom';
// import SettingsBank from './componenets/setting-components/SettingsBank';
// import LoginBusiness from './sections/LoginBusiness';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <BrowserRouter>
    <Wallet />
  </BrowserRouter>,

  document.getElementById("root")
);
