/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */

import store from "./store";
import WebFont from "webfontloader";
import { RootStateOrAny, useSelector } from "react-redux";
import { loadUser } from "./actions/userActions";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/header";

import LandingPage from "./components/Landing Page/LandingPage";

import ProductsAll from "./components/Profile/Business/Store/Products/Main/All.jsx";
import ProductsNew from "./components/Profile/Business/Store/Products/Main/New.jsx";
import ProductsOrders from "./components/Profile/Business/Store/Products/Main/Orders.jsx";
import UpdateProduct from "./components/Profile/Business/Store/Products/Main/Update";
import ProductsCustomers from "./components/Profile/Business/Store/Products/Main/Customers";
import ProductsReviews from "./components/Profile/Business/Store/Products/Main/Reviews";
import Overview from "./components/Profile/Business/Store/Products/Main/Overview";
import ProductDetails from "./components/Profile/Business/Store/Products/Main/ProductDetails";

import SignUpGeneral from "./components/Profile/SignUpGeneral";
import SetUpProfile1individual from "./components/Profile/SignUp/SetUpProfile-1-individual";
import SetUpProfile1Business from "./components/Profile/SignUp/SetUpProfile-1-business";
import SetUpProfile2Individual from "./components/Profile/SignUp/SetUpProfile-2-individual";
import SetUpProfile2Business from "./components/Profile/SignUp/SetUpProfile-2-business";
import LoginGeneral from "./components/Profile/LoginGeneral";
import LoginUser from "./components/Profile/Individual/Login/LoginUser";
import LoginBusiness from "./components/Profile/Business/Login/LoginBusiness";

// import Campaigns from "./components/Explore/Businesses/ExploreStores.jsx";
import ExploreStores from "./components/Explore/Businesses/ExploreStores.jsx";

import CampaignDetails from "./components/Campaigns/Overview/CampaignDetails";
// import CampaignsFirst from "./components/individual-component/CampaignsFirst";
// import CampaignsSecond from "./components/individual-component/CampaignsSecond";
// import CampaignsThird from "./components/individual-component/Campaigns";
// import LoanThirdBusiness from "./components/Campaigns/Overview/loanBusiness.js";
// import loanThirdIndividual from "./components/Campaigns/Overview/loanIndividual.js";

import ExploreCampaigns from "./components/Explore/Campaigns/ExploreCampaigns.jsx";

// import Campaign1 from "./components/Profile/Business/Campaigns/Overview/myCampaigns.js";
// import Campaign2 from "./components/campaign-components/Campaign2";
// import Campaign3 from "./components/campaign-components/Campaign3";
//
import SettingsBank from "./components/Profile/Business/Settings/SettingsBank.jsx";
import SettingsGeneral from "./components/Profile/Business/Settings/SettingsGeneral.jsx";
import SettingsStore from "./components/Profile/Business/Settings/SettingsStore.jsx";

import SettingsBankIndividual from "./components/Profile/Individual/Settings/SettingsGeneral.js";
import SettingsGeneralIndividual from "./components/Profile/Individual/Settings/SettingsGeneral.js";

// import Comments from "./components/managecampaign-component/Comments";
// import Lenders from "./components/managecampaign-component/Lenders";
import OverviewDonation from "./components/Profile/Business/Campaigns/Manage/Donation";
import OverviewEquity from "./components/Profile/Business/Campaigns/Manage/Equity.jsx";
import OverviewLoan from "./components/Profile/Business/Campaigns/Manage/Loan.jsx";

// import Demographics from "./components/Profile/Business/Campaigns/New/Demographics.jsx";
// import Finance from "./components/Profile/Business/Campaigns/New/Finance.jsx";
// import Organisation from "./components/Profile/Business/Campaigns/New/Organisation";
// import Review from "./components/Profile/Business/Campaigns/New/Review.jsx";
// import SetSchedule from "./components/Profile/Business/Campaigns/New/SetSchedule";
// import Target from "./components/Profile/Business/Campaigns/New/Target";
// import TargetII from "./components/Profile/Business/Campaigns/New/TargetII";
//
import Cart from "./components/Cart/Cart.jsx";
import Shipping from "./components/Cart/shipping";
import ConfirmOrder from "./components/Cart/confirmOrder";
import Payment from "./components/Cart/payment";
import OrderSuccess from "./components/Cart/orderSuccess";
import Analytics from "./components/Profile/Business/Analytics/Analytics";
import MyCampaignDetails from "./components/Profile/Business/Campaigns/Manage/myCampaignDetails";
import CampaignForm from "./components/Profile/Business/Campaigns/New/campaignForm";
import MyCampaigns from "./components/Profile/Business/Campaigns/Overview/myCampaigns";
import UpdateCampaignForm from "./components/Profile/Business/Campaigns/Update/updateCampaignForm";

import BusinessDashboard from "./components/Profile/Business/Dashboard/DashBoardMain";
import BusinessExplore from "./components/Profile/Business/Dashboard/businessExplore";
import BusinessSettingsForm from "./components/Profile/Business/Settings/businessSettingsForm";
import PublishedStore from "./components/Profile/Business/Store/PublishedStore";
import MyPublishedStore from "./components/Profile/Business/Store/myPublishedStore";
import MyCampaignsIndividual from "./components/Profile/Individual/Campaigns/myCampaigns";

import BusinessWallet from "./components/Profile/Business/Wallet/Wallet";
import IndividualWallet from "./components/Profile/Individual/Wallet/Wallet";

import ErrorPage from "./components/Layout/Not Found/ErroPage.js";
import UserExplore from "./components/Profile/Individual/Dashboard/userExplore";

import ProtectedRoute from "./components/Routes/protectedRoute";

function App() {
  const [search, setSearch] = useState("");

  // const { isAuthenticated, user } = useSelector(
  // (state: RootStateOrAny) => state.user
  // );

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  // const { data } = await axios.get("/api/v1/stripeapikey");

  // setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  // WebFont.load({
  // google: {
  // families: ["Poppins", "Droid Sans", "Chilanka"],
  // },
  // });

  // store.dispatch(loadUser());
  // }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {" "}
        <Route path="/gaged" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/business/dashboard" element={<BusinessDashboard />} />
        <Route path="/individual/explore" element={<UserExplore />} />
        <Route path="/business/explore" element={<BusinessExplore />} />
        <Route path="/business/settings" element={<BusinessSettingsForm />} />
        <Route path="/business/store/me" element={<MyPublishedStore />} />
        <Route
          path="/business/campaign/overviewDonation"
          element={<OverviewDonation />}
        />
        <Route
          path="/business/campaign/overviewEquity"
          element={<OverviewEquity />}
        />
        <Route path="/business/campaign/new" element={<CampaignForm />} />
        <Route path="/business/customers" element={<ProductsCustomers />} />
        <Route path="/business/reviews" element={<ProductsReviews />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/campaign/:id" element={<UpdateCampaignForm />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/campaign/:id" element={<MyCampaignDetails />} />
        <Route path="/business/campaigns/me" element={<MyCampaigns />} />
        <Route path="/business/analytics" element={<Analytics />} />
        <Route path="/business/wallet" element={<BusinessWallet />} />
        <Route path="/individual/wallet" element={<IndividualWallet />} />
        <Route
          path="/individual/settings/bank"
          element={<SettingsBankIndividual />}
        />
        <Route
          path="/individual/campaigns"
          element={<MyCampaignsIndividual />}
        />
        <Route
          path="/individual/settings/general"
          element={<SettingsGeneralIndividual />}
        />
        <Route
          path="/business/campaign/overviewLoan"
          element={<OverviewLoan />}
        />
        {/* <Route path="/campaign/:id" element={<LoanThirdBusiness />} /> */}
        {/* <Route path="/business/campaign/lenders" element={<Lenders />} /> */}
        {/* <Route path="/business/campaign/comments" element={<Comments />} /> */}
        <Route path="/signup" element={<SignUpGeneral />} />{" "}
        <Route path="/signup/1/business" element={<SetUpProfile1Business />} />{" "}
        <Route
          path="/signup/1/individual"
          element={<SetUpProfile1individual />}
        />{" "}
        <Route path="/login" element={<LoginGeneral />} />{" "}
        <Route
          path="/signup/2/individual"
          element={<SetUpProfile2Individual />}
        />{" "}
        <Route path="/signup/2/business" element={<SetUpProfile2Business />} />{" "}
        <Route path="/individualLogin" element={<LoginUser />} />{" "}
        <Route path="/businessLogin" element={<LoginBusiness />} />{" "}
        <Route path="/store/products/:id" element={<UpdateProduct />} />{" "}
        <Route path="/store/products/overview" element={<Overview />} />
        <Route path="/store/products/all" element={<ProductsAll />} />{" "}
        <Route path="/store/products/new" element={<ProductsNew />} />{" "}
        <Route path="/store/products/orders" element={<ProductsOrders />} />{" "}
        <Route path="/explore/stores" element={<ExploreStores />} />{" "}
        {/* <Route path="/campaigns" element={<Campaigns />} />{" "} */}
        <Route path="/settings/general" element={<SettingsGeneral />} />{" "}
        <Route path="/settings/bankCode" element={<SettingsBank />} />{" "}
        <Route path="/settings/store" element={<SettingsStore />} />{" "}
        <Route path="/business/:id" element={<PublishedStore />} />
        {/* <Route path="/campaigns/first" element={<CampaignsFirst />} /> */}
        {/* <Route path="/campaigns/second" element={<CampaignsSecond />} /> */}
        {/* <Route path="/campaigns/third" element={<CampaignsThird />} /> */}
        <Route path="/explore/campaigns" element={<ExploreCampaigns />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/campaigns/all" element={<Campaign1 />} />{" "} */}
        {/* <Route path="/campaigns/live" element={<Campaign2 />} />{" "} */}
        {/* <Route path="/campaigns/completed" element={<Campaign3 />} />{" "} */}
        {/* <Route path="/new-campaign/demographics" element={<Demographics />} />{" "} */}
        {/* <Route path="/new-campaign/finance" element={<Finance />} />{" "} */}
        {/* <Route path="/new-campaign/organisation" element={<Organisation />} />{" "} */}
        {/* <Route path="/new-campaign/review" element={<Review />} />{" "} */}
        {/* <Route path="/new-campaign/set-schedule" element={<SetSchedule />} />{" "} */}
        {/* <Route path="/new-campaign/target" element={<Target />} />{" "} */}
        {/* <Route path="/new-campaign/target-II" element={<TargetII />} />{" "} */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>{" "}
    </Router>
  );
}

export default App;
