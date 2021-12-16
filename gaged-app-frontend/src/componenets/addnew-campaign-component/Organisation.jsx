import React, { useState } from "react";
import down from "../../images/down.svg";
import file from "../../images/file.png";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
// import { Link } from "react-router-dom";
// import { Dropdown } from 'semantic-ui-react'

function Organisation() {

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
              <h2 className="text-lg font-semibold">1 of 6</h2>
              <div className="flex flex-col md:flex-row md:gap-4 my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
                    Organization Details
                  </div>
                  <div className="p-1 md:p-2">Demographics</div>
                  <div className="p-1 md:p-2">Target</div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="p-1 md:p-2">Finance</div>
                  <div className="p-1 md:p-2">Set Schedule</div>
                  <div className="p-1 md:p-2">Review</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="pb-7 border-b-2 border-gray-400 w-11/12">
                  <h3 className="text-lg font-semibold">Business name</h3>
                  <p className="text-sm text-gray-600">
                    Ensure to provide your registered business name
                  </p>
                  <div className="md:w-8/12 lg:w-52.5/100">
                    <input
                      className="mt-5 h-12 w-full pl-3 border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Registered name"
                    />
                    <div className="mt-3">
                      <h2 className="text-lg font-semibold">
                        Select nature of business
                      </h2>
                      <div className="flex flex-col gap-3 mt-3 md:mt-3">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-7">
                          <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60">
                            <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                              <div className="h-full w-full bg-gray-800 rounded-full" />
                            </div>
                            <h4 className="text-xs font-normal">
                              Limited Liability Company
                            </h4>
                          </div>
                          <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60">
                            <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                              <div className="h-full w-full bg-gray-800 rounded-full" />
                            </div>
                            <h4 className="text-xs font-normal">
                              Sole Proprietorship
                            </h4>
                          </div>
                        </div>
                        <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 md:w-52">
                          <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <h4 className="text-xs font-normal">Unregistered</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-6 border-b-2 border-gray-400 w-11/12">
                  <h3 className="text-lg font-semibold">
                    Select Link category
                  </h3>
                  <div className="my-4 grid grid-cols-2 md:grid-cols-3 gap-y-4 lg:w-4/6">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Community</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Food and Drink</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Sports</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Transport</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Retail</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Entertainment</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Hosipitality</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Travel</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Tourism</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Education</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">
                        Health and Fitness
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Politics</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Technology</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Creative Arts</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="h-7 w-7" />
                      <div className="text-sm font-medium">Leisure</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-8 border-b-2 border-gray-400 md:w-9/12 lg:w-3/5">
                  <h3 className="text-lg font-semibold">Business Address</h3>
                  <div className="mt-3 md:w-4/5">
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
                      <input
                        placeholder="Country"
                        className="border-2 border-gray-400 h-10 pl-3 outline-none"
                      />
                      <input
                        placeholder="City"
                        className="border-2 border-gray-400 h-10 pl-3 outline-none"
                      />
                    </div>
                    <div className="my-5">
                      <input
                        placeholder="Office Address"
                        className="border-2 border-gray-400 h-10 w-full pl-3 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                      <label className="text-lg font-semibold">
                        Phone Number
                      </label>
                      <div className="flex">
                        <div className="flex gap-1 items-center border-2 border-gray-400 border-r px-2">
                          <h6 className="text-base text-gray-400 font-medium">
                            +234
                          </h6>
                          <img alt="" src={down} />
                        </div>
                        <input className="border-2 border-l border-gray-400 h-10 w-full pl-3 outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 pb-5 border-b-2 border-gray-400 md:w-9/12 lg:w-3/5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">
                      Give investors Link brief about your Business
                    </h3>
                    <p className="text-sm text-gray-600">
                      Give Link brief expanation of your business. This enable
                      investors to understand your business
                    </p>
                    <div className="md:w-4/5 mt-2">
                      <textarea
                        className="border-2 border-l border-gray-400 h-40 w-full py-2 px-3 text-sm outline-none"
                        placeholder="People are far more likely to support your project if they know Link little bit about you and what you do."
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-6 pb-10 border-b-2 border-gray-400 w-11/12">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium">Upload Link video</h3>
                    <p className="text-sm text-gray-600">
                      Create Link 2 minute video of you talking about your
                      business, Ensure to talk about your business needs, the
                      essence and how the money you are raising will be used to
                      grow your business. Upload the video as unlisted on
                      YouTube. Provide the link to the video below.
                    </p>
                    <div className="md:w-8/12 lg:w-52.5/100 mt-2">
                      <input className="border-2 border-l border-gray-400 h-10 w-full text-sm outline-none" />
                    </div>
                    <div className="flex flex-col mt-4">
                      <h3 className="text-lg font-semibold">
                        Upload pitch deck
                      </h3>
                      <div className="md:w-8/12 lg:w-52.5/100">
                        <div className="flex flex-col pt-16 pb-3 w-full bg-gray-100 items-center text-center my-3">
                          <img alt="" src={file} className="h-10 w-10" />
                          <div>
                            <input
                              type="file"
                              name="file"
                              multiple
                              className="sr-only"
                            />
                          </div>
                          <label className="text-sm text-gray-600 mt-3">
                            Click to add document or drag
                            <br />
                            file here
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6 border-b-2 border-gray-400 w-4/5 md:w-3/5 lg:w-1/2">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold">
                      Are you familiar with crowdfunding?
                    </h3>
                    <div className="flex gap-8">
                      <div className="flex gap-1 items-center">
                        <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                          <div className="h-full w-full bg-gray-800 rounded-full" />
                        </div>
                        <h4 className="text-sm font-medium">Yes</h4>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                          <div className="h-full w-full bg-gray-800 rounded-full" />
                        </div>
                        <h4 className="text-sm font-medium">No</h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold">
                      Do you operate Link store on Gaged?
                    </h3>
                    <div className="flex gap-8">
                      <div className="flex gap-1 items-center">
                        <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                          <div className="h-full w-full bg-gray-800 rounded-full" />
                        </div>
                        <h4 className="text-sm font-medium">Yes</h4>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="h-5 w-5 bg-gray-400 rounded-full p-1">
                          <div className="h-full w-full bg-gray-800 rounded-full" />
                        </div>
                        <h4 className="text-sm font-medium">No</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10 w-4/5 md:w-3/5 lg:w-1/2">
                  <button className="text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white">
                    Back
                  </button>

                  <button className="text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500">
                    Next
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

export default Organisation;
