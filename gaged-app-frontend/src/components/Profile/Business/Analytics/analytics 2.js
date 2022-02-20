//eslint-disable jsx-a11y/anchor-is-valid //
import React, { useState, useEffect } from "react";
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
import { logout } from "../../../../actions/businessActions";
import BusinessCard from "../../../Home/businessCard";

function BusinessDashboard() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;
  useEffect(() => {
    dispatch();
    if (!signedUpBusinessInfo) {
    }
  }, [dispatch, navigate, signedUpBusinessInfo]);

  useEffect(() => {}, [signedUpBusinessInfo]);

  const [open, setOpen] = useState(false);

  return (
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
              <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                <div className="flex justify-between"></div>
              </div>
              <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                <div className="flex justify-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDashboard;
