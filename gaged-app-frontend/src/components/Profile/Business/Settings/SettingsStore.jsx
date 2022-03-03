/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import copyfile from "../../../../images/copy-file.png";
import eimage from "../../../../images/empty-image.png";

import Loader from "../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SettingsStore(props) {
  const first = (e) => {
    e.preventDefault();
    props.firstStep();
  };
  const second = (e) => {
    e.preventDefault();
    props.secondStep();
  };
  const third = (e) => {
    e.preventDefault();
    props.thirdStep();
  };

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto">
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
      <div className="lg:bg-magenta-blue lg:px-2 h-full">
        <div className="block lg:flex lg:space-x-32">
          <div className="hidden lg:block">
            <DashBoard />
          </div>
          <div className="lg:hidden">{open && <DashBoard />}</div>
          <div className="flex flex-col lg:w-4/5 mr-5">
            <div className="px-1 pt-2 md:px-3 text-base md:text-lg font-medium bg-white lg:px-12">
              <div className="flex gap-5 lg:gap-10">
                <button
                  to=""
                  className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                  onClick={first}
                >
                  General
                </button>
                <button
                  to=""
                  className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                  onClick={second}
                >
                  Bank Information
                </button>
                <button
                  to=""
                  className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue"
                  onClick={third}
                >
                  Store settings
                </button>
              </div>
            </div>
            <div className="px-3 lg:px-7 pt-5 pb-8 md:pt-5 md:pb-20 mt-4 md:mt-5 md:mb-14 bg-white">
              <h2 className="text-2xl font-semibold">
                Set up your store and start selling
              </h2>
              <div className="my-5">
                <div className="flex flex-col gap-2 md:w-2/5">
                  <label className="text-base font-medium">Store Name</label>
                  <input
                    name="storeName"
                    value={props.storeName}
                    onChange={(e) => props.setStoreName(e.target.value)}
                    placeholder="Store Name"
                    className="border-2 py-2 pl-5 pr-3 rounded outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 md:w-2/5">
                  <label className="text-base font-medium">
                    Delivery Charge{" "}
                  </label>
                  <input
                    name="shippingCost"
                    value={props.shippingCost}
                    onChange={(e) => props.setshippingCost(e.target.value)}
                    placeholder="Delivery Charge"
                    className="border-2 py-2 pl-5 pr-3 rounded outline-none"
                  />
                </div>
                <div className="flex flex-col gap-4 mt-3">
                  <div className="flex flex-col gap-2 md:w-3/5">
                    <label className="text-base font-medium">Tagline</label>
                    <input
                      name="storetagline"
                      value={props.tagLine}
                      onChange={(e) => props.setstoretagline(e.target.value)}
                      placeholder="Entice your customer with Link catchy phrase"
                      className="border-2 py-2 pl-5 pr-3 rounded outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:w-3/5">
                    <label className="text-base font-medium">Description</label>
                    <textarea
                      name="storeDescription"
                      onChange={(e) =>
                        props.setstoreDescription(e.target.value)
                      }
                      value={props.storeDescription}
                      placeholder="Differentiate your business from others, let your customers understand your value proposition."
                      className="border-2 py-2 pl-5 pr-3 rounded outline-none h-36 md:h-44"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="text-base font-medium">
                    Create Link unique link
                  </label>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col md:flex-row md:w-3/5">
                      <input
                        id="p1"
                        name="storeLink"
                        value={`${props.storeLink}.gaged.io`}
                        onChange={(e) => props.storeLink(e)}
                        placeholder={props.storeLink}
                        className="border-2 border-b md:border-b-2 md:border-r rounded rounded-b-none md:rounded-b md:rounded-r-none py-2 pl-5 pr-3 md:w-3/5"
                      />
                      <div
                        name=""
                        placeholder=".gaged.io"
                        value=".gaged.io"
                        className="border-2 border-t md:border-t-2 md:border-l text-center rounded rounded-t-none md:rounded-t md:rounded-l-none py-2 md:w-3/5"
                      />
                    </div>
                    <div className="flex mt-3 md:mt-7 md:ml-1">
                      <img
                        src={copyfile}
                        className="w-4 h-4"
                        onclick={copyToClipboard("#p1")}
                      />
                      <p className="text-medium-blue text-xs">copy link</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-10 md:mt-5">
                  <h3 className="text-base font-medium">Store Logo</h3>
                  <div className="flex flex-col items-center text-center bg-gray-100 md:w-1/3 lg:w-1/5 p-5 mt-1">
                    <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                      <label className="text-base font-normal text-gray-700 mt-3">
                        <img src={props.storeLogo} className="w-20 h-20" />
                      </label>
                      <div>
                        <input
                          onChange={(e) => props.postLogoPic(e.target.files[0])}
                          type="file"
                          name="file"
                          multiple
                          className="sr-only"
                        />
                      </div>
                      <div className="text-base font-normal text-gray-700 mt-3">
                        <p className="text-base text-gray-500 font-semibold">
                          Drag image here
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={props.updateProfileSubmitHandler}
                      className="bg-Dark-blue text-white text-base font-semibold w-full md:w-1/3 lg:w-1/5 px-5 py-2 border-2 rounded-md hover:bg-white hover:text-Dark-blue"
                    >
                      Publish Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsStore;
