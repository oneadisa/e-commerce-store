import React from 'react'
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import { Link } from "react-router-dom";

function DashBoard() {
    return (
        <ul
            className={
              "w-1/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-16 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:mr-0">
              <Link to="/" className="flex gap-3">
                <img src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </Link>
            </li>
        </ul>
    )
}

export default DashBoard
