/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import left from "../../images/left.svg";
import right from "../../images/right.svg";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
// import { Link } from "react-router-dom";

function Demographics() {
<<<<<<< HEAD

  const [open, setOpen] = useState(false);

=======
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
>>>>>>> main
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
              <h2 className="text-lg font-semibold">2 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Organization Details</div>
                  <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Demographics
                  </div>
                  <div className="p-1 md:p-2">Target</div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Finance</div>
                  <div className="p-1 md:p-2">Set Schedule</div>
                  <div className="p-1 md:p-2">Review</div>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">
                  Tell us Link bit about your customers
                </h2>
                <div className="py-5 mt-3 border-t-2 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                  <h3 className="text-lg font-semibold">
                    Who are your ideal target audience?
                  </h3>
                  <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Children (0-11)</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Youths (12-25)</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Older (60+)</div>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                  <h3 className="text-lg font-semibold">
                    Health issues or disabilities
                  </h3>
                  <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">
                        Physical disabilities
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">
                        Addiction issues
                      </div>
                    </div>
                    <div className="flex gap-2 items-center w-full">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">
                        Cognitive or learning disabilities
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                  <h3 className="text-lg font-semibold">Gender</h3>
                  <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Male</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Female</div>
                    </div>
                    <div className="flex gap-2 items-center w-full">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Gender Neutral</div>
                    </div>
                    <div className="flex gap-2 items-center w-full">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Non-binary</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10 md:w-3/4 lg:w-3/5">
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

export default Demographics;
