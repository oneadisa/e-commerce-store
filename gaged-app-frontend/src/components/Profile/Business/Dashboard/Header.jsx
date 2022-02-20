import React, { useState } from "react";
import Logof from "https://www.linkpicture.com/q/Gaged-Blue.svg";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
// import { logout } from "../../../../actions/businessActions";
import { useSelector } from "react-redux";
// import {useAlert} from "react-alert"

function Header(props) {
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  // const alert = useAlert();

  const [keyword, setKeyword] = useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/campaigns/${keyword}`);
    } else {
      navigate("/campaigns");
    }
  };
  // function logoutUser() {
  // dispatch(logout());
  // alert.success("Logout Successfully");
  // }
  //
  // const signedUpBusinessLogin = useSelector(
  // (state) => state.signedUpBusinessLogin
  // );
  // const { signedUpBusinessInfo } = signedUpBusinessLogin;

  // const logoutHandler = () => {
  // dispatch(logout());
  // navigate("/");
  // };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
      <div className="flex space-x-5 lg:space-x-36 h-10">
        <div className="flex">
          <div
            className="text-2xl lg:hidden text-white"
            onClick={() => props.handleNav()}
          >
            {props.button}
          </div>
          <Link to="/">
            <img alt="" src={Logof} className="w-4/5 lg:w-full" />
          </Link>
        </div>
        <form onSubmit={searchSubmitHandler}>
          <input
            onChange={(e) => setKeyword(e.target.value)}
            type="submit"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
        <div>
          <li className="font-Poppins block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <Link to="/cart" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span
                className={
                  cartItems.length > 0
                    ? "absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
                    : ""
                }
              >
                {cartItems.length}
              </span>
            </Link>
          </li>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="user"
              />
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                        onClick={() => {
                          localStorage.removeItem("signedUpBusinessInfo");
                          navigate("/");
                        }}
                      >
                        Log out
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
  );
}

export default Header;
