import React, { useState } from "react";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import down from "../../images/down.svg";
import left from "../../images/left.svg";
import right from "../../images/right.svg";
import { Link } from "react-router-dom";

function SetSchedule() {

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto">
      <Header 
        handleNav = {() => setOpen(!open)}
        button = {open ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
      />
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <div className='hidden lg:block'>
            <DashboardCamp />
          </div>
          <div className='lg:hidden'>
            {open && <DashboardCamp />}
          </div>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">5 of 6</h2>
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
                <h2 className="text-lg font-semibold">Set your timeline</h2>
                <div className="mt-3 border-t-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="py-5 flex flex-col gap-8">
                    <p className="text-sm font-medium text-gray-500 w-5/6">
                      The ship is just ready to sail, but first you need to set
                      the duration of your fundraising campaign.
                    </p>
                    <div className="px-2 flex justify-between items-center h-12 w-11/12 border-2 border-gray-400">
                      <p className="text-base font-medium text-gray-400 pl-3">
                        Campaign duration
                      </p>
                      <img alt="" src={down} />
                    </div>
                    <div className="flex gap-3 items-center w-11/12">
                      <div className="h-px w-full bg-gray-300" />
                      <div className="text-lg font-semibold text-gray-500">
                        OR
                      </div>
                      <div className="h-px w-full bg-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">
                      Set Link schedule to go live
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
                      You can schedule your project to go live automatically at
                      Link set date and time. You can cancel or change this
                      anytime before the project goes live.
                    </p>
                    <button className="mt-5 mb-9 text-base font-medium w-48 h-10 border border-Dark-blue hover:bg-medium-blue hover:text-white">
                      Set schedule
                    </button>
                  </div>
                </div>
                <div className="mt-14 flex justify-between md:w-3/4 lg:w-4/6">
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

export default SetSchedule;
