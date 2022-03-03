/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import HeaderSignUp from "./SignUpComponents/HeaderSignUp-Login";
import People from "../../../images/Gaged-images/Group 3577.png";
// import ErrorMessage from '../../componenets/LoginErrorMessage';
import Loader from "../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../Layout/Errors/GeneralErrorMessage";
import { Link } from "react-router-dom";
import { signUpBusiness, clearErrors } from "../../../actions/businessActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function SetUpProfile2Business() {
  // const [error, setError] = useState(false)
  // const [picMessage, setPicMessage] = useState(null)
  const [message, setMessage] = useState(null);
  let navigate = useNavigate();
  //  const [loading, setLoading] = useState(false)

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const [credentials, setCredentials] = useState({
    businessName: "",
    accountHolderName: "",
    email: "",
    phoneNumber: "",
    password: "",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    confirmPassword: "",
  });
  function handlechange(event) {
    const { value, name } = event.target;

    setCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const dispatch = useDispatch();
  const business = useSelector((state: RootStateOrAny) => state.business);
  const { loading, error, isAuthenticated } = business;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/business/dashboard");
    }
  }, [dispatch, error, navigate, isAuthenticated]);

  const handleClick = async (event) => {
    event.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      setMessage("Oops, Passwords do not match. Please try again.");
    } else
      dispatch(
        signUpBusiness(
          credentials.businessName,
          credentials.accountHolderName,
          credentials.email,
          credentials.password,
          credentials.phoneNumber,
          credentials.pic
        )
      );
  };

  return (
    <>
      <HeaderSignUp children={undefined} title="Business SignUp" />
      {message && <GeneralErrorMessage>{message}</GeneralErrorMessage>}
      {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
      <div className="mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-14 px-2 md:px-5 pb-7 lg:px-7 lg:pb-10">
        <div className="">
          <img src={People} alt=""/>
        </div>

        <div className="flex flex-col gap-5 lg:mt-16">
          <div className="flex flex-col gap-1">
            <h1 className="font-normal font-poppins text-3xl font-semibold">
              Let us set up your profile
            </h1>
            <p className="pt-2 font-poppins text-base lg:w-3/4">
              Please provide correct information while setting up an account.
            </p>
          </div>

          <form onSubmit={handleClick} className="flex flex-col gap-5 md:gap-2">
            {loading && <Loader />}
            <div className="mb-4">
              <div className="">
                <button className="w-44 text-base font-medium h-9 bg-indigo-200 hover:bg-indigo-500">
                  Sign up with email
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">  
              <div className="">
                <input
                  onChange={handlechange}
                  name="businessName"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Business Name"
                  value={credentials.businessName}
                />
              </div>
            
              <div className="">
                <input
                  onChange={handlechange}
                  name="accountHolderName"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Account Holder Name"
                  value={credentials.accountHolderName}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="">
                <input
                  onChange={handlechange}
                  name="email"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Email"
                  value={credentials.email}
                />
              </div>

              <div className="">
                <input
                  onChange={handlechange}
                  name="phoneNumber"
                  type="number"
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Phone"
                  value={credentials.phoneNumber}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="">
                <input
                  onChange={handlechange}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Password"
                  value={credentials.password}
                />
              </div>
              
              <div className="">
                <input
                  onChange={handlechange}
                  name="confirmPassword"
                  type={passwordShown ? "text" : "password"}
                  className="h-12 w-full md:w-72 lg:w-60 pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                  value={credentials.confirmPassword}
                />
                <i
                  className="fas fa-eye -ml-8 "
                  onClick={togglePasswordVisiblity}
                />
              </div>
            </div>

          </form>

          <div className="flex flex-col gap-8 w-full lgw-3/4">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="h-8 w-8 md:h-5 md:w-5 lg:h-8 lg:w-8"
                />
                <span className="font-poppins text-sm leading-4 lg:w-4/5">
                  {" "}
                  Subscribe to our newsletter and receive tips on how to launch
                  a successful campaign.
                </span>
              </div>

              <div className="">
                <p className="font-poppins text-sm">
                  By creating an account, you agree to the{" "}
                  <Link to="/" className="text-indigo-400">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="">
                <button className="h-10 w-full md:w-2/5 text-sm text-white font-normal bg-Dark-blue text-whitefont-semibold hover:bg-blue-800">
                  CREATE ACCOUNT
                </button>
              </div>

              <p className="font-poppins text-sm font-normal">
                Already on Gaged?
                <Link to="/businessLogin" className="text-indigo-400">
                  {" "}
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetUpProfile2Business;
