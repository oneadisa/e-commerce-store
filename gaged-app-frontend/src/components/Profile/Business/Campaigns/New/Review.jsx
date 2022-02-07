/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import video from "../../../../../images/rectangle.svg";
import right from "../../../../../images/right.svg";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import { Link } from "react-router-dom";

function Review(props) {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

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

  const fourth = (e) => {
    e.preventDefault();
    props.fourthStep();
  };

  const fifth = (e) => {
    e.preventDefault();
    props.fifthStep();
  };

  const sixth = (e) => {
    e.preventDefault();
    props.sixthStep();
  };

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
      <div className="lg:bg-magenta-blue lg:px-3">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashboardCamp />
          </div>
          <div className="lg:hidden">{open && <DashboardCamp />}</div>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-5 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">6 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={first}
                  >
                    Organization Details
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={second}
                  >
                    Demographics
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={third}
                  >
                    Target
                  </button>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={fourth}
                  >
                    Finance
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={fifth}
                  >
                    Set Schedule
                  </button>
                  <button
                    className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded"
                    onClick={sixth}
                  >
                    Review
                  </button>
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
                        <button
                          className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white"
                          onClick={first}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">2. Demographics</h2>
                      <p className="text-sm">Define your ideal audience</p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <button
                          className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white"
                          onClick={second}
                        >
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
                        <button
                          className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white"
                          onClick={third}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="py-4 pl-10 pr-6 border border-gray-400">
                      <h2 className="text-base font-medium">4. Finance</h2>
                      <p className="text-sm">Add Link bank account</p>
                      <div className="mt-5 pl-1 flex flex-col gap-6">
                        <button
                          className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white"
                          onClick={fourth}
                        >
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
                        <button
                          className="ml-1 text-base font-medium border-2 border-gray-400 w-28 h-10 hover:bg-Dark-blue hover:border-Dark-blue hover:text-white"
                          onClick={fifth}
                        >
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
                      <img
                        alt=""
                        src={props.campaignCredentials.campaignVideo}
                      />
                      <div className="flex flex-col">
                        <h4 className="text-base font-medium">
                          {props.campaignCredentials.campaignName}
                        </h4>
                        <p className="text-base mt-1 mb-3">
                          {props.campaignCredentials.investorBrief}
                        </p>
                        <div className="w-full h-1 pt-1 rounded-md bg-Dark-grey" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <button
                        className="w-full h-10 bg-Dark-blue text-base text-white font-medium border border-Dark-blue "
                        name="go_live_schedule"
                        onClick={props.handleChange}
                        value=""
                        onClick={props.createCampaignSubmitHandler}
                        type="submit"
                        disabled={props.loading ? true : false}
                      >
                        Go live
                      </button>
                      <button
                        className="w-full h-10 bg-white text-base text-gray-700 font-medium border border-gray-400 "
                        onClick={props.createCampaignSubmitHandler}
                        type="submit"
                        disabled={props.loading ? true : false}
                      >
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
