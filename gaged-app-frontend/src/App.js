/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import "./App.css";
import store from "./store";
import WebFont from "webfontloader";

import { useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./componenets/landing-pages-components/LandingPage";

import ProductsAll from "./componenets/store-components/ProductsAll";
import ProductsNew from "./componenets/store-components/ProductsNew";
import ProductsOrders from "./componenets/store-components/ProductsOrders";
import SingleStoreProduct from "./componenets/store-components/SingleStoreProduct";

import SignUpGeneral from "./sections/SignUp/SignUpGeneral";
import SetUpProfile1individual from "./sections/SignUp/SetUpProfile-1-individual";
import SetUpProfile1Business from "./sections/SignUp/SetUpProfile-1-business";
import SetUpProfile2Individual from "./sections/SignUp/SetUpProfile-2-individual";
import SetUpProfile2Business from "./sections/SignUp/SetUpProfile-2-business";
import LoginGeneral from "./sections/LoginGeneral";
import LoginUser from "./sections/LoginUser";
import LoginBusiness from "./sections/LoginBusiness";

import Campaigns from "./componenets/individual-component/Campaigns";
import ExploreStores from "./componenets/individual-component/ExploreStores";
import CampaignsFirst from "./componenets/individual-component/CampaignsFirst";
import CampaignsSecond from "./componenets/individual-component/CampaignsSecond";
import CampaignsThird from "./componenets/individual-component/Campaigns";
import ExploreCampaigns from "./componenets/individual-component/ExploreCampaigns";

import Campaign1 from "./componenets/campaign-components/Campaign1";
import Campaign2 from "./componenets/campaign-components/Campaign2";
import Campaign3 from "./componenets/campaign-components/Campaign3";

import SettingsBank from "./componenets/setting-components/SettingsBank";
import SettingsGeneral from "./componenets/setting-components/SettingsGeneral";
import SettingsStore from "./componenets/setting-components/SettingsStore";

import PublishedStore from "./componenets/published-component/PublishedStore";

import Comments from "./componenets/managecampaign-component/Comments";
import Lenders from "./componenets/managecampaign-component/Lenders";
import OverviewDonation from "./componenets/managecampaign-component/OverviewDonation";
import OverviewEquity from "./componenets/managecampaign-component/OverviewEquity";
import OverviewLoan from "./componenets/managecampaign-component/OverviewLoan";

import Demographics from "./componenets/addnew-campaign-component/Demographics";
import Finance from "./componenets/addnew-campaign-component/Finance";
import Organisation from "./componenets/addnew-campaign-component/Organisation";
import Review from "./componenets/addnew-campaign-component/Review";
import SetSchedule from "./componenets/addnew-campaign-component/SetSchedule";
import Target from "./componenets/addnew-campaign-component/Target";
import TargetII from "./componenets/addnew-campaign-component/TargetII";

import Cart from "./componenets/cart-component/Cart";
import BusinessDashboard from "./componenets/dashboard-component/Business-dashboard";

import ErrorPage from "./componenets/ErroPage";
import UserDashboard from "./componenets/dashboard-component/User-dashboard";

function App() {
  const [search, setSearch] = useState("");

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {" "}
      <div className="App">
        {" "}
        {/* <LandingPage /> */}
        {/* <ProductsNew /> */}
        <Routes>
          {" "}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/business/dashboard"
            element={<BusinessDashboard navigate={undefined} />}
          />
          <Route
            path="/individual/dashboard"
            element={<UserDashboard navigate={undefined} />}
          />
          <Route
            path="/business/campaign/overviewDonation"
            element={<OverviewDonation />}
          />
          <Route
            path="/business/campaign/overviewEquity"
            element={<OverviewEquity />}
          />
          <Route
            path="/business/campaign/overviewLoan"
            element={<OverviewLoan />}
          />
          <Route path="/business/campaign/lenders" element={<Lenders />} />
          <Route path="/business/campaign/comments" element={<Comments />} />
          <Route path="/gaged" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpGeneral />} />{" "}
          <Route
            path="/signup/1/business"
            element={<SetUpProfile1Business />}
          />{" "}
          <Route
            path="/signup/1/individual"
            element={<SetUpProfile1individual />}
          />{" "}
          <Route path="/login" element={<LoginGeneral />} />{" "}
          <Route
            path="/signup/2/individual"
            element={<SetUpProfile2Individual />}
          />{" "}
          <Route
            path="/signup/2/business"
            element={<SetUpProfile2Business />}
          />{" "}
          <Route path="/individualLogin" element={<LoginUser />} />{" "}
          <Route path="/businessLogin" element={<LoginBusiness />} />{" "}
          <Route path="/store/products/:id" element={<SingleStoreProduct />} />{" "}
          <Route path="/store/products/all" element={<ProductsAll />} />{" "}
          <Route path="/store/products/new" element={<ProductsNew />} />{" "}
          <Route path="/store/products/orders" element={<ProductsOrders />} />{" "}
          <Route path="/explore/stores" element={<ExploreStores />} />{" "}
          <Route path="/campaigns" element={<Campaigns />} />{" "}
          <Route path="/settings/general" element={<SettingsGeneral />} />{" "}
          <Route path="/settings/bank" element={<SettingsBank />} />{" "}
          <Route path="/settings/store" element={<SettingsStore />} />{" "}
          <Route path="/published" element={<PublishedStore />} />
          <Route path="/campaigns/first" element={<CampaignsFirst />} />
          <Route path="/campaigns/second" element={<CampaignsSecond />} />
          <Route path="/campaigns/third" element={<CampaignsThird />} />
          <Route path="/explore/campaigns" element={<ExploreCampaigns />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/campaigns/all" element={<Campaign1 />} />{" "}
          <Route path="/campaigns/live" element={<Campaign2 />} />{" "}
          <Route path="/campaigns/completed" element={<Campaign3 />} />{" "}
          <Route path="/new-campaign/demographics" element={<Demographics />} />{" "}
          <Route path="/new-campaign/finance" element={<Finance />} />{" "}
          <Route path="/new-campaign/organisation" element={<Organisation />} />{" "}
          <Route path="/new-campaign/review" element={<Review />} />{" "}
          <Route path="/new-campaign/set-schedule" element={<SetSchedule />} />{" "}
          <Route path="/new-campaign/target" element={<Target />} />{" "}
          <Route path="/new-campaign/target-II" element={<TargetII />} />{" "}
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
