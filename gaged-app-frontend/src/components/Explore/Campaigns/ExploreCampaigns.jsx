import React from "react";
import vibe from "../../images/vibe.png";
import password from "../../images/password.png";
import alot from "../../images/alot.png";
import volunteer from "../../images/volunteer.png";
import akhlaq from "../../images/akhlaq.png";
import duties from "../../images/duties.png";
import foodsupply from "../../images/food-supply.png";
import queen from "../../images/queen.png";
import sincerity from "../../images/sincerity.png";
import Header0 from "./Header0";
import { Link } from "react-router-dom";

function ExploreCampaigns() {
  return (
    <div className="mx-auto">
      <Header0 />
      <div className="bg-magenta-blue py-14 px-3 lg:px-12 items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Explore Campaigns</h1>
        <p className="text-lg my-2 font-normal">
          Search and discover the digital stores of businesses near you
        </p>
        <div className="mt-5">
          <input
            placeholder="search"
            className="w-full md:w-3/4 h-10 rounded pl-3 outline-none"
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left my-10 md:my-14">
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={vibe} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
            <Link to="/campaigns/first">
              <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
                Shop
              </button>
            </Link>
          </div>
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={alot} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={password} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={volunteer} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={duties} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={akhlaq} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={sincerity} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={foodsupply} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
          <div className="flex flex-col bg-white p-2">
            <div className="mb-3">
              <img alt="" src={queen} className="w-full" />
              <h4 className="text-lg font-bold my-2">Build our community</h4>
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
      </div>
    </div>
  );
}

export default ExploreCampaigns;
