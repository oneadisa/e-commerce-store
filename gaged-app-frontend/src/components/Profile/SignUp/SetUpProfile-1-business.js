/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderSignUp from "./SignUpComponents/HeaderSignUp-Login";
import People from "../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
// import {Link}from 'react-router-dom';

function SetUpProfile1Business() {
  return (
    <>
      <HeaderSignUp children={undefined} title={undefined} />
      <div className="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div className=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform -translate-y-16 ">
          <img src={People}></img>
        </div>
        <div className="transform -translate-y-32">
          <h1 className="text-4xl lg:text-5xl font-medium font-poppins text-black">
            Let us set up your profile
          </h1>
          <p className="text-left text-lg my-4 md:text-xl font-poppins">
            Please provide correct information while signing up for an account
          </p>
          <div>
            <Link to="/">
              <button className=" font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white flex justify-left space-x-7">
                Sign Up with Facebook
              </button>
            </Link>
            <br />
            <Link to="/signup/2/business">
              <button className=" font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium r hover:bg-Dark-blue hover:text-white flex justify-left space-x-7">
                Sign Up With Email
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetUpProfile1Business;
