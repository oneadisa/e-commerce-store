/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import fundraiser from "../../images/fundraiser.png";
import facebook from "../../images/facebook.svg";
import tags from "../../images/tags.svg";
import twitter from "../../images/twitter.svg";
import whatsapp from "../../images/whatsapp.svg";
import left from "../../images/left.svg";
import Header0 from "./Header0";

function CampaignsThird() {
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
                  <img alt="" src={fundraiser} alt="" />
                </div>
                <div className="flex md:flex-row md:gap-0 justify-between px-0 lg:px-5">
                  <div className="flex gap-1">
                    <img alt="" src={twitter} className="h-8 w-8" alt="" />
                    <img alt="" src={facebook} className="h-8 w-8" alt="" />
                    <img alt="" src={whatsapp} className="h-8 w-8" />
                  </div>
                  <div className="flex gap-1">
                    <img alt="" src={tags} />
                    <p className="text-base font-normal">Business,Technology</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-col border-2">
                  <div className="flex justify-between px-2 lg:px-14 pt-5 lg:pt-14 pb-5 lg:pb-9">
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
              <div className="text-lg font-semibold px-2 py-1">
                <h3>Overview</h3>
              </div>
              <div className="text-lg font-semibold border-b-4 border-Dark-blue px-2 py-1">
                <h3>History</h3>
              </div>
            </div>
            <div className="mt-6 lg:px-1">
              <div className="flex flex-col text-base font-medium">
                <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
                  <div>01/02/2022</div>
                  <div>You lent $50 to this Alleyway Security campaign</div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
                  <div>01/02/2022</div>
                  <div>You lent $50 to this Alleyway Security campaign</div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
                  <div>01/02/2022</div>
                  <div>Alleyway security paid you $25</div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
                  <div>01/02/2022</div>
                  <div>Alleyway security paid you $25</div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
                  <div>01/02/2022</div>
                  <div>Alleyway security paid you $10</div>
                </div>
              </div>
              <div className="my-12">
                <button
                  className="py-2 border-2 border-Dark-blue text-Dark-blue text-base
                                    font-medium rounded hover:bg-Dark-blue hover:text-white flex "
                >
                  <img alt="" src={left} />
                  <div className="px-5">Back</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignsThird;
