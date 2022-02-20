import { MdCampaign } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <ul className="w-1/2 lg:w-36 min-h-screen lg:min-h-0 absolute bg-magenta-blue text-Dark-grey lg:static text-lg font-medium pt-5 lg:pt-0 lg:mt-14">
      <li className="my-3 p-3">
        <Link
          to="/business/dashboard"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdSpaceDashboard />
          <p>Dashboard</p>
        </Link>
      </li>
      <li className="my-3 p-3">
        <Link
          to="/business/campaigns/me"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdCampaign />
          <p>Campaigns</p>
        </Link>
      </li>
      <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:mr-0">
        <Link to="/business/overview" className="flex items-center gap-3">
          <FaStoreAlt />
          <p>Store</p>
        </Link>
      </li>
      <li className="my-3 p-3">
        <Link to="/" className="flex items-center gap-3 hover:text-Dark-blue">
          <GrAnalytics />
          <p>Analytics</p>
        </Link>
      </li>
      <li className="my-3 p-3">
        <Link
          to="/business/wallet"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <FaWallet />
          <p>Wallet</p>
        </Link>
      </li>
      <li className="my-3 p-3">
        <Link
          to="/business/settings"
          className="flex items-center gap-3 hover:text-Dark-blue"
        >
          <MdSettings />
          <p>Settings</p>
        </Link>
      </li>
    </ul>
  );
}

export default DashBoard;
