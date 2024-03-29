/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import fundraiser from "../../../../../images/fundraiser.png";
import faceBook from "../../../../../images/faceBook.svg";
import tags from "../../../../../images/tags.svg";
import twitter from "../../../../../images/twitter.svg";
import whatsapp from "../../../../../images/whatsapp.svg";
import Header from "./Header";
import DashBoard from "./DashBoard";

function OverviewEquity() {
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
      <div className="lg:bg-magenta-blue lg:px-4">
        <div className="block lg:flex lg:space-x-32">
          <div className="hidden lg:block">
            <DashBoard />
          </div>
          <div className="lg:hidden">{open && <DashBoard />}</div>
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
                        <iframe
                          src="example.mp4"
                          width="100px"
                          height="100px"
                        ></iframe>
                      </div>
                      <div className="flex md:flex-row justify-between">
                        <div className="flex gap-1">
                          <img alt="" src={twitter} className="h-8 w-8" />
                          <img alt="" src={faceBook} className="h-8 w-8" />
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
                        <div className="flex justify-between px-2 lg:px-10 pt-5 lg:pt-7 pb-5 lg:pb-8">
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
                        <div className="flex border-t-2 justisfy-items-center text-center items-center">
                          <div className="flex flex-col gap-4 lg:gap-4 py-4 pb-4 lg:py-9 border-r w-full">
                            <h4 className="text-lg font-medium">18%</h4>
                            <p className="text-sm font-normal">EQUITY</p>
                          </div>
                          <div className="flex flex-col gap-4 lg:gap-4 py-4 pb-4 lg:py-9 w-full">
                            <h4 className="text-lg font-medium">Equity</h4>
                            <p className="text-sm font-normal">FUNDING TYPE</p>
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
                      <h3>Investors</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewEquity;
