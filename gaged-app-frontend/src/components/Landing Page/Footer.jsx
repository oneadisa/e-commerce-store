/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logof from "../../images/Gaged-images/Gaged-White.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-20 pb-10 md:py-10 bg-Dark-blue">
      <Link to="/">
        <img src={Logof} />
      </Link>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between my-14">
        <div className="flex flex-col gap-6 justify-between">
          <p className="text-white text-base font-medium">
            Join our email newsletter to recieve tips on how to get more out of
            Gaged.
          </p>
          <form className="flex">
            <input
              placeholder="Your email address"
              className="border border-white flex-1 bg-Dark-blue pl-6 md:pl-12 text-white outline-none focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-white px-10 py-1 text-xl font-medium hover:bg-red-200 hover:text-Dark-blue">
              Join
            </button>
          </form>
        </div>
        <div className="flex text-white justify-between md:gap-5 lg:gap-8">
          <div className="flex flex-col">
            <h5 className="font-semibold text-lg mb-2">FEATURES</h5>
            <ul className="flex flex-col gap-1 text-base font-light">
              <Link to="/" className="text-white hover:text-red-200">
                Raise funds
              </Link>
              <Link to="/" className="text-white hover:text-red-200">
                Digital store
              </Link>
              <Link to="/" className="text-white hover:text-red-200">
                Explore
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold text-lg mb-2">ABOUT</h5>
            <ul className="flex flex-col gap-1 text-base font-light">
              <Link to="/" className="text-white hover:text-red-200">
                About us
              </Link>
              <Link to="/login" className="text-white hover:text-red-200">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:text-red-200">
                Sign up
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold text-lg mb-2">HELP</h5>
            <ul className="flex flex-col gap-1 text-base font-light">
              <Link to="/" className="text-white hover:text-red-200">
                Contact us
              </Link>
              <Link to="/" className="text-white hover:text-red-200">
                FAQ
              </Link>
              <Link to="/" className="text-white hover:text-red-200">
                Resources
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
