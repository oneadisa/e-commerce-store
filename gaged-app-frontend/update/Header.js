import React from "react";
import Logof from "../images/logo-footer.jpg";

function Header(props) {
  return (
    <head className="flex justify-between bg-medium-blue px-2 lg:px-5 py-2">
      <div className="flex space-x-5 lg:space-x-36 h-10">
        <div className="flex">
          <div
            className="text-2xl lg:hidden text-white"
            onClick={() => props.handleNav()}
          >
            {props.button}
          </div>
          <img src={Logof} className="w-4/5 lg:w-full" alt="logo" />
        </div>
        <input
          placeHolder="Search Product Titles"
          className="w-28 hidden lg:block lg:w-96 outline-none pl-1 lg:pl-5"
          // onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
        <div>
          <p className="text-xl font-normal text-white mt-1">Cart</p>
        </div>
        <div className="w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
      </div>
    </head>
  );
}

export default Header;
