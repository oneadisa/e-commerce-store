/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import copyfile from "../../images/copy-file.png";
import eimage from "../../images/empty-image.png";

import Loader from "../../componenets/Loader";
import GeneralErrorMessage from "../../componenets/GeneralErrorMessage";
import { Link } from "react-router-dom";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createStore } from "../../actions/storeActions";

function SettingsStore() {
  // const [message, setMessage] = useState(null);
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    storeName: "",
    tagLine: "",
    description: "",
    // eslint-disable-next-line no-useless-concat
    link: "" + ".gaged.io",
    logo: "https://www.freepik.com/free-photo/blue-concrete-wall-textures-background_4202473.htm#page=1&query=blue%20background&position=3&from_view=keyword",
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
  const storeSetUp = useSelector(
    (state: RootStateOrAny) => state.storeSetUp
  );
  const { loading, error, storeInfo } = storeSetUp;

  useEffect(() => {
    if  (storeInfo) {
      navigate("/store/products/all");
    }
  }, [navigate, storeInfo]);

  const submitHandler = async (event) => {
  event.preventDefault();
    dispatch(
          createStore(
        credentials.storeName,
        credentials.tagLine,
        credentials.description,
        credentials.link,
        credentials.logo,
      )
    );


  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto">
      <head className="flex justify-between bg-medium-blue px-2 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-40 h-10">
          <div className="flex">
            <div className="text-2xl lg:hidden text-white" onClick={handleNav}>
              {open === true ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </div>
            <img src={Logof} className="w-4/5 lg:w-full" />
          </div>
          <input
            name=""
            className="w-28 md:w-56 lg:w-96 outline-none lg:pl-5"
          />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart</p>
          </div>
          <div className="w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-5 h-full">
        <div className="block lg:flex lg:space-x-36">
          <ul
            className={
              "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-12 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3 bg-white rounded text-Dark-blue mr-10 lg:mr-0">
              <Link to="/" className="flex gap-3">
                <img src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:w-4/5 mr-5">
            <div className="px-1 pt-2 md:px-3 text-base md:text-lg font-medium bg-white lg:px-12">
              <div className="flex gap-5 lg:gap-10">
                <Link
                  to=""
                  className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                >
                  General
                </Link>
                <Link
                  to=""
                  className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                >
                  Bank Information
                </Link>
                <Link
                  to=""
                  className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue"
                >
                  Store settings
                </Link>
              </div>
            </div>
             {error && (
              <GeneralErrorMessage variant="danger">{error}</GeneralErrorMessage>
                      )}
              {loading && <Loader />}
            <div className="px-3 lg:px-7 pt-5 pb-8 md:pt-5 md:pb-20 mt-4 md:mt-5 md:mb-14 bg-white">
              <h2 className="text-2xl font-semibold">
                Set up your store and start selling
              </h2>
              <div className="my-5">
                <div className="flex flex-col gap-2 md:w-2/5">
                  <label className="text-base font-medium">Store Name</label>
                  <input
                    name="storeName"
                    value={credentials.storeName}
                    onChange={handlechange}
                    placeholder="Store Name"
                    className="border-2 py-2 pl-5 pr-3 rounded outline-none"
                  />
                </div>
                <div className="flex flex-col gap-4 mt-3">
                  <div className="flex flex-col gap-2 md:w-3/5">
                    <label className="text-base font-medium">Tagline</label>
                    <input
                      name="tagLine"
                      value={credentials.tagLine}
                      onChange={handlechange}
                      placeholder="Entice your customer with Link catchy phrase"
                      className="border-2 py-2 pl-5 pr-3 rounded outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:w-3/5">
                    <label className="text-base font-medium">Description</label>
                    <textarea
                      name="description"
                      onChange={handlechange}
                      value={credentials.description}
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
                        name="link"
                        value={credentials.link}
                        onChange={handlechange}
                        placeholder="example"
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
                      <img src={copyfile} className="w-4 h-4" />
                      <p className="text-medium-blue text-xs">copy link</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-10 md:mt-5">
                  <h3 className="text-base font-medium">Store Logo</h3>
                  <div className="flex flex-col items-center text-center bg-gray-100 md:w-1/3 lg:w-1/5 p-5 mt-1">
                    <img src={eimage} className="w-20 h-20" />
                    <p className="text-base text-gray-500 font-semibold">
                      Drag image here
                    </p>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={submitHandler}
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
