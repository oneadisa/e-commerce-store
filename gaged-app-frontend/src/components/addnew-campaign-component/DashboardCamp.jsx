import React from "react";
import { MdCampaign } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { MdSpaceDashboard } from 'react-icons/md';
import { GrAnalytics } from 'react-icons/gr';
import { FaWallet } from 'react-icons/fa';
import { FaStoreAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

function DashboardCamp() {
    return (
      <ul className="w-2/3 lg:w-36 min-h-screen lg:min-h-0 absolute bg-magenta-blue text-Dark-grey lg:static text-lg font-semibold pt-5 lg:pt-0 lg:mt-14">
          <li className="my-2 p-3">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={dashboard} className="w-5 h-5 mt-1" /> */}
              <MdSpaceDashboard />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="my-2 bg-white p-3 rounded text-Dark-blue mr-10 lg:-mr-10">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={campaign} className="w-5 h-5 mt-1" /> */}
              <MdCampaign />
              <p>Campaigns</p>
            </Link>
          </li>
          <li className="my-2 p-3">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={store} className="w-5 h-5 mt-1" /> */}
              <FaStoreAlt />
              <p>Store</p> 
            </Link>
          </li>
          <li className="my-2 p-3">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={analytics} className="w-5 h-5 mt-1" /> */}
              <GrAnalytics />
              <p>Analytics</p>
            </Link>
          </li>
          <li className="my-2 p-3">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={wallet} className="w-5 h-5 mt-1" /> */}
              <FaWallet />
              <p>Wallet</p>
            </Link>
          </li>
          <li className="my-2 p-3">
            <Link to="/" className="flex items-center gap-3">
              {/* <img alt="" src={settings} className="w-5 h-5 mt-1" /> */}
              <MdSettings />
              <p>Settings</p>
            </Link>
          </li>
      </ul>
    )
  }
export default DashboardCamp;
