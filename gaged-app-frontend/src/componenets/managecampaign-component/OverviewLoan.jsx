/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import fundraiser from "../../images/fundraiser.png";
import facebook from "../../images/facebook.svg";
import tags from "../../images/tags.svg";
import twitter from "../../images/twitter.svg";
import whatsapp from "../../images/whatsapp.svg";

function OverviewLoan() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto">
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
            <img alt="" src={Logof} className="w-4/5 lg:w-full" />
          </div>
          <input className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5" />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-lg font-medium text-white mt-2">Cart</p>
          </div>
          <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <ul
            className={
              "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-10 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="mt-0 mb-3 pt-5 lg:pt-0 p-3">
              <a href="#" className="flex gap-3">
                <img alt="" src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </a>
            </li>
            <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:-mr-8">
              <a href="#" className="flex gap-3">
                <img alt="" src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </a>
            </li>
            <li className="my-3 p-3">
              <a href="#" className="flex gap-3">
                <img alt="" src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </a>
            </li>
            <li className="my-3 p-3">
              <a href="#" className="flex gap-3">
                <img alt="" src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </a>
            </li>
            <li className="my-3 p-3">
              <a href="#" className="flex gap-3">
                <img alt="" src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </a>
            </li>
            <li className="my-3 p-3">
              <a href="#" className="flex gap-3">
                <img alt="" src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </a>
            </li>
          </ul>
          <div className="flex flex-col bg-white lg:my-10 lg:space-y-10 lg:w-4/5 lg:h-2/5">
            <div className="px-1 md:px-2">
              <div className="flex justify-between py-5 md:px-2">
                <h2 className="text-lg md:text-2xl font-semibold">
                  Alleyway Security Fundraiser
                </h2>
                <button className="h-8 w-20 text-base font-semibold bg-magenta-blue hover:bg-Dark-blue hover:text-magenta-blue">
                  EDIT
                </button>
              </div>
              <div className="px-2">
                <div className="pb-5">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-5">
                    <div className="flex flex-col gap-3 w-full">
                      <div>
                        {/* this image is suppose to be a video, for now we dnt have a video so i made it an image for fast work */}
                        <img alt="" src={fundraiser} />
                      </div>
                      <div className="flex md:flex-row justify-between">
                        <div className="flex gap-1">
                          <img alt="" src={twitter} className="h-8 w-8" />
                          <img alt="" src={facebook} className="h-8 w-8" />
                          <img alt="" src={whatsapp} className="h-8 w-8" />
                        </div>
                        <div className="flex gap-1">
                          <img alt="" src={tags} />
                          <p className="text-base font-normal">
                            Business,Technology
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex flex-col border-2">
                        <div className="flex justify-between px-2 lg:px-10 pt-5 lg:pt-9 pb-5 lg:pb-8">
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">$700</h4>
                            <p className="text-sm font-normal">TOTAL RAISED</p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">07:13:26:40</h4>
                            <p className="text-sm font-normal">TIME LEFT</p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">5</h4>
                            <p className="text-sm font-normal">DONORS</p>
                          </div>
                        </div>
                        <div className="flex justify-between px-2 lg:px-10 py-5 lg:py-6 border-t-2">
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">Loan</h4>
                            <p className="text-sm font-normal">FUNDING TYPE</p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">$100</h4>
                            <p className="text-sm font-normal">
                              LENDERS PROFIT
                            </p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">12 MONTHS</h4>
                            <p className="text-sm font-normal">DURATION</p>
                          </div>
                        </div>
                      </div>
                      <div className="my-1">
                        <p className="text-lg font-medium mb-2">Progress</p>
                        <div className="py-2">
                          <div className="h-2 w-full bg-gray-200 rounded">
                            <div className="h-full w-1/2 bg-Dark-blue rounded" />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium text-base">55% raised</p>
                          <p className="font-medium text-base">7 days left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex gap-5 md:gap-10 border-b-2">
                    <div className="text-lg font-semibold border-b-4 border-Dark-blue px-2 py-1">
                      <h3>Overview</h3>
                    </div>
                    <div className="text-lg font-semibold px-2 py-1">
                      <h3>Comments</h3>
                    </div>
                    <div className="text-lg font-semibold px-2 py-1">
                      <h3>Lenders</h3>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="lg:px-1">
                      <div className="text-base text-gray-500 font-normal py-3 leading-6 md:w-3/4 lg:w-1/2">
                        The improved security measures at Wychurst are estimated
                        to cost £20,000. Any extra The improved security
                        measures at Wychurst are estimated to cost £20,000The
                        improved security measures at Wychurst are estimated to
                        cost £20,000.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-10 md:w-1/5">
                    <h3 className="text-xl font-medium ">Repayment</h3>
                    <div className="flex border-2 justisfy-items-center text-center items-center">
                      <div className="flex flex-col gap-4 pt-5 pb-8 px-5 border-r w-full">
                        <h4 className="text-xl font-medium">$300</h4>
                        <p className="text-base font-light">AMOUNT REPAID</p>
                      </div>
                      <div className="flex flex-col gap-4 pt-5 pb-8 px-5 border-l w-full">
                        <h4 className="text-xl font-medium">$500</h4>
                        <p className="text-base font-light">AMOUNT LEFT</p>
                      </div>
                    </div>
                    <button className="mt-8 bg-Dark-blue h-10 text-white text-base font-medium border-2 border-Dark-blue hover:bg-white hover:text-Dark-blue">
                      Pay Lenders
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

export default OverviewLoan;
