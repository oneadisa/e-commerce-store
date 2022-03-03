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
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { signUpUser, clearErrors } from "../../../actions/userActions";
// import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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

  const user = useSelector((state: RootStateOrAny) => state.user);
  const { loading, error, isAuthenticated } = user;

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
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/individual/dashboard");
    }
  }, [dispatch, error, navigate, isAuthenticated]);

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
      <div className="mx-auto w-full flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-14 px-2 md:px-5 pb-7 lg:px-7 lg:pb-10">
        <div className="">
          <img src={People} alt="" />
        </div>

        <div className="flex flex-col gap-5 lg:mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium tracking-wide font-poppins text-3xl md:text-4xl">
              Let us set up your profile
            </h1>
            <p className="font-poppins text-lg lg:w-2/3">
              Please provide correct information while setting up an account.
            </p>
          </div>

          <form onSubmit={handleClick} className="flex flex-col gap-5 md:gap-2">
            {loading && <Loader />}
            <div className="mb-4">
              <button className="w-44 text-base font-medium h-9 bg-indigo-200 rounded-md hover:bg-indigo-500 hover:text-white">
                Sign up with email
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-5 lg:gap-3">
              <div className="">
                <input
                  onChange={handlechange}
                  name="firstName"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="First name"
                  value={credentials.firstName}
                />
              </div>

              <div className="">
                <input
                  onChange={handlechange}
                  name="lastName"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Last name"
                  value={credentials.lastName}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 lg:gap-3">
              <div className="">
                <input
                  onChange={handlechange}
                  name="email"
                  type="text"
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Email"
                  value={credentials.email}
                />
              </div>

              <div className="">
                <input
                  onChange={handlechange}
                  name="phoneNumber"
                  type="number"
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Phone"
                  value={credentials.phoneNumber}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 lg:gap-3">
              <div className="">
                <input
                  onChange={handlechange}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Password"
                  value={credentials.password}
                />
              </div>

              <div className="">
                <input
                  onChange={handlechange}
                  name="confirmPassword"
                  type={passwordShown ? "text" : "password"}
                  className="h-12 w-full md:w-72 lg:w-60 pl-5 placeholder-black border-2 border-gray-500 outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                  value={credentials.confirmPassword}
                />
                <i className="fas fa-eye -ml-8" onClick={togglePasswordVisiblity} />
              </div>
            </div>
          </form>

          <div className="flex flex-col gap-8 w-full lg:w-3/4">
            <div className="flex flex-col gap-2">
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
                  <Link to="" className="text-indigo-400 hover:text-indigo-500">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleClick}
                className="h-12 w-full md:w-60 text-white tracking-wider bg-Dark-blue rounded-md text-whitefont-semibold hover:bg-blue-800"
              >
                Create account
              </button>

              <p className="font-poppins text-sm font-normal">
                Already on Gaged?
                <Link to="/individualLogin" className="text-indigo-400 hover:text-indigo-500">
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
