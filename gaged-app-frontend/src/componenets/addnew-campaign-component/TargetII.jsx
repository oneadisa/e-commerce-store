import React, { useState } from "react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import left from "../../images/left.svg";
import right from "../../images/right.svg";
import { Link } from "react-router-dom";

function TargetII() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto">
      <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-4 py-2">
        <div className="flex space-x-5 lg:space-x-36 h-10">
          <div className="flex">
            <div className="text-2xl lg:hidden text-white" onClick={handleNav}>
              {open === true ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </div>
            <img alt="" src={Logof} className="w-4/5 lg:w-full" />
          </div>
          <input className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5" />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart</p>
          </div>
          <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <ul
            className={
              "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-semibold lg:mt-14 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="mt-0 mb-3 pt-5 lg:pt-0 p-3">
              <Link to="/" className="flex gap-3">
                <img alt="" src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:-mr-10">
              <Link to="/" className="flex gap-3">
                <img alt="" src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img alt="" src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img alt="" src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img alt="" src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img alt="" src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">3 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Organization Details</div>
                  <div className="p-1 md:p-2">Demographics</div>
                  <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Target
                  </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Finance</div>
                  <div className="p-1 md:p-2">Set Schedule</div>
                  <div className="p-1 md:p-2">Review</div>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">
                  What type of funding are you looking for?
                </h2>
                <div className="mt-3 border-t-2 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="pt-5 pb-7 flex flex-col gap-5 md:flex-row justify-between">
                    <div className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-white border-2 border-gray-400">
                      <div className="text-gray-500 font-medium text-lg ml-auto pl-6">
                        Loan
                      </div>
                      <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                        ?
                      </div>
                    </div>
                    <div className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-Dark-blue border-2 border-Dark-blue">
                      <div className="text-white font-medium text-lg ml-auto pl-6">
                        Equity
                      </div>
                      <div className="bg-white h-4 w-4 text-center text-Dark-blue text-xs font-medium rounded-full ml-auto">
                        ?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pb-10 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <h3 className="text-lg font-semibold">Category</h3>
                  <div className="pl-1 mt-2 flex flex-col gap-8 ">
                    <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                      Please click the question mark icon associated with each
                      category to know the requirements.
                    </p>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12">
                          <div className="h-6 w-6 bg-gray-400 border-2 border-gray-400 rounded-full p-1">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <div className="text-base text-gray-600 font-medium">
                            $0 – $999
                          </div>
                          <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                            ?
                          </div>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12">
                          <div className="h-6 w-6 bg-gray-400 border-2 border-gray-400 rounded-full p-1">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <div className="text-base text-gray-600 font-medium">
                            $1,000 – $9,999
                          </div>
                          <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                            ?
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12">
                          <div className="h-6 w-6 bg-gray-400 border-2 border-gray-400 rounded-full p-1">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <div className="text-base text-gray-600 font-medium">
                            $10,000 - $99,999
                          </div>
                          <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                            ?
                          </div>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12">
                          <div className="h-6 w-6 bg-gray-400 border-2 border-gray-400 rounded-full p-1">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <div className="text-base text-gray-600 font-medium">
                            {">"} $100,000
                          </div>
                          <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-2 pb-10 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">Amount</h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please indicate the specific amount being raised
                      </p>
                      <input className="border-2 border-gray-400 w-56 h-10 outline-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">Equity offering</h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please indicate the ownership percentage you are
                        offering investors
                      </p>
                      <input className="border-2 border-gray-400 w-56 h-10 outline-none" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10 md:w-3/4 lg:w-4/6">
                  <button className="flex gap-5 items-center text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white">
                    <img alt="" src={left} />
                    <div>Back</div>
                  </button>

                  <button className="flex gap-5 items-center text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500">
                    <div className="ml-auto pl-7">Next</div>
                    <img alt="" src={right} className="ml-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetII;
