/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import Mainscreen from "../Mainscreen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Dashboard({ history, search }) {
  const dispatch = useDispatch();

  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;
  useEffect(() => {
    if (!signedUpBusinessInfo) {
      history.push("/");
    }
  }, [dispatch, history, signedUpBusinessInfo]);

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <Mainscreen
      title={`Welcome Back ${
        signedUpBusinessInfo && signedUpBusinessInfo.businessName
      }..`}
    >
      <div className="mx-auto">
        <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
          <div className="flex space-x-5 lg:space-x-36 h-10">
            <div className="flex">
              <div
                className="text-2xl lg:hidden text-white"
                onClick={handleNav}
              >
                {open === true ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="fas fa-bars"></i>
                )}
              </div>
              <Link to="/">
                <img alt="" src={Logof} className="w-4/5 lg:w-full" />
              </Link>
            </div>
            <input className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5" />
          </div>
          <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
            <div>
              <p className="text-lg font-medium text-white mt-2">Cart</p>
            </div>
            <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" />
          </div>
        </head>
        <div className="lg:bg-magenta-blue lg:px-4">
          <div className="block lg:flex lg:space-x-32">
            <ul
              className={
                "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-10 lg:block" +
                (open === true ? " " : " hidden ")
              }
            >
              <li className="mt-0 mb-3 pt-5 lg:pt-2 p-3 bg-white rounded text-Dark-blue mr-10 lg:-mr-8">
                <a href="#" className="flex gap-3">
                  <img alt="" src={dashboard} className="w-5 h-5 mt-1" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="my-3 p-3">
                <a href="#" className="flex gap-3">
                  <img alt="" src={campaign} className="w-5 h-5 mt-1" />
                  <p>Campaigns</p>
                </a>
              </li>
              <li className="my-3 p-3">
                <a href="#" className="flex gap-3">
                  <img alt="" src={store} className="w-5 h-5 mt-1" />
                  <p>Store</p>
                </a>
              </li>
              <li className="my-3 p-3">
                <a href="#" className="flex gap-3">
                  <img alt="" src={analytics} className="w-5 h-5 mt-1" />
                  <p>Analytics</p>
                </a>
              </li>
              <li className="my-3 p-3">
                <a href="#" className="flex gap-3">
                  <img alt="" src={wallet} className="w-5 h-5 mt-1" />
                  <p>Wallet</p>
                </a>
              </li>
              <li className="my-3 p-3">
                <a href="#" className="flex gap-3">
                  <img alt="" src={settings} className="w-5 h-5 mt-1" />
                  <p>Settings</p>
                </a>
              </li>
            </ul>
            <div className="lg:my-10 lg:space-y-10 lg:w-4/5 lg:h-2/5">
              <div className="text-right pl-1 pr-10">
                <button className="bg-white w-40 h-12 border-2 border-black rounded">
                  Explore
                </button>
                <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Store Overview</h2>
                    <button className="text-base font-medium text-Dark-blue">
                      see more
                    </button>
                  </div>
                </div>
                <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Campaign Overview</h2>
                    <button className="text-base font-medium text-Dark-blue">
                      see more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainscreen>
  );
}

export default Dashboard;
