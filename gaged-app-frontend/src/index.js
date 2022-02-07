import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import Wallet from "../src/components/Profile/Business/Wallet/Wallet";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductR from "../src/components/Profile/Business/Store/Products/ProductRB";
import LoanThirdBusiness from "./components/Campaigns/Overview/loanBusiness.js";
import CampaignForm from "./components/Profile/Business/Campaigns/New/campaignForm";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <CampaignForm />
      </Router>
    </AlertProvider>
  </Provider>,

  document.getElementById("root")
);

{
  /* <Router> */
}
{
  /* <Wallet /> */
}
{
  /* </Router>, */
}
