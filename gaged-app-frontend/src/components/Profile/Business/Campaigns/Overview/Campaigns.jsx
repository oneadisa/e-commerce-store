/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import alot from "../../../../../images/alot.png";
import vibe from "../../../../../images/vibe.png";
import password from "../../../../../images/password.png";
import Header from "../addnew-campaign-component/Header";
import DashBoard from "./DashBoard";

function Campaigns() {
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
      <div className="lg:bg-magenta-blue lg:px-2 h-full">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashBoard />
          </div>
          <div className="lg:hidden">{open && <DashBoard />}</div>
          <div className="flex flex-col gap-10 lg:my-7 lg:ml-20 lg:pl-2 lg:pr-16">
            <div className="flex flex-col bg-white px-2 md:px-4 lg:px-8 pt-6 pb-8">
              <h1 className="text-2xl font-bold">Businesses near you.</h1>
              <p className="text-lg font-medium py-2">
                Explore the businesses in your locality. Shop with ease.
              </p>
              <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8">
                <div className="flex flex-col">
                  <div className="mb-20">
                    <img alt="" src={vibe} className="w-full" />
                    <h4 className="text-lg font-bold my-2">Vibes Store</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="mb-20">
                    <img alt="" src={alot} className="w-full" />
                    <h4 className="text-lg font-bold my-2">Alat Gadgets</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <button className="w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="mb-20">
                    <img alt="" src={password} className="w-full" />
                    <h4 className="text-lg font-bold my-2">password</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <button className="w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
              </div>
              <div className="ml-auto mt-14 mr-4">
                <button className="text-Dark-blue p-2 rounded text-base font-bold ml-auto hover:bg-Dark-blue hover:text-white">
                  See more
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-white px-2 md:px-4 lg:px-8 pt-6 pb-8">
              <h1 className="text-2xl font-bold">Live campaigns near you</h1>
              <p className="text-lg font-medium py-2">
                Explore fundraising campaigns near you. Invest with ease, earn
                decent return on your capital while you help businesses near you
                achieve their growth objective
              </p>
              <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8">
                <div className="flex flex-col">
                  <div className="mb-3">
                    <img alt="" src={vibe} className="w-full h-fit" />
                    <h4 className="text-lg font-bold my-2">Vibes Store</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <div className="mb-7">
                    <div className="flex justify-between">
                      <p className="font-medium text-lg">$40,000 raised</p>
                      <p className="text-lg">$150,000</p>
                    </div>
                    <div className="py-2">
                      <div className="h-2 w-full bg-Dark-grey rounded">
                        <div className="h-full w-1/3 bg-Dark-blue rounded" />
                      </div>
                    </div>
                    <p className="text-lg">1 week left</p>
                  </div>
                  <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="mb-3">
                    <img alt="" src={alot} className="w-full" />
                    <h4 className="text-lg font-bold my-2">Alat Gadgets</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <div className="mb-7">
                    <div className="flex justify-between">
                      <p className="font-medium text-lg">$40,000 raised</p>
                      <p className="text-lg">$150,000</p>
                    </div>
                    <div className="py-2">
                      <div className="h-2 w-full bg-Dark-grey rounded">
                        <div className="h-full w-1/3 bg-Dark-blue rounded" />
                      </div>
                    </div>
                    <p className="text-lg">1 week left</p>
                  </div>
                  <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="mb-3">
                    <img alt="" src={password} className="w-full" />
                    <h4 className="text-lg font-bold my-2">password</h4>
                    <p className="text-base leading-5">
                      Brewed for every occassion. Introduce vibes drinks at your
                      event, get your guests vibing.
                    </p>
                  </div>
                  <div className="mb-7">
                    <div className="flex justify-between">
                      <p className="font-medium text-lg">$40,000 raised</p>
                      <p className="text-lg">$150,000</p>
                    </div>
                    <div className="py-2">
                      <div className="h-2 w-full bg-Dark-grey rounded">
                        <div className="h-full w-1/3 bg-Dark-blue rounded" />
                      </div>
                    </div>
                    <p className="text-lg">1 week left</p>
                  </div>
                  <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                    Shop
                  </button>
                </div>
              </div>
              <div className="ml-auto mt-14 mr-4">
                <button className="text-Dark-blue p-2 rounded text-base font-bold ml-auto hover:bg-Dark-blue hover:text-white">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
