/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import Mainscreen from "../Mainscreen";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import vibe from "../../images/vibe.png";
// import password from "../../images/password.png";
// import alot from "../../images/alot.png";
// import { useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BusinessDashboard({ navigate }) {
  // const dispatch = useDispatch();

  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;
  // useEffect(() => {
  // dispatch();
  // if (!signedUpBusinessInfo) {
  // }
  // }, [dispatch, navigate, signedUpBusinessInfo]);

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto  h-screen">
      <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-36 h-10">
          <div className="flex">
            <div className="text-2xl lg:hidden text-white" onClick={handleNav}>
              {open === true ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </div>
            <Link to="/">
              <img alt="" src={Logof} className="w-4/5 lg:w-full" />
            </Link>
          </div>
          <input className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5 focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <Link
              to="/cart"
              className="text-lg font-medium text-white mt-2 hover:text-blue-200 "
            >
              Cart
            </Link>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options{" "}
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" />
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to=""
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to=""
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to=""
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </Link>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-4 h-screen">
        <div className="block lg:flex lg:space-x-32 ">
          <ul
            className={
              "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-10 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="mt-0 mb-3 pt-5 lg:pt-2 p-3 bg-white rounded text-Dark-blue mr-10 lg:-mr-8">
              <Link to="" className="flex gap-3">
                <img alt="" src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8">
              <Link to="" className="flex gap-3">
                <img alt="" src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8">
              <Link to="/store/products/all" className="flex gap-3">
                <img alt="" src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8">
              <Link to="" className="flex gap-3">
                <img alt="" src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8">
              <Link to="" className="flex gap-3">
                <img alt="" src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3 hover:bg-white rounded hover:text-Dark-blue lg:pt-2 lg:-mr-8">
              <Link to="/settings/general" className="flex gap-3">
                <img alt="" src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
          <div className="lg:my-10 lg:space-y-10 lg:w-4/5 lg:h-2/5">
            <div className="text-right pl-1 pr-10">
              <Mainscreen
                title={`Welcome Back ${
                  signedUpBusinessInfo && signedUpBusinessInfo.businessName
                }..`}
              >
                <button className="bg-white text-black w-40 m-4 h-12 border-2 border-black py-3 rounded hover:bg-blue-800 hover: hover:text-gray-100">
                  Explore
                </button>
              </Mainscreen>

              <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Store Overview</h2>
                  {/* <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8"> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-20"> */}
                  {/* <img alt="" src={vibe} className="w-full" /> */}
                  {/* <h4 className="text-lg font-bold my-2">Vibes Store</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-20"> */}
                  {/* <img alt="" src={alot} className="w-full" /> */}
                  {/* <h4 className="text-lg font-bold my-2">Alat Gadgets</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <button className="w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-20"> */}
                  {/* <img alt="" src={password} className="w-full" /> */}
                  {/* <h4 className="text-lg font-bold my-2">password</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <button className="w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* </div> */}
                  <Link to="/explore/stores">
                    <button className="text-base font-medium text-Dark-blue">
                      see more
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Campaign Overview</h2>
                  {/* <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8"> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-3"> */}
                  {/* <img alt="" src={vibe} className="w-full h-fit" /> */}
                  {/* <h4 className="text-lg font-bold my-2">Vibes Store</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <div className="mb-7"> */}
                  {/* <div className="flex justify-between"> */}
                  {/* <p className="font-medium text-lg">$40,000 raised</p> */}
                  {/* <p className="text-lg">$150,000</p> */}
                  {/* </div> */}
                  {/* <div className="py-2"> */}
                  {/* <div className="h-2 w-full bg-Dark-grey rounded"> */}
                  {/* <div className="h-full w-1/3 bg-Dark-blue rounded" /> */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* <p className="text-lg">1 week left</p> */}
                  {/* </div> */}
                  {/* <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-3"> */}
                  {/* <img alt="" src={alot} className="w-full" /> */}
                  {/* <h4 className="text-lg font-bold my-2">Alat Gadgets</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <div className="mb-7"> */}
                  {/* <div className="flex justify-between"> */}
                  {/* <p className="font-medium text-lg">$40,000 raised</p> */}
                  {/* <p className="text-lg">$150,000</p> */}
                  {/* </div> */}
                  {/* <div className="py-2"> */}
                  {/* <div className="h-2 w-full bg-Dark-grey rounded"> */}
                  {/* <div className="h-full w-1/3 bg-Dark-blue rounded" /> */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* <p className="text-lg">1 week left</p> */}
                  {/* </div> */}
                  {/* <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* <div className="flex flex-col"> */}
                  {/* <div className="mb-3"> */}
                  {/* <img alt="" src={password} className="w-full" /> */}
                  {/* <h4 className="text-lg font-bold my-2">password</h4> */}
                  {/* <p className="text-base leading-5"> */}
                  {/* Brewed for every occassion. Introduce vibes drinks at */}
                  {/* your event, get your guests vibing. */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* <div className="mb-7"> */}
                  {/* <div className="flex justify-between"> */}
                  {/* <p className="font-medium text-lg">$40,000 raised</p> */}
                  {/* <p className="text-lg">$150,000</p> */}
                  {/* </div> */}
                  {/* <div className="py-2"> */}
                  {/* <div className="h-2 w-full bg-Dark-grey rounded"> */}
                  {/* <div className="h-full w-1/3 bg-Dark-blue rounded" /> */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* <p className="text-lg">1 week left</p> */}
                  {/* </div> */}
                  {/* <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue"> */}
                  {/* Shop */}
                  {/* </button> */}
                  {/* </div> */}
                  {/* </div> */}
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
  );
}

export default BusinessDashboard;
