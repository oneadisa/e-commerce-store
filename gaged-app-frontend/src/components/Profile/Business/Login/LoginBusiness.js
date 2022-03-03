/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import HeaderSignUp from "../../SignUp/SignUpComponents/HeaderSignUp-Login";
import People from "../../../../images/Gaged-images/Group 3577.png";
import { Link } from "react-router-dom";
import Loader from "../../../Layout/Loader/Loader";
// import GeneralErrorMessage from "../componenets/GeneralErrorMessage";
import ErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  businessLogin,
} from "../../../../actions/businessActions";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function LoginBusiness() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const alert = useAlert();
  // eslint-disable-next-line no-unused-vars

  // useEffect(() => {
  // const ignedUpBusinessInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))
  // if (ignedUpBusinessInfo) {
  // history.push('/')
  // }
  //
  // }, [history])

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
  }, [alert, dispatch, error, navigate, isAuthenticated]);

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(businessLogin(email, password));
  };

  return (
    <>
      <HeaderSignUp children={undefined} title={undefined} />
      {error && <ErrorMessage children={undefined} />}

      <div className="mx-auto w-full flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-14 px-2 md:px-5 pb-7 lg:px-7 lg:pb-10">
        <div className="">
          <img src={People} alt='' />
        </div>

        <div className="lg:mt-24 flex flex-col justify-center">
          {loading && <Loader />}
          <form className="flex flex-col md:w-4/5 justify-center">
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
                className="font-poppins h-12 pl-8 border-2 border-gray-400 text-black font-medium placeholder-gray-400"
                placeholder="Email"
              />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="font-poppins h-12 pl-8 border-2 border-gray-400 text-black font-medium placeholder-gray-400"
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
          </form>

          <div className="my-5">
            <p className="font-poppins my-5 font-medium">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-poppins text-Dark-blue hover:text-blue-600"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBusiness;
