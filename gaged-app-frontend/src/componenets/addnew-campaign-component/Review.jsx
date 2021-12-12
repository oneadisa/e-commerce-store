import React, { useState } from "react";
import video from "../../images/embeddedvideo.svg";
import right from "../../images/right.svg";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import { Link } from "react-router-dom";

function Review() {

  return (
    <div className="mx-auto">
      <Header />
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <DashboardCamp />
          <div className="bg-white lg:mt-3 lg:mb-8 pb-5 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">6 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Organization Details</div>
                  <div className="p-1 md:p-2">Demographics</div>
                  <div className="p-1 md:p-2">Target</div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Finance</div>
                  <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Set Schedule
                  </div>
                  <div className="p-1 md:p-2">Review</div>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">
                  Let’s review your campaign
                </h2>
                <div className="mt-4 flex flex-col-reverse md:flex-row gap-16 md:gap-3 lg:gap-5">
                  <div className="flex flex-col gap-4 md:w-3/5">
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">
                        1. Organization Details
                      </h2>
                      <p className="text-sm">
                        Provide an overview of your organization
                      </p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <div className="w-full h-1 bg-Dark-grey rounded-full">
                          <div className="w-2/6 h-full bg-green-500 rounded-full" />
                        </div>
                        <button className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">2. Demographics</h2>
                      <p className="text-sm">Define your ideal audience</p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <div className="w-full h-1 bg-Dark-grey rounded-full">
                          <div className="w-5/6 h-full bg-green-500 rounded-full" />
                        </div>
                        <button className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">3. Target</h2>
                      <p className="text-sm">
                        Specify how much you want to raise
                      </p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <div className="w-full h-1 bg-Dark-grey rounded-full">
                          <div className="w-2/3 h-full bg-green-500 rounded-full" />
                        </div>
                        <button className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">4. Finance</h2>
                      <p className="text-sm">Add Link bank account</p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <div className="w-full h-1 bg-Dark-grey rounded-full">
                          <div className="w-2/5 h-full bg-green-500 rounded-full" />
                        </div>
                        <button className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">5. Set schedule</h2>
                      <p className="text-sm">
                        Save your campaign to publish later
                      </p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <div className="w-full h-1 bg-Dark-grey rounded-full">
                          <div className="w-full h-full bg-green-500 rounded-full" />
                        </div>
                        <button className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="mt-24 md:mt-44 pt-20 border-t border-gray-400">
                      <button className="ml-auto flex gap-5 items-center text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500">
                        <div className="ml-auto pl-7">Go live</div>
                        <img alt="" src={right} className="ml-auto" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 md:w-2/5">
                    <div className="border border-gray-400 p-2 pb-8 flex flex-col gap-3">
                      <img alt="" src={video} />
                      <div className="flex flex-col">
                        <h4 className="text-base font-medium">Title</h4>
                        <p className="text-base mt-1 mb-3">
                          It is Link long established fact that Link reader will
                          be distracted by the readable content of Link page
                          when looking at its layout.
                        </p>
                        <div className="w-full h-1 pt-1 rounded-md bg-Dark-grey" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <button className="w-full h-10 bg-Dark-blue text-base text-white font-medium border border-Dark-blue ">
                        Go live
                      </button>
                      <button className="w-full h-10 bg-white text-base text-gray-700 font-medium border border-gray-400 ">
                        Go live with schedule
                      </button>
                    </div>
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

export default Review;
