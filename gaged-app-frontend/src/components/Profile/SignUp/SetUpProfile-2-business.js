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
import { signUpBusiness } from "../../../actions/businessActions";
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
  const businessSignUp = useSelector(
    (state: RootStateOrAny) => state.businessSignUp
  );
  const { loading, error, signedUpBusinessInfo } = businessSignUp;

  useEffect(() => {
    if (signedUpBusinessInfo) {
      navigate("/business/dashboard");
    }
  }, [navigate, signedUpBusinessInfo]);

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
      <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-14 px-2 pb-7 lg:px-7 lg:pb-10">
        <div className="">
          <img src={People}></img>
        </div>

        <div className="flex flex-col gap-5 lg:mt-16">
          <div className="flex flex-col gap-1">
            <h1 className="font-normal font-poppins text-3xl">
              Let us set up your profile
            </h1>
            <p className="font-poppins text-base lg:w-3/4">
              Please provide correct information while setting up an account.
            </p>
          </div>

          <form onSubmit={handleClick} className="flex flex-col gap-5 md:gap-2">
            {loading && <Loader />}
            <div className="mb-4">
              <div className="">
                {/* <label
                  htmlFor=""
                  className="text-xs font-semibold px-1"
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-start pointer-events-none flex ">
                    <i className="mdi mdi-account-outline text-black  text-lg"></i>
                  </div> */}
                  <button className="w-44 text-base font-medium h-9 bg-indigo-200 hover:bg-indigo-500">
                    Sign up with email
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="">
                {/* <label
                  htmlFor=""
                  className=""
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="businessName"
                    type="text"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Business Name"
                    value={credentials.businessName}
                  />
                </div>
              </div>

              <div className="">
                {/* <label
                  htmlFor=""
                  className=""
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="accountHolderName"
                    type="text"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Account Holder Name"
                    value={credentials.accountHolderName}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="">
                {/* <label
                  htmlFor=""
                  className="text-xs font-semibold px-1"
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="email"
                    type="text"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Email"
                    value={credentials.email}
                  />
                </div>
              </div>

              <div className="">
                {/* <label
                  htmlFor=""
                  className="text-xs font-semibold px-1"
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="phoneNumber"
                    type="number"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Phone"
                    value={credentials.phoneNumber}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="">
                {/* <label
                  htmlFor=""
                  className=""
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Password"
                    value={credentials.password}
                  />
                </div>
              </div>

              <div className="">
                {/* <label
                  htmlFor=""
                  className=""
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="confirmPassword"
                    type={passwordShown ? "text" : "password"}
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Confirm Password"
                    value={credentials.confirmPassword}
                  />
                  <i
                    className="fas fa-eye transform translate-y-4 translate-x-4 "
                    onClick={togglePasswordVisiblity}
                  />
                </div>
              </div>
            </div>

            {/* {picMessage && (<><PictureErrorMessage children={undefined} variant='danger' />{picMessage} <PictureErrorMessage children={undefined} /></>)} */}
            {/* <div className="w-1/2 px-3 mb-5"> */}
            {/* <label htmlFor="" className="text-xs  font-semibold shadow-lg tracking-wide cursor-pointer px-1"> */}
            {/* <div className="flex transform  -translate-y-1"> */}
            {/*          */}
            {/* <div className="w-10 z-1 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div> */}
            {/* <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> */}
            {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
            {/* </svg> */}
            {/* <span  className="w-full mt-2 text-base leading-normal -ml-10 pl-10 pr-3 py-2 text-left bg-indigo-300 outline-none hover:bg-indigo-500" placeholder="Add your Profile Image">Add your Profile Image</span> */}
            {/* <input onChange={(e) => postDetails(e.target.files[0])} name='pic'  type='image/jpeg' className="hidden" value={credentials.pic}  /> */}
            {/* </div> */}
            {/* </label> */}
            {/* </div> */}
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
