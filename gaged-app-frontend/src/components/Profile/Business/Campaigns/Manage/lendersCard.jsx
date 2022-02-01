/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import fundraiser from "../../../../../images/fundraiser.png";
import facebook from "../../../../../images/facebook.svg";
import tags from "../../../../../images/tags.svg";
import twitter from "../../../../../images/twitter.svg";
import whatsapp from "../../../../../images/whatsapp.svg";
import profile from "../../../../../images/profile.svg";
import Header from "./Header";
import DashBoard from "./DashBoard";

function Lenders() {
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
                        <img alt="" src={fundraiser} />
                      </div>
                      <div className="flex md:flex-row justify-between">
                        <div className="flex gap-1">
                          <img alt="" src={twitter} className="h-8 w-8" />
                          <img alt="" src={facebook} className="h-8 w-8" />
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
                        <div className="flex justify-between px-2 lg:px-10 pt-5 lg:pt-9 pb-5 lg:pb-8">
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
                        <div className="flex justify-between px-2 lg:px-10 py-5 lg:py-6 border-t-2">
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">Loan</h4>
                            <p className="text-sm font-normal">FUNDING TYPE</p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">$100</h4>
                            <p className="text-sm font-normal">
                              LENDERS PROFIT
                            </p>
                          </div>
                          <div className="flex gap-4 lg:gap-4 flex-col text-center">
                            <h4 className="text-lg font-medium">12 MONTHS</h4>
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
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex gap-5 md:gap-10 border-b-2">
                    <div className="text-lg font-semibold px-2 py-1">
                      <h3>Overview</h3>
                    </div>
                    <div className="text-lg font-semibold px-2 py-1">
                      <h3>Comments</h3>
                    </div>
                    <div className="text-lg font-semibold  border-b-4 border-Dark-blue  px-2 py-1">
                      <h3>Lenders</h3>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                      <div className="flex flex-col">
                        <div className="flex gap-2 pb-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 py-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 py-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 py-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 py-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 py-2">
                          <img alt="" src={profile} />
                          <div className="flex flex-col mt-2">
                            <div className="flex gap-2">
                              <h3 className="text-base font-medium">
                                John Smith
                              </h3>
                              <div className="text-Dark-blue text-base font-medium">
                                amount
                              </div>
                            </div>
                            <p className="text-sm font-normal">
                              2 August, 2021 at 8:00am
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 md:w-1/2">
                        <h3 className="text-xl font-medium ">Repayment</h3>
                        <div className="flex border-2 justisfy-items-center text-center items-center">
                          <div className="flex flex-col gap-4 pt-5 pb-8 px-5 border-r w-full">
                            <h4 className="text-xl font-medium">$300</h4>
                            <p className="text-base font-light">
                              AMOUNT REPAID
                            </p>
                          </div>
                          <div className="flex flex-col gap-4 pt-5 pb-8 px-5 border-l w-full">
                            <h4 className="text-xl font-medium">$500</h4>
                            <p className="text-base font-light">AMOUNT LEFT</p>
                          </div>
                        </div>
                        <button className="mt-8 bg-Dark-blue h-10 text-white text-base font-medium border-2 border-Dark-blue hover:bg-white hover:text-Dark-blue">
                          Pay Lenders
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
    </div>
  );
}

export default Lenders;
