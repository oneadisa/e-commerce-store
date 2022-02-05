/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import left from "../../../../../images/left.svg";
import right from "../../../../../images/right.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Target(props) {
  const forward = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState("Select a Duration");
  const [schedule, setSchedule] = useState("Select a Payment Plan");
  const [payBack, setPayBack] = useState(1000);

  const handlePayBackChange = (e) => {
    const value = (e.value / 100 + 1) * 1000;
    setPayBack(value);
  };

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
              <h2 className="text-lg font-semibold">3 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Organization Details
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Demographics
                  </div>
                  <div className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Target
                  </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Finance
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Set Schedule
                  </div>
                  <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                    Review
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">
                  What type of funding are you looking for?
                </h2>
                <div className="mt-3 border-t-2 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="pt-5 pb-7 flex flex-col gap-5 md:flex-row justify-between">
                    <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 ">
                      <label class="cursor-pointer label">
                        <input
                          type="radio"
                          name="fundingType"
                          checked="checked"
                          class="radio"
                          value="Loan"
                          onChange={props.handleChange}
                        />
                        <span class="label-text">
                          <div className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-Dark-blue border-2 border-Dark-blue">
                            <div className="text-white font-medium text-lg ml-auto pl-6">
                              Loan
                            </div>
                            <div className="bg-white h-4 w-4 text-center text-Dark-blue text-xs font-medium rounded-full ml-auto">
                              ?
                            </div>
                          </div>
                        </span>
                      </label>
                    </div>
                    <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 ">
                      <label class="cursor-pointer label">
                        <input
                          type="radio"
                          name="fundingType"
                          checked="checked"
                          class="radio"
                          value="Equity"
                          onChange={props.handleChange}
                          disabled="disabled"
                        />
                        <span class="label-text">
                          <button className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-white border-2 border-gray-400 disabled">
                            <div className="text-gray-500 font-medium text-lg ml-auto pl-6">
                              Equity
                            </div>
                            <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                              ?
                            </div>
                          </button>
                        </span>
                      </label>
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
                    <div className="flex flex-col gap-6 card p-6">
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $0 – $999
                              </div>
                              <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                                ?
                              </div>
                            </span>
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={props.handleChange}
                              value="$0 – $999"
                            />
                          </label>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $1000 – $9,999
                              </div>
                              <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                                ?
                              </div>
                            </span>
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={props.handleChange}
                              value="$1000 – $9,999"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $10,000 – $99,999
                              </div>
                              <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                                ?
                              </div>
                            </span>
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={props.handleChange}
                              value="$10,000 – $99,999"
                            />
                          </label>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                {">"} $100,000
                              </div>
                              <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                                ?
                              </div>
                            </span>
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={props.handleChange}
                              value="> $100,000"
                            />
                          </label>
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
                      <input
                        className="border-2 border-gray-400 w-56 h-10 outline-none"
                        name="amountBeingRaised"
                        onChange={props.handleChange}
                        value={props.campaignCredentials.amountBeingRaised}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">
                      Pledge profit to Lenders
                    </h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please indicate the share of your capital raised Lenders
                        will get in addition when repaying.
                      </p>
                      <input
                        className="border-2 border-gray-400 w-56 h-10 outline-none"
                        name="pledged_profit_to_lenders"
                        value={
                          props.campaignCredentials.pledged_profit_to_lenders
                        }
                        onChange={props.handleChange}
                        onChange={handlePayBackChange}
                      />
                      <br />
                      <p>
                        If you raise $1000, you will have to pay ${payBack} back
                        to your Lenders.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please select the period that is appropriate to your
                        needs
                      </p>
                      <div className="px-2 bg-gray-200 w-64 h-10 flex items-center">
                        <Menu as="div" className="">
                          <Menu.Button className="flex w-64 items-center px-2">
                            <div className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                              {duration}
                            </div>
                            <div className="ml-auto mr-2">
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
                            <Menu className="absolute cursor-pointer flex flex-col gap-3 w-40 mt-3 py-4 pl-6 pr-10 text-sm font-medium bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div>
                                <div
                                  name="duration_pledged_profit"
                                  value="12"
                                  onClick={
                                    (() => setDuration("12 months"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  12 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="18"
                                  onClick={
                                    (() => setDuration("18 months"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  18 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="24"
                                  onClick={
                                    (() => setDuration("24 months"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  24 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="30"
                                  onClick={
                                    (() => setDuration("30 months"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  30 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="36"
                                  onClick={
                                    (() => setDuration("36 months"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  36 months
                                </div>
                              </div>
                            </Menu>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">
                      Repayment schedule
                    </h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please select Link repayment schedule
                      </p>
                      <div className="px-2 bg-gray-200 w-64 h-10 flex items-center">
                        <Menu as="div" className="">
                          <Menu.Button className="flex w-64 items-center px-2">
                            <div className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                              {schedule}
                            </div>
                            <div className="ml-auto mr-2">
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
                            <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-40 mt-3 pt-3 pb-7 pl-6 pr-10 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="1"
                                  onClick={
                                    (() => setSchedule("Monthly"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  Monthly
                                </div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="2"
                                  onClick={
                                    (() => setSchedule("Bi-monthly"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  Bi-monthly
                                </div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="3"
                                  onClick={
                                    (() => setSchedule("Quarterly"),
                                    props.handleChange)
                                  }
                                  className="hover:text-blue-600"
                                >
                                  Quarterly
                                </div>
                              </div>
                            </Menu>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10 md:w-3/4 lg:w-4/6">
                  <button
                    className="flex gap-5 items-center text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white"
                    onClick={back}
                  >
                    <img alt="" src={left} />
                    <div>Back</div>
                  </button>

                  <button
                    className="flex gap-5 items-center text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500"
                    onClick={forward}
                  >
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

export default Target;
