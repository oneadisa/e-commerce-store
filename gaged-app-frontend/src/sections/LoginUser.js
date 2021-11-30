/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import HeaderSignUp from "./SignUp/SignUpComponents/HeaderSignUp-Login";
import People from "../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
import Loader from "../componenets/Loader";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/userActions";
import ErrorMessage from "../componenets/LoginErrorMessage";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars

  // useEffect(() => {
  // const signedUpUserInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))

  // if (signedUpUserInfo) {
  // navigate.push('/')
  // }
  //
  // }, [navigate])

  const dispatch = useDispatch();

  const signedUpUserLogin = useSelector(
    (state: RootStateOrAny) => state.signedUpUserLogin
  );
  const { loading, error, signedUpUserInfo } = signedUpUserLogin;

  useEffect(() => {
    if (signedUpUserInfo) {
      navigate("/individual/dashboard");
    }
  }, [navigate, signedUpUserInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(userLogin(email, password));
  };

  return (
    <>
      <HeaderSignUp children={undefined} title={undefined} />
      {error && <ErrorMessage />}

      <div className="py-3 pb-10 px-3 md:px-10 flex flex-col lg:flex-row gap-10 md:gap-14 mx-auto">
        <div className="">
          <img src={People} />
        </div>
        <form>
          {loading && <Loader />}
          <div className="flex flex-col md:w-4/5 lg:mt-24 justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold font-poppins">
              Welcome Back!
            </h1>

            <p className="text-lg my-4 md:text-lg font-poppins">
              We missed you, sign in to get more of the "Gaged" experience.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium   flex justify-left space-x-7"
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium   flex justify-left space-x-7"
                placeholder="Password"
              />
            </div>
            <p className="font-poppins my-3">
              Forgot Password?{" "}
              <span className="font-poppins text-blue-700 space-y-7">
                Reset Here
              </span>
            </p>
            <button
              onClick={submitHandler}
              className="h-12 mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium hover:bg-white hover:text-black"
            >
              Login
            </button>
            <p className="font-poppins my-5 font-medium">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-poppins text-blue-700 space-y-7"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginUser;
