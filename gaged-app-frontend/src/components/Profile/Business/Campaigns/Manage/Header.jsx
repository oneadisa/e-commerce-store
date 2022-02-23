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

<head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-6 py-2">
  <div className="flex space-x-5 lg:space-x-28 h-10">
    <div className="flex items-center lg:items-stretch">
      <div
        className="text-3xl lg:hidden text-white"
        onClick={() => props.handleNav()}
      >
        {props.button}
      </div>
      <img alt="" src={Logof} className="w-4/5 lg:w-full" />
    </div>
    <input className="hidden md:block md:w-64 lg:w-96 outline-none pl-1 lg:pl-5" />
  </div>
  <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
    <Link to="/cart">
      <div>
        <p className="text-xl font-normal text-white mt-1">Cart</p>
      </div>
    </Link>
    <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
  </div>
</head>

  );
}

export default Header0;
