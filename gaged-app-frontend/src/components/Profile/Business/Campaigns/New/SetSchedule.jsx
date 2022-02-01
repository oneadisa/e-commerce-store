import React, { useState } from "react";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import left from "../../../../../images/left.svg";
import right from "../../../../../images/right.svg";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function SetSchedule() {
  const [open, setOpen] = useState(false);

  const [duration, setDuration] = useState("Campaign duration");

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
      <div className="lg:bg-magenta-blue lg:px-3">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashboardCamp />
          </div>
          <div className="lg:hidden">{open && <DashboardCamp />}</div>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">5 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Organization Details
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Demographics
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Target
                  </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Finance
                  </div>
                  <div className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Set Schedule
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Review
                  </div>
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
                    <div className="px-2 h-12 flex items-center w-11/12 border-2 border-gray-400">
                      <Menu as="div" className="w-11/12">
                        <Menu.Button className="flex w-full items-center ">
                          <div className="flex text-base font-medium text-gray-400 pl-3 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {duration}
                          </div>
                          <div className="ml-auto">
                            <ChevronDownIcon
                              className="w-6 h-6 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          </div>
                        </Menu.Button>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-40 mt-5 pt-5 pb-7 pl-6 pr-10 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div>
                              <div
                                onClick={() => setDuration("2 weeks")}
                                className="hover:text-blue-600"
                              >
                                2 weeks
                              </div>
                              <div
                                onClick={() => setDuration("3 weeks")}
                                className="hover:text-blue-600"
                              >
                                3 weeks
                              </div>
                              <div
                                onClick={() => setDuration("4 weeks")}
                                className="hover:text-blue-600"
                              >
                                4 weeks
                              </div>
                              <div
                                onClick={() => setDuration("5 weeks")}
                                className="hover:text-blue-600"
                              >
                                5 weeks
                              </div>
                              <div
                                onClick={() => setDuration("6 weeks")}
                                className="hover:text-blue-600"
                              >
                                6 weeks
                              </div>
                              <div
                                onClick={() => setDuration("7 weeks")}
                                className="hover:text-blue-600"
                              >
                                7 weeks
                              </div>
                              <div
                                onClick={() => setDuration("8 weeks")}
                                className="hover:text-blue-600"
                              >
                                8 weeks
                              </div>
                            </div>
                          </Menu>
                        </Transition>
                      </Menu>
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
