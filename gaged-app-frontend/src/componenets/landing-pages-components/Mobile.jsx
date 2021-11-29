/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Logoh from "../../images/logo-header.jpg";
import { Link } from "react-router-dom";

// const history = useHistory();

function Mobile() {
  const [open, setOpen] = useState(false);

  const HandleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-light-blue mx-auto flex items-center p-5 flex-wrap ">
      <Link to="/">
        <img src={Logoh} className="" />
      </Link>
      <button className="ml-auto" onClick={HandleNav}>
        {open === true ? (
          <i class="far fa-window-close fa-2x"></i>
        ) : (
          <i class="fas fa-bars fa-2x"></i>
        )}
      </button>
      {open === true ? (
        <div class="top-nav w-full pt-5 left-0 right-0 min-h-screen tranform transition duration-200">
          <ul className="flex flex-col space-y-5 text-center">
            <li class="text-black text-2xl font-semibold hover:text-Dark-blue">
              <Link to="/">Campaigns</Link>
            </li>
            <li class="text-black text-2xl font-semibold hover:text-Dark-blue">
              <Link to="store/products/all">Stores</Link>
            </li>
            <li class="text-black text-2xl font-semibold hover:text-Dark-blue">
              <Link to="/about">About</Link>
            </li>

            {/* <li class='py-2 px-14 border border-Dark-blue text-Dark-blue text-2xl font-semibold rounded hover:bg-Dark-blue hover:text-white'> */}

            <li class="py-2 px-14 border border-Dark-blue text-Dark-blue text-2xl font-semibold rounded">
              <Link to="/login">Log in</Link>
            </li>

            <li class="py-2 px-14 border border-Dark-blue bg-Dark-blue text-white text-2xl font-medium rounded hover:bg-white hover:text-Dark-blue">
              <li class="py-2 px-14 border border-Dark-blue bg-Dark-blue text-white text-2xl font-medium rounded">
                <Link to="/signup">Sign up</Link>
              </li>
            </li>
          </ul>
        </div>
      ) : null}
      {/* logout functionality */}
      {/* <Link to="/" onClick={()=> {localStorage.removeItem('signedUpBusinessInfo','signedUpUserInfo'); history.push("/")}}>  */}
      {/* Logout  */}
      {/* </Link>  */}
    </div>
  );
}

export default Mobile;
