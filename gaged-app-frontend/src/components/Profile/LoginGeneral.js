/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import HeaderSignUp from "./SignUp/SignUpComponents/HeaderSignUp-Login";
import People from "../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";

const LoginGeneral = () => {
  return (
    <div>
      <HeaderSignUp children={undefined} title={undefined} />
      <div className="py-3 pb-10 px-3 md:px-10 flex flex-col lg:flex-row gap-10 md:gap-14 mx-auto">
        <div className="">
          <img src={People} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold font-poppins">
            Select your account type
          </h1>
          <p className="text-base my-4 md:text-lg font-poppins">
            Choose your account type to help us tailor your experience
          </p>
          <div className="flex gap-8 mt-3">
            <Link to="/individualLogin">
              <button className="h-14 w-36 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium hover:bg-white hover:text-black">
                Individual
              </button>
            </Link>
            <Link to="/businessLogin">
              <button className="h-14 w-36 font-poppins border-2 border-Dark-blue bg-white text-Dark-blue text-base md:text-lg font-medium hover:bg-Dark-blue hover:text-white">
                Business
              </button>
            </Link>
          </div>
          <p className="text-base md:text-lg leading-6 md:leading-7 mt-28 font-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginGeneral;
