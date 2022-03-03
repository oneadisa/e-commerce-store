/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderSignUp from "./SignUpComponents/HeaderSignUp-Login";
import People from "../../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
// import {Link}from 'react-router-dom';

const SetUpProfile1individual = () => {
  return (
    <>
      <HeaderSignUp children={undefined} title={undefined} />
      <div className="font-poppins mx-auto w-full flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-14 px-2 md:px-5 pb-12 lg:px-7 lg:pb-10">
        <div className="w-full">
          <img src={People} alt='' />
        </div>

        <div className='lg:mr-20 flex flex-col gap-2 justify-center md:w-2/3'>
          <h1 className="font-medium text-3xl md:text-4xl">
            Let us set up your profile
          </h1>
          <p className="text-lg md:w-4/5">
            Please provide correct information while signing up for an account
          </p>
          <div className='pt-3 flex flex-col gap-7'>
            <Link to="/" className="w-full">
              <button className="w-full h-12 border-2 border-gray-400 font-medium hover:border-Dark-blue  hover:bg-Dark-blue hover:text-white">
                Sign Up with Facebook
              </button>
            </Link>
            <Link to="/signup/2/individual" className="w-full">
              <button className="w-full h-12 border-2 border-gray-400 font-medium hover:border-Dark-blue hover:bg-Dark-blue hover:text-white">
                Sign Up With Email
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUpProfile1individual;
