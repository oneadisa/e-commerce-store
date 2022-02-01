import React from "react";
import analytics from "../../../../images/analytics.png";
import wallet from "../../../../images/wallet.png";
import store from "../../../../images/store.png";
import settings from "../../../../images/settings.png";
import dashboard from "../../../../images/dashboard.png";
import campaign from "../../../../images/campaign.png";
import { Link, useNavigate } from "react-router-dom";

function DashBoard() {
    return ( <
        ul className = "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-10 lg:block" >
        <
        li className = "mt-0 mb-3 pt-5 lg:pt-2 p-3 bg-white rounded text-Dark-blue mr-10 lg:-mr-8" >
        <
        Link to = ""
        className = "flex gap-3" >
        <
        img alt = ""
        src = { dashboard }
        className = "w-5 h-5 mt-1" / >
        <
        p > Dashboard < /p> <
        /Link> <
        /li> <
        li className = "my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8" >
        <
        Link to = ""
        className = "flex gap-3" >
        <
        img alt = ""
        src = { campaign }
        className = "w-5 h-5 mt-1" / >
        <
        p > Campaigns < /p> <
        /Link> <
        /li> <
        li className = "my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8" >
        <
        Link to = "/store/products/all"
        className = "flex gap-3" >
        <
        img alt = ""
        src = { store }
        className = "w-5 h-5 mt-1" / >
        <
        p > Store < /p> <
        /Link> <
        /li> <
        li className = "my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8" >
        <
        Link to = ""
        className = "flex gap-3" >
        <
        img alt = ""
        src = { analytics }
        className = "w-5 h-5 mt-1" / >
        <
        p > Analytics < /p> <
        /Link> <
        /li> <
        li className = "my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8" >
        <
        Link to = ""
        className = "flex gap-3" >
        <
        img alt = ""
        src = { wallet }
        className = "w-5 h-5 mt-1" / >
        <
        p > Wallet < /p> <
        /Link> <
        /li> <
        li className = "my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8" >
        <
        Link to = "/settings/general"
        className = "flex gap-3" >
        <
        img alt = ""
        src = { settings }
        className = "w-5 h-5 mt-1" / >
        <
        p > Settings < /p> <
        /Link> <
        /li> <
        /ul>
    );
}

export default DashBoard;