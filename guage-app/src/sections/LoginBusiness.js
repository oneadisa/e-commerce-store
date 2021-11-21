/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import HeaderSignUp from "./SignUp/SignUpComponents/HeaderSignUp-Login";
import People from "../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
import Loader from "../componenets/Loader";
import ErrorMessage from "../componenets/LoginErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { businessLogin } from "../actions/businessActions";
// import { log } from 'console'

function LoginBusiness({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars

  // useEffect(() => {
  // const signedUpBusinessInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))
  // if (signedUpBusinessInfo) {
  // history.push('/')
  // }
  //
  // }, [history])

  const dispatch = useDispatch();
  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );
  const { loading, error, signedUpBusinessInfo } = signedUpBusinessLogin;
  useEffect(() => {
    if (signedUpBusinessInfo) {
      history.push("/");
    }
  }, [history, signedUpBusinessInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(businessLogin(email, password));
  };

  return (
    <>
      <HeaderSignUp children={undefined} title={undefined} />
      {error && <ErrorMessage />}
      <div className="p-1 h-screen w-screen flex md:flex-row items-center">
        <div className="">
          <img src={People} />
        </div>

        <form>
          {loading && <Loader />}
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-medium font-poppins text-black">
              Welcome Back!
            </h1>
            <p className="text-left text-lg my-4 md:text-xl font-poppins">
              We missed you, sign in to get more of the "Gaged" experience.
            </p>
            <div>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium    flex justify-left space-x-7"
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium   flex justify-left space-x-7"
                placeholder="Password"
              />
            </div>
            <p className="font-poppins my-8">
              Forgot Password?{" "}
              <span className="font-poppins text-blue-700 space-y-7">
                Reset Here
              </span>
            </p>
            <button
              onClick={submitHandler}
              className=" font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white flex justify-left space-y-7"
            >
              Login
            </button>
            <p className="font-poppins my-8">
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

export default LoginBusiness;
