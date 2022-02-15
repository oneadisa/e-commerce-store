import React, { useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import ticket from '../images/ticket.svg'
import cashapp from '../images/cashapp.svg'
import bag from '../images/bag.svg'
import redgraph from '../images/red-graph.svg'
import greengraph from '../images/green-graph.svg'
import LineChart from './LineChart'
import LineChartII from './LineChartII'
import woman from '../images/woman.png'
import { GoKebabVertical } from 'react-icons/go';

function DashBoardMain() {

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto h-screen">
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

      <div className="lg:bg-magenta-blue lg:pb-24 lg:px-5">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashBoard />
          </div>
          <div className="lg:hidden">{open && <DashBoard />}</div>
          <div className="flex flex-col pt-5 md:pt-10 lg:pt-16 lg:space-y-7 lg:w-4/5">
            <div className="md:ml-auto px-2">
                <button className="w-44 h-12 border-2 border-gray-600 bg-white rounded font-semibold hover:bg-Dark-blue hover:text-white">Explore</button>
            </div>
            <div className="py-6 px-2 pb-10 lg:pl-8 lg:pr-4 p-4 bg-white">
              <div className='flex justify-between items-center font-bold'>
                <h1 className="text-lg">Store Overview</h1>
                <button className="text-sm font-semibold text-Dark-blue py-1 px-2 rounded-md hover:bg-Dark-blue hover:text-white">see more</button>
              </div>
              <div className="py-3 flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-7 md:w-2/3">
                  <div className="flex flex-col md:flex-row gap-5 items-center w-full">
                    <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-green-50 w-full md:w-2/6 h-40 md:h-32">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center"><img src={ticket} alt='ticket' /></div>
                        <h2 className=" font-bold">$155,680</h2>
                      </div>
                      <div className="py-2 flex items-center justify-between text-xs font-semibold">
                        <h3 className="text-gray-400">TOTAL SALES</h3>
                        <select 
                          className='w-14 bg-transparent text-green-500 outline-none cursor-pointer'
                        >
                          <option value="">+18%</option>
                          <option value="+25%">+25%</option>
                          <option value="+25%">+35%</option>
                          <option value="+25%">+50%</option>
                        </select>
                      </div>
                      <img src={greengraph} className='w-full' alt='green-graph' />
                    </div>
                    <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-red-50 w-full md:w-2/6 h-40 lg:h-32">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-red-300 rounded flex items-center justify-center"><img src={cashapp} alt='ticket' /></div>
                        <h2 className="font-bold">$57,867</h2>
                      </div>
                      <div className="py-2 flex items-center justify-between text-xs font-semibold">
                        <h3 className="text-gray-400">REVENUE</h3>
                        <select 
                          className='w-14 bg-transparent text-red-500 outline-none cursor-pointer'
                        >
                          <option value="">+18%</option>
                          <option value="+25%">+25%</option>
                          <option value="+25%">+35%</option>
                          <option value="+25%">+50%</option>
                        </select>
                      </div>
                      <img src={redgraph} className='w-full' alt='red-graph' />
                    </div>
                    <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-blue-50 w-full md:w-2/6 h-40 lg:h-32">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center"><img src={bag} alt='bag' /></div>
                        <h2 className=" font-bold">148</h2>
                      </div>
                      <div className="py-2 flex items-center justify-between text-xs font-semibold">
                        <h3 className="text-gray-400">PRODUCTS</h3>
                        <select 
                          className='w-14 bg-transparent text-blue-500 outline-none cursor-pointer'
                        >
                          <option value="">+18%</option>
                          <option value="+25%">+25%</option>
                          <option value="+25%">+35%</option>
                          <option value="+25%">+50%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 lg:px-8 lg:pt-5 pb-2 border-2 border-gray-300 w-full">
                    <div className="pb-5 flex justify-between items-center">
                      <div>
                        <h1 className="text-lg font-semibold">Sales report</h1>
                        <span className="text-sm text-gray-400">as of 25 May 2019, 09:41 PM</span>
                      </div>
                      <select className="px-2 w-32 h-8 font-bold bg-gray-300 outline-none cursor-pointer">
                        <option>MONTHLY</option>
                        <option>YEARLY</option>
                        <option>WEEKLY</option>
                        <option>DAILY</option>
                      </select>
                    </div>
                    <LineChart className='w-full' height={250} />
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full md:w-1/3">
                  <div className="p-2 lg:px-5 lg:py-3 border-2 border-gray-300">
                    <h3 className="font-bold">Order overview</h3>
                    <div className="mt-3 flex gap-5 items-center">
                      <div className="pt-5 pb-2 px-4 bg-blue-50 w-1/2 h-28 flex flex-col items-center gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center"><img src={bag} alt='ticket' /></div>
                          <h2 className="font-bold">290</h2>
                        </div>
                        <p className="text-gray-400 text-sm">TOTAL ORDERS</p>
                      </div>
                      <div className="pt-5 pb-2 px-4 bg-green-50 w-1/2 h-28 flex flex-col items-center gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center"><img src={bag} alt='ticket' /></div>
                          <h2 className="font-bold">186</h2>
                        </div>
                        <p className="text-gray-400 text-sm">COMPLETED</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 lg:px-5 lg:py-3 border-2 border-gray-300">
                    <h3 className="font-bold">No of customers</h3>
                    <div className="py-2 flex justify-between items-center font-medium w-1/2">
                      <div>
                        <p>260</p>
                        <p className="font-normal text-sm">Total</p>
                      </div>
                      <div>
                        <p>17</p>
                        <p className="font-normal text-sm">New</p>
                      </div>
                    </div>
                    <LineChart className='w-full h-40' height={200} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 py-6 px-2 pb-10 lg:pl-8 lg:pr-4 p-4">
                <div className='flex justify-between items-center font-bold'>
                    <h1 className="text-lg">Campaign Overview</h1>
                    <button className="text-sm font-semibold text-Dark-blue py-1 px-2 rounded-md hover:bg-Dark-blue hover:text-white">see more</button>
                </div>
                
                    <div className="mt-3 flex flex-col md:flex-row gap-5 items-center">
                      <div className="pt-5 pb-2 px-4 bg-blue-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center"><img src={ticket} alt='ticket' /></div>
                          <h2 className="font-bold">$5</h2>
                        </div>
                        <p className="text-gray-400 text-xs">TOTAL CAMPAIGN</p>
                      </div>
                      <div className="pt-5 pb-2 px-4 bg-pink-100 w-full md:w-1/4 h-28 flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-pink-400 rounded flex items-center justify-center"><img src={ticket} alt='ticket' /></div>
                          <h2 className="font-bold">$11,000</h2>
                        </div>
                        <p className="text-gray-400 text-xs">TOTAL AMOUNT RAISED</p>
                      </div>
                      <div className="pt-5 pb-2 px-4 bg-green-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center"><img src={ticket} alt='ticket' /></div>
                          <h2 className="font-bold">$2200</h2>
                        </div>
                        <div className="py-2 flex items-center justify-between text-xs font-semibold">
                            <h3 className="text-gray-400">AVERAGE RAISE</h3>
                            <select 
                            className='w-14 bg-transparent text-blue-500 outline-none cursor-pointer'
                            >
                            <option value="">+18%</option>
                            <option value="+25%">+25%</option>
                            <option value="+25%">+35%</option>
                            <option value="+25%">+50%</option>
                            </select>
                        </div>
                      </div>
                      <div className="pt-5 pb-2 px-4 bg-green-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center"><img src={ticket} alt='ticket' /></div>
                          <h2 className="font-bold">$8</h2>
                        </div>
                        <p className="text-gray-400 text-xs">NO OF INVESTORS</p>
                      </div>
                      <div className="p-2 bg-gray-100 w-full md:w-1/2 h-28 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold">Categories</h4>
                            <p className="text-sm font-medium text-Dark-blue">Add new</p>
                        </div>
                        <div className="flex justify-between justify-center items-center text-sm text-gray-500">
                            <button className="w-20 h-6 font-semibold bg-blue-100">Business</button>
                            <button className="w-20 h-6 font-semibold bg-blue-100">Technology</button>
                            <button className="w-24 h-6 font-semibold bg-blue-100">Entertainment</button>
                        </div>
                        <div className="ml-auto text-sm font-bold">
                            <button className="hover:text-Dark-blue font-semibold">+3 more</button>
                        </div>
                      </div>
                    </div>
                
                <div className="mt-5 flex flex-col md:flex-row gap-5">
                    <div className="md:w-2/3">
                        <div className="p-3 lg:px-8 lg:pt-5 pb-2 border-2 border-gray-300 w-full">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-lg font-semibold">Sales report</h1>
                                    <span className="text-sm text-gray-400">as of 25 May 2019, 09:41 PM</span>
                                </div>
                                <select className="px-2 w-32 h-8 font-bold bg-gray-300 outline-none cursor-pointer">
                                    <option>MONTHLY</option>
                                    <option>YEARLY</option>
                                    <option>WEEKLY</option>
                                    <option>DAILY</option>
                                </select>
                            </div>
                            <LineChartII className='w-full' height={250} />
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="border-2 border-gray-300 w-full p-4 lg:pt-5">
                            <h4 className="text-lg font-semibold pb-5">Inquiries</h4>
                            <div className="pt-2 flex items-center justify-between">
                                <div className="gap-3 flex">
                                    <img src={woman} alt='woman' />
                                    <div className="text-xs text-gray-400">
                                        <p className="text-black text-sm font-medium">Nicci Troiani</p>
                                        <p>Hey pal, hope you’re staying safe?</p>
                                    </div>
                                </div>
                                <GoKebabVertical className="cursor-pointer"/>
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

export default DashBoardMain;