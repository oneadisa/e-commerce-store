import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

//import { BrowserRouter } from "react-router-dom";
// import Wallet from "./componenets/wallet-component/Wallet";
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
