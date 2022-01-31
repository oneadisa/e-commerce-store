/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from './Header'
import Dashboard from './Dashboard';
import rectangle from "../../images/rectangle.svg";

function Campaign3() {

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto">
      <Header 
          handleNav = {() => setOpen(!open)}
          button = {open ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
      />
      <div className="bg-magenta-blue h-full">
        <div className="block lg:flex lg:space-x-24">
            <div className='hidden lg:block'>
              <Dashboard />
            </div>
            <div className='lg:hidden'>
              {open && <Dashboard />}
            </div>
          <div className="py-5 md:py-10 lg:py-0 lg:my-10 w-full px-2">
            <div className="flex flex-col md:flex-row gap-5 justify-between">
              <h1 className="text-3xl font-bold text-medium-blue">
                Fundraising Campaigns
              </h1>
              <button className="lg:mr-10 w-36 h-10 bg-white border-2 border-black hover:text-white hover:bg-Dark-blue hover:border-white">
                New campaign
              </button>
            </div>
            <div className="my-3">
              <div className="flex justify-between md:justify-start border-b-2 border-black">
                <div className="text-lg font-semibold text-gray-400  px-4 md:px-10 py-1 hover:text-Dark-blue">
                  <h3>All</h3>
                </div>
                <div className="text-lg font-semibold text-gray-400 px-4 md:px-10 py-1 hover:text-Dark-blue">
                  <h3>LIVE</h3>
                </div>
                <div className="text-lg font-semibold border-b-4 border-Dark-blue px-4 md:px-10 py-1">
                  <h3>COMPLETED</h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-2 lg:gap-5 my-10 lg:px-1">
                <div className="flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5">
                  <div>
                    <img src={rectangle} className="w-full" />
                    <h3 className="text-xl font-medium mt-5">
                      Alleyway Security Fundraiser
                    </h3>
                    <p className="text-base leading-5">
                      The improved security measures at Wychurst are estimated
                      to cost £20,000. Any extra...
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="h-2 w-full bg-Dark-grey rounded">
                      <div className="h-full bg-Dark-blue rounded" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base">100% raised</p>
                    <p className="text-base text-red-500"></p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5">
                  <div>
                    <img src={rectangle} className="w-full" />
                    <h3 className="text-xl font-medium mt-5">
                      Alleyway Security Fundraiser
                    </h3>
                    <p className="text-base leading-5">
                      The improved security measures at Wychurst are estimated
                      to cost £20,000. Any extra...
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="h-2 w-full bg-Dark-grey rounded">
                      <div className="h-full bg-Dark-blue rounded" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base">100% raised</p>
                    <p className="text-base text-red-500"></p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5">
                  <div>
                    <img src={rectangle} className="w-full" />
                    <h3 className="text-xl font-medium mt-5">
                      Alleyway Security Fundraiser
                    </h3>
                    <p className="text-base leading-5">
                      The improved security measures at Wychurst are estimated
                      to cost £20,000. Any extra...
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="h-2 w-full bg-Dark-grey rounded">
                      <div className="h-full bg-Dark-blue rounded" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base">100% raised</p>
                    <p className="text-base text-red-500"></p>
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

export default Campaign3;
