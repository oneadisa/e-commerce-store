// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";
//
// const options = {
// burgerColorHover: "#eb4034",
// logo,
// logoWidth: "20vmax",
// navColor1: "white",
// logoHoverSize: "10px",
// logoHoverColor: "#eb4034",
// link1Text: "Home",
// link2Text: "Products",
// link3Text: "Contact",
// link4Text: "About",
// link1Url: "/",
// link2Url: "/products",
// link3Url: "/contact",
// link4Url: "/about",
// link1Size: "1.3vmax",
// link1Color: "rgba(35, 35, 35,0.8)",
// nav1justifyContent: "flex-end",
// nav2justifyContent: "flex-end",
// nav3justifyContent: "flex-start",
// nav4justifyContent: "flex-start",
// link1ColorHover: "#eb4034",
// link1Margin: "1vmax",
// profileIconUrl: "/login",
// profileIconColor: "rgba(35, 35, 35,0.8)",
// searchIconColor: "rgba(35, 35, 35,0.8)",
// cartIconColor: "rgba(35, 35, 35,0.8)",
// profileIconColorHover: "#eb4034",
// searchIconColorHover: "#eb4034",
// cartIconColorHover: "#eb4034",
// cartIconMargin: "1vmax",
// };
//
// const Header = () => {
// return <ReactNavbar {...options} />;
// };

import React, { useState } from "react";
import Logof from "../../../images/Gaged-images/Gaged-Blue.svg";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
// import { logout } from "../../../../actions/businessActions";
import { useSelector } from "react-redux";
// import {useAlert} from "react-alert"

function Header(props) {
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  // const alert = useAlert();

  const [keyword, setKeyword] = useState("");
  const { cartItems } = useSelector((state: RootStateOrAny) => state.cart);
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/campaigns/${keyword}`);
    } else {
      navigate("/campaigns");
    }
  };
  // function logoutUser() {
  // dispatch(logout());
  // alert.success("Logout Successfully");
  // }
  //
  // const business = useSelector(
  // (state) => state.business
  // );
  // const { businessInfo } = business;

  // const logoutHandler = () => {
  // dispatch(logout());
  // navigate("/");
  // };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
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

export default Header;
