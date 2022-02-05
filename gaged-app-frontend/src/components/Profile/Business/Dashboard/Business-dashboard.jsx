//eslint-disable jsx-a11y/anchor-is-valid //
import React, { Fragment, useState, useEffect } from "react";
import Mainscreen from "../../../Layout/Mainscreen";
import { Link, useNavigate } from "react-router-dom";
import vibe from "../../../../images/vibe.png";
import password from "../../../../images/password.png";
import alot from "../../../../images/alot.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import MetaData from "../../../Layout/metaData";
import Loader from "../../../Layout/Loader/Loader";

import { logout } from "../../../../actions/businessActions";
import BusinessCard from "../../../Home/businessCard";

function BusinessDashboard() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo, loading } = signedUpBusinessLogin;
  useEffect(() => {
    if (!signedUpBusinessInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, signedUpBusinessInfo]);

  useEffect(() => {}, [signedUpBusinessInfo]);

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title={`${signedUpBusinessInfo.businessName}'s Dashboard`}
          />
          <div className="mx-auto h-screen">
            <Header
              handleNav={() => setOpen(!open)}
              button={
                open ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )
              }
            />

            <div className="lg:bg-magenta-blue lg:px-4 h-screen">
              <div className="block lg:flex lg:space-x-32 ">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>
                <div className="lg:hidden">{open && <DashBoard />}</div>
                <div className="lg:my-10 lg:space-y-10 lg:w-4/5 lg:h-2/5">
                  <div className="text-right pl-1 pr-10">
                    <Mainscreen
                      title={`Welcome Back ${
                        signedUpBusinessInfo &&
                        signedUpBusinessInfo.businessName
                      }`}
                    >
                      <button className="bg-white text-black w-40 m-4 h-12 border-2 border-black py-3 rounded hover:bg-blue-800 hover: hover:text-gray-100">
                        Explore
                      </button>
                    </Mainscreen>

                    <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          Store Overview
                        </h2>
                        <Link to="/explore/stores">
                          <button className="text-base font-medium text-Dark-blue">
                            see more
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          Campaign Overview
                        </h2>
                        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8"></div>
                        <Link to="/explore/campaigns">
                          <button className="text-base font-medium text-Dark-blue">
                            see more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default BusinessDashboard;
