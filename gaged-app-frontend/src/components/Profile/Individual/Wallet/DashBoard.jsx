import React from "react";
import { MdCampaign } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardCamp() {
  return (
    <ul className="w-2/3 lg:w-36 min-h-screen lg:min-h-0 absolute bg-magenta-blue text-Dark-grey lg:static text-lg font-medium pt-5 lg:pt-0 lg:mt-14">
      <li className="my-2 p-3">
        <Link
          to="/individual/explore"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdSpaceDashboard />
          <p>Dashboard</p>
        </Link>
      </li>
      <li className="my-2 p-3">
        <Link
          to="/individual/campaigns"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdCampaign />
          <p>Campaigns</p>
        </Link>
      </li>
      <li className="my-2 bg-white p-3 rounded text-Dark-blue mr-10 lg:-mr-5">
        <Link
          to="/individual/wallet"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <FaWallet />
          <p>Wallet</p>
        </Link>
      </li>
      <li className="my-2 p-3">
        <Link
          to="/individual/settings/general"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdSettings />
          <p>Settings</p>
        </Link>
      </li>
    </ul>
  );
}

export default DashboardCamp;
