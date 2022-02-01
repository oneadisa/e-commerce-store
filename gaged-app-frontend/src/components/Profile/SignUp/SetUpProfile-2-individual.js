/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import HeaderSignUp from "./SignUpComponents/HeaderSignUp-Login";
import People from "../../../images/Gaged-images/Group 3577.png";
import Loader from "../../Layout/Loader/Loader";
import { Link } from "react-router-dom";
import GeneralErrorMessage from "../../Layout/Errors/GeneralErrorMessage";
// import PictureErrorMessage from '../../componenets/PictureErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../actions/userActions";
// import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SetUpProfile2Individual() {
  // const [error, setError] = useState(false)
  // const [picMessage, setPicMessage] = useState(null)
  const [message, setMessage] = useState(null);
  let navigate = useNavigate();
  // const [loading, setLoading] = useState(false)

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
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

  const userSignUp = useSelector((state) => state.userSignUp);
  const { loading, error, signedUpUserInfo } = userSignUp;

  // const postDetails = (pics) => {
  // if (
  //   pics ===
  //   "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  // ) {
  //   return setPicMessage("Please Select an Image");
  // }
  // setPicMessage(null);
  // if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //   const data = new FormData();
  //   data.append("file", pics);
  //   data.append("upload_preset", "notezipper");
  //   data.append("cloud_name", "piyushproj");
  //   fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
  // method: "post",
  // body: data,
  //   })
  // .then((res) => res.json())
  // .then((data) => {
  //   setCredentials.pic(data.url.toString());
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // } else {
  //   return setPicMessage("Please Select an Image");
  // }
  // }

  useEffect(() => {
    if (signedUpUserInfo) {
      navigate("/individual/dashboard");
    }
  }, [navigate, signedUpUserInfo]);

  const handleClick = (event) => {
    event.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      setMessage("Oops, Passwords do not match. Please try again.");
    } else
      dispatch(
        signUpUser(
          credentials.firstName,
          credentials.lastName,
          credentials.email,
          credentials.password,
          credentials.pic,
          credentials.phoneNumber
        )
      );

    // window.location = "/gaged"

    // const registered = {
    // firstName: credentials.firstName,
    // lastName: credentials.lastName,
    // email: credentials.email,
    // phoneNumber: credentials.phoneNumber,
    // password: credentials.password,
    // pic: credentials.pic,
    // confirmPassword: credentials.confirmPassword
    // }
    //
    // if (registered.password !== registered.confirmPassword) {
    // setMessage('Passswords do not match!')
    //    } else {
    //    setMessage(null)
    //    try {
    //    const config = {
    //    headers: {
    //    "Content-type": "application/json",
    //
    //    }
    //    }
    //    const {data} = await axios.post("/app/signup/2/individual",
    // registered,
    // config)
    // console.log(data)
    // localStorage.setItem('signedUpUserInfo', JSON.stringify(data))
    //
    // setLoading(false)
    // }
    // catch (error) {
    // setError(error.response.data.message)
    // setLoading(false) }
    //    }

    // axios.post('http://localhost:8080/app/signup/2/individual', registered)
    // .then(response => console.log(response.data)
    // )

    // setCredentials(
    // {
    //  firstName: '',
    // lastName: '',
    // email: '',
    // phoneNumber: '',
    // password: '',
    // pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    // confirmPassword: ''
    // }
    // )
  };

  return (
    <>
      <HeaderSignUp children={undefined} title="User SignUp" />
      {message && (
        <GeneralErrorMessage variant="danger">{message}</GeneralErrorMessage>
      )}
      {error && (
        <GeneralErrorMessage variant="danger">{error}</GeneralErrorMessage>
      )}
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
          {/* {message && <ErrorMessage/> } */}

          <form onSubmit={handleClick} className="flex flex-col gap-5 md:gap-2">
            {loading && <Loader />}
            <div className="mb-4">
              {/* <label htmlFor="" className="text-xs font-semibold px-1"></label> */}
              <div className="">
                {/* <div className="w-10 z-10 pl-1 text-start pointer-events-none flex ">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                <button className="w-44 text-base font-medium h-9 bg-indigo-200 hover:bg-indigo-500">
                  Sign up with email
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="">
                {/* <label
                  htmlFor=""
                  className="text-xs font-semibold"
                ></label> */}
                <div className="">
                  {/* <div className="z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="firstName"
                    type="text"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="First name"
                    value={credentials.firstName}
                  />
                </div>
              </div>

              <div className="">
                {/* <label
                  htmlFor=""
                  className="text-xs font-semibold px-1"
                ></label> */}
                <div className="">
                  {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start">
                    <i className="mdi mdi-account-outline text-black text-lg"></i>
                  </div> */}
                  <input
                    onChange={handlechange}
                    name="lastName"
                    type="text"
                    className="h-12 w-full pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Last name"
                    value={credentials.lastName}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full">
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
                  className="text-xs font-semibold px-1"
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
                  {/* <i className="fa fa-eye transform translate-y-4 translate-x-3" onClick={togglePasswordVisiblity}/> */}
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
                    name="confirmPassword"
                    type={passwordShown ? "text" : "password"}
                    className="h-12 w-full md:w-auto pl-3 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                    placeholder="Confirm Password"
                    value={credentials.confirmPassword}
                  />
                  <i className="fas fa-eye" onClick={togglePasswordVisiblity} />
                </div>
              </div>
            </div>
            {/* {picMessage && (<><PictureErrorMessage children={undefined} variant='danger' />{picMessage} <PictureErrorMessage children={undefined} /></>)} */}
            {/* <div className="w-1/2 px-3 mb-5"> */}
            {/* <label htmlFor="" className="text-xs  font-semibold shadow-lg tracking-wide cursor-pointer px-1"> */}
            {/* <div className="flex transform  -translate-y-1"> */}
            {/*              */}
            {/* <div className="w-10 z-1 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div> */}
            {/* <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> */}
            {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
            {/* </svg> */}
            {/* <span  className="w-full mt-2 text-base leading-normal -ml-10 pl-10 pr-3 py-2 text-left bg-indigo-300 outline-none hover:bg-indigo-500" placeholder="Add your Profile Image">Add your Profile Image</span> */}
            {/* <input onChange={(e) => postDetails(e.target.files[0])} name='pic' type='image/png' className="hidden" value={credentials.pic}  /> */}
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
                  <Link to="" className="text-indigo-400">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleClick}
                className="h-10 w-full md:w-2/5 text-sm text-white font-normal bg-Dark-blue text-whitefont-semibold hover:bg-blue-800"
              >
                Create account
              </button>

              <p className="font-poppins text-sm font-normal">
                Already on Gaged?
                <Link to="/userLogin" className="text-indigo-400">
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

export default SetUpProfile2Individual;
