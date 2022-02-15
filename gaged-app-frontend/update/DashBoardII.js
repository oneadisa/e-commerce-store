import React from 'react'
import { MdCampaign } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { MdSpaceDashboard } from 'react-icons/md';
import { GrAnalytics } from 'react-icons/gr';
import { FaWallet } from 'react-icons/fa';
import { FaStoreAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

function DashBoardII() {
    return (
        <ul
            className=
              "w-1/2 lg:w-36 min-h-screen lg:min-h-0 absolute bg-magenta-blue text-Dark-grey lg:static text-lg font-medium pt-5 lg:pt-0 lg:mt-14"
          >
            <li className="my-3 p-3">
              <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
                <MdSpaceDashboard />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
                <MdCampaign />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
                <FaStoreAlt />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3 bg-white rounded text-Dark-blue mr-10 lg:mr-0">
              <Link to="/" className="flex items-center gap-3">
                <GrAnalytics />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
                <FaWallet />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
                <MdSettings />
                <p>Settings</p>
              </Link>
            </li>
        </ul>
    )
}

export default DashBoardII;