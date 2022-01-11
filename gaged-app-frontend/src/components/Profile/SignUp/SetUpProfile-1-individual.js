/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderSignUp from "./SignUpComponents/HeaderSignUp-Login";
import People from "../../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
// import {Link}from 'react-router-dom';

const SetUpProfile1individual = () => {
  return (
    <div>
      <HeaderSignUp children={undefined} title={undefined} />
      <div className="flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-12 px-2 pb-10 lg:px-7 lg:pb-10">
        <div className="">
          <img src={People}></img>
        </div>


        <div className='lg:mt-52'>
          <div className="flex flex-col gap-2 lg:w-4/5">
            <h1 className="text-3xl md:text-4xl font-medium font-poppins">
              Let us set up your profile
            </h1>
            <p className="text-lg font-poppins leading-5 md:w-4/5">
              Please provide correct information while signing up for an account
            </p>
            <div className='flex flex-col gap-3 mt-9'>
              <Link to="/">
                <button className="font-poppins text-lg h-12 w-full border-2 font-medium  hover:bg-Dark-blue hover:text-white hover:border-Dark-blue">
                  Sign Up with Facebook
                </button>
              </Link>
              <Link to="/signup/2/individual">
                <button className=" font-poppins text-lg h-12 w-full border-2 font-medium hover:bg-Dark-blue hover:text-white hover:border-Dark-blue">
                  Sign Up With Email
                </button>
              </Link>
              
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SetUpProfile1individual;
