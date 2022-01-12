import React, { useState } from "react";
import Logof from "../../images/logo-footer.jpg";

function Header(props) {

  return (
    <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-4 py-2">
      <div className="flex space-x-5 lg:space-x-36 h-10">
        <div className="flex items-center">
          <div className="text-2xl lg:hidden text-white" onClick={() => props.handleNav()}>
            {props.button}
          </div>
          <img alt="" src={Logof} className="w-4/5 lg:w-full" />
        </div>
        <input className="hidden md:block md:w-64 lg:w-96 outline-none pl-1 lg:pl-5" />
      </div>
      <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
        <div>
          <p className="text-xl font-normal text-white mt-1">Cart</p>
        </div>
        <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
      </div>
    </head>
  );
}

export default Header;
