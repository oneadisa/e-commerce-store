import React, { useState } from "react";
import left from "../../images/left.svg";
import right from "../../images/right.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";

function Finance() {

  return (
    <div className="mx-auto">
      <Header />
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <DashboardCamp />
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">4 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Organization Details</div>
                  <div className="p-1 md:p-2">Demographics</div>
                  <div className="p-1 md:p-2">Target</div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Finance
                  </div>
                  <div className="p-1 md:p-2">Set Schedule</div>
                  <div className="p-1 md:p-2">Review</div>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">Add your bank details</h2>
                <div className="mt-3 border-t-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="py-4 text-base">
                    <div className="md:w-11/12 lg:w-5/6 leading-5">
                      You need Link valid bank account to set up your campaign.
                      This should be registered with your duly registered
                      business name.
                    </div>
                    <div className="md:w-11/12 lg:w-5/6 leading-5 mt-6">
                      While for unregistered business, the account should be
                      registered in the promoter’s name
                    </div>
                    <div className="leading-5 mt-1">
                      You may be required to verify your account before you are
                      enabled to initiate withdrawals. This verification will be
                      done as soon as Link bank account account is added.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="my-5 flex flex-col gap-7 md:w-3/5 lg:w-1/2">
                    <input
                      className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Select Bank"
                    />
                    <input
                      className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Account Name"
                    />
                    <input
                      className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Account Number"
                    />
                  </div>
                  <div className="flex justify-between mt-14 md:w-3/5 lg:w-1/2">
                    <button className="text-base text-gray-500 font-medium bg-white border-2 border-gray-400 h-10 w-32 hover:bg-Dark-blue hover:text-white hover:border-Dark-blue">
                      Clear
                    </button>
                    <button className="text-base font-medium bg-Dark-blue border-2 border-Dark-blue text-white h-10 w-32 hover:bg-white hover:text-gray-500 hover:border-gray-400">
                      Save
                    </button>
                  </div>
                  <div className="my-12 flex gap-2 lg:w-3/5">
                    <input
                      type="checkbox"
                      className="h-7 w-7 border-2 border-gray-400"
                    />
                    <div className="text-sm">
                      I have read and agreed to the
                      <span className="text-medium-blue">
                        {" "}
                        Terms and conditions{" "}
                      </span>
                      of Gaged.io’s payments provider.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between md:w-8/12 lg:w-7/12">
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

export default Finance;
