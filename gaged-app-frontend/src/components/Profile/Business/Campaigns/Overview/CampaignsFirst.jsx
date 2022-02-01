import React from "react";
import fundraiser from "../../../../../images/fundraiser.png";
import facebook from "../../../../../images/facebook.svg";
import tags from "../../../../../images/tags.svg";
import twitter from "../../../../../images/twitter.svg";
import whatsapp from "../../../../../images/whatsapp.svg";
import left from "../../../../../images/left.svg";
import Header0 from "./Header0";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getCampaignDetails,
  newBusinessReview,
} from "../../../../../actions/productAction";

function CampaignsFirst() {
  return (
    <div className="mx-auto">
      <Header0 />
      <div className="pt-3 pb-5 px-1 md:px-2">
        <h2 className="px-5 pt-2 text-2xl font-semibold text-center md:text-left">
          Alleyway Security Fundraiser
        </h2>
        <div className="px-2">
          <div className="mt-8 mb-5">
            <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8">
              <div className="flex flex-col gap-5 w-full">
                <div>
                  {/* this image is suppose to be a video, for now we dnt have a video so i made it an image for fast work */}
                  <iframe
                    src={fundraiser}
                    width="100px"
                    height="100px"
                  ></iframe>
                </div>
                <div className="flex md:flex-row md:gap-0 justify-between px-0 lg:px-5">
                  <div className="flex gap-1">
                    <img src={twitter} className="h-8 w-8" alt="" />
                    <img src={facebook} className="h-8 w-8" alt="" />
                    <img src={whatsapp} className="h-8 w-8" alt="" />
                  </div>
                  <div className="flex gap-1">
                    <img src={tags} alt="" />
                    <p className="text-base font-normal">Business,Technology</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-col border-2">
                  <div className="flex justify-between px-2 lg:px-14 pt-5 lg:pt-12 pb-5 lg:pb-9">
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">$700</h4>
                      <p className="text-sm font-normal">TOTAL RAISED</p>
                    </div>
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">07:13:26:40</h4>
                      <p className="text-sm font-normal">TIME LEFT</p>
                    </div>
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">5</h4>
                      <p className="text-sm font-normal">INVESTORS</p>
                    </div>
                  </div>
                  <div className="flex justify-between border-t px-2 lg:px-14 py-5 pb-5 lg:py-9">
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">Loan</h4>
                      <p className="text-sm font-normal">FUNDING TYPE</p>
                    </div>
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">$100</h4>
                      <p className="text-sm font-normal">
                        LENDERS
                        <br />
                        PROFIT
                      </p>
                    </div>
                    <div className="flex gap-4 lg:gap-8 flex-col text-center">
                      <h4 className="text-base font-medium">12 MONTHS</h4>
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
                <div className="flex justify-between mt-6 md:mt-4">
                  <button className="border-2 border-Dark-blue text-Dark-blue font-medium bg-white w-36 lg:w-44 py-2 rounded hover:bg-Dark-blue hover:text-white">
                    View Pitchdeck
                  </button>
                  <button className="border-2 border-Dark-blue text-white font-medium bg-Dark-blue w-36 lg:w-44 py-2 rounded hover:bg-white hover:text-Dark-blue">
                    Lend
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5 px-0 md:px-2 lg:px-4">
            <div className="flex gap-5 md:gap-10 border-b">
              <div className="text-lg font-semibold border-b-4 border-Dark-blue px-2 py-1">
                <h3>Overview</h3>
              </div>
              <div className="text-lg font-semibold px-2 py-1">
                <h3>History</h3>
              </div>
            </div>
            <div className="pt-4">
              <div className="lg:px-1">
                <div className="text-base text-gray-500 font-normal py-3 leading-6 md:w-3/4 lg:w-1/2">
                  The improved security measures at Wychurst are estimated to
                  cost £20,000. Any extra The improved security measures at
                  Wychurst are estimated to cost £20,000. The improved security
                  measures at Wychurst are estimated to cost £20,000.
                </div>
                <div className="flex flex-col gap-4 mt-16 md:w-2/3 lg:w-5/12 ">
                  <label className="text-base text-gray-600 font-medium">
                    Share your thoughts about this campaign.
                  </label>
                  <textarea
                    placeholder="This is an amazing business"
                    className="border-2 border-gray-400 py-3 px-4 rounded-xl h-36 md:h-48 placeholder-gray-600 outline-none"
                  />
                  <div className="flex justify-between my-12 text-center">
                    <button
                      className="py-2 border-2 border-Dark-blue text-Dark-blue text-base font-medium rounded
                                         w-1/3 lg:w-1/4 hover:bg-Dark-blue hover:text-white flex gap-3 md:gap-6"
                    >
                      <img src={left} alt="" />
                      <div>Back</div>
                    </button>
                    <button className="py-2 border-2 border-Dark-blue bg-Dark-blue text-white text-base font-medium rounded w-1/3 lg:w-1/4 hover:bg-white hover:text-Dark-blue">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video width="320" height="240" autoplay>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default CampaignsFirst;
