/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import HeaderSignUp from "./SignUp/SignUpComponents/HeaderSignUp-Login";
import People from "../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";

// this page can't be named loginGeneral according to the figma design it named signup individual, check it out!!

const LoginGeneral = () => {
  return (
    <div>
      <HeaderSignUp children={undefined} title={undefined} />
      <div className="font-poppins mx-auto w-full flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-16 px-2 md:px-5 pb-10 lg:px-7 lg:pb-10">
        <div className="w-full">
          <img src={People} alt='' />
        </div>
        <div className="lg:mr-20 flex flex-col gap-2 justify-center md:w-2/3">
          <h1 className="font-medium text-3xl md:text-4xl">
            Select your account type
          </h1>
          <p className="text-lg md:w-4/5">
            Choose your account type to help us tailor your experience
          </p>
          <div className="pt-6 flex gap-7">
            <Link to="/individualLogin" className="w-44">
              <button className="w-full h-14 border-2 border-Dark-blue bg-Dark-blue text-white font-medium hover:border-gray-400 hover:bg-white hover:text-black">
                Individual
              </button>
            </Link>
            <Link to="/businessLogin" className="w-44">
              <button className="w-full h-14 border-2 border-gray-400 font-medium hover:border-Dark-blue hover:bg-Dark-blue hover:text-white">
                Business
              </button>
            </Link>
          </div>
          <p className="mt-10 md:mt-24 lg:mt-48">
            Don't have an account?{" "}
            <Link to="/signup" className="text-Dark-blue hover:text-blue-600">
              Sign Up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default LoginGeneral;
