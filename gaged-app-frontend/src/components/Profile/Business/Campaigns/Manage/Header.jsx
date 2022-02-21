import React, { Fragment, useState } from "react";
import MetaData from "../../../../Layout/metaData";
import Logof from "../../../../../images/Gaged-images/Gaged-Blue.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../../../actions/businessActions";
import { useDispatch, useSelector } from "react-redux";

function Header0() {
  let navigate = useNavigate();

  const alert = useAlert();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/campaigns/${keyword}`);
    } else {
      navigate("/campaigns");
    }
  };

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <MetaData title="Campaigns on Gaged" />
      <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-40 h-10">
          <div>
            <Link to="/">
              <img src={Logof} className="w-4/5 lg:w-full h-full" alt="" />
            </Link>
          </div>
          <form onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search Campaigns"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input
              className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5"
              type="submit"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            {/* <p className="text-xl font-normal text-white mt-1">Cart</p> */}
            <li class="font-Poppins block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
              <Link to="/cart" role="button" class="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span
                  class={
                    cartItems.length > 0
                      ? "absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
                      : ""
                  }
                >
                  5
                </span>
              </Link>
            </li>
          </div>

          <div className="relative w-12 h-12">
            <img
              className="rounded-full border border-gray-100 shadow-sm"
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt="user"
            />
          </div>
        </div>
      </head>
    </Fragment>
  );
}

export default Header0;
