//eslint-disable jsx-a11y/anchor-is-valid //
/* eslint-disable no-dupe-keys */
import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import ticket from "../../../../../../images/ticket.svg";
import cashapp from "../../../../../../images/cashapp.svg";
import bag from "../../../../../../images/bag.svg";
import redgraph from "../../../../../../images/red-graph.svg";
import greengraph from "../../../../../../images/green-graph.svg";
import OrderCard from "../overviewOrderCard";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors } from "../../../../../../actions/businessActions";
import MetaData from "../../../../../Layout/metaData.js";
import Loader from "../../../../../Layout/Errors/GeneralErrorMessage";
import GeneralErrorMessage from "../../../../../Layout/Errors/GeneralErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

function Overview() {
  // const slicedArray = array.slice(0, n);

  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();
  const [message] = useState(null);
  const { businessInfo, error, loading } = useSelector(
    (state: RootStateOrAny) => state.business
  );
  let today = new Date().toLocaleDateString();
  const [state] = useState({
    options: {
      colors: ["#7bc17e", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        opposite: true,
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, businessInfo.totalSales],
      },
    ],
  });

  const [secondState] = useState({
    options: {
      colors: ["#0000FF", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        opposite: true,
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, businessInfo.totalNumberOfOrders],
      },
    ],
  });

  let investors = 0;
  businessInfo.listOfCampaignsStarted &&
    businessInfo.listOfCampaignsStarted.forEach((item) => {
      item.totalNumberOfCampaignDonors += investors;
    });

  var revenue = businessInfo.walletBalance - businessInfo.totalSales;

  //  var average =
  //  businessInfo.totalAmountRaised -
  //  businessInfo.totalNumberOfCampaignsStarted;

  useEffect(() => {
    if (!businessInfo) {
      navigate("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, businessInfo, navigate]);

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <MetaData title={`${businessInfo.businessName} - Dashboard`} />
      {loading ? (
        <Loader children={undefined} />
      ) : (
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
          {message && <GeneralErrorMessage>{message}</GeneralErrorMessage>}
          {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}

          <div className="lg:bg-magenta-blue lg:pb-24 lg:px-5">
            <div className="block lg:flex lg:space-x-28">
              <div className="hidden lg:block">
                <DashBoard />
              </div>
              <div className="lg:hidden">{open && <DashBoard />}</div>
              <div className="flex flex-col lg:space-y-5 lg:w-4/5">
                <div className="w-11/12 flex flex-col lg:flex-row px-2 pt-1 gap-2 text-base lg:text-lg font-medium bg-white lg:px-5 lg:pr-3">
                  <div className="flex justify-between lg:gap-10">
                    <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
                      Overview
                    </p>
                    <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                      Products
                    </p>
                    <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                      Orders
                    </p>
                    <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                      Customers
                    </p>
                    <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                      Reviews
                    </p>
                  </div>
                  <button className="border border-gray-500 w-32 mb-2 ml-auto hover:bg-Dark-blue hover:text-white hoverborder-Dark-blue">
                    Visit store
                  </button>
                </div>
                <div className="py-6 px-2 pb-10 lg:pl-8 lg:pr-4 p-4 bg-white">
                  <h1 className="text-lg font-bold">Store Overview</h1>
                  <div className="py-3 flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col gap-7 md:w-2/3">
                      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
                        <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-green-50 w-full md:w-2/6 h-40 md:h-32">
                          <div className="flex gap-3 items-center">
                            <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center">
                              <img src={ticket} alt="ticket" />
                            </div>
                            <h2 className=" font-bold">
                              $ {businessInfo.totalSales}
                            </h2>
                          </div>
                          <div className="py-2 flex items-center justify-between text-xs font-semibold">
                            <h3 className="text-gray-400">TOTAL SALES</h3>
                            <select className="w-14 bg-transparent text-green-500 outline-none">
                              <option value="">+18%</option>
                              <option value="+25%">+25%</option>
                              <option value="+25%">+35%</option>
                              <option value="+25%">+50%</option>
                            </select>
                          </div>
                          <img
                            src={greengraph}
                            className="w-full"
                            alt="green-graph"
                          />
                        </div>
                        <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-red-50 w-full md:w-2/6 h-40 lg:h-32">
                          <div className="flex gap-3 items-center">
                            <div className="w-7 h-7 bg-red-300 rounded flex items-center justify-center">
                              <img src={cashapp} alt="ticket" />
                            </div>
                            <h2 className="font-bold">$ {revenue}</h2>
                          </div>
                          <div className="py-2 flex items-center justify-between text-xs font-semibold">
                            <h3 className="text-gray-400">REVENUE</h3>
                            <select className="w-14 bg-transparent text-red-500 outline-none">
                              <option value="">+18%</option>
                              <option value="+25%">+25%</option>
                              <option value="+25%">+35%</option>
                              <option value="+25%">+50%</option>
                            </select>
                          </div>
                          <img
                            src={redgraph}
                            className="w-full"
                            alt="red-graph"
                          />
                        </div>
                        <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-blue-50 w-full md:w-2/6 h-40 lg:h-32">
                          <div className="flex gap-3 items-center">
                            <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center">
                              <img src={bag} alt="bag" />
                            </div>
                            <h2 className=" font-bold">
                              {businessInfo.numberOfStoreProducts}
                            </h2>
                          </div>
                          <div className="py-2 flex items-center justify-between text-xs font-semibold">
                            <h3 className="text-gray-400">PRODUCTS</h3>
                            <select className="w-14 bg-transparent text-blue-500 outline-none">
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
                            <h1 className="text-lg font-semibold">
                              Sales report
                            </h1>
                            <span className="text-sm text-gray-400">
                              as of {today}
                            </span>
                          </div>
                          <select className="px-2 w-32 h-8 font-bold bg-gray-300 outline-none">
                            <option>MONTHLY</option>
                            <option>YEARLY</option>
                            <option>WEEKLY</option>
                            <option>DAILY</option>
                          </select>
                        </div>
                        {/* <LineChart className="w-full" height={250} /> */}
                        <Chart
                          options={state.options}
                          series={state.series}
                          type="area"
                          height={250}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full md:w-1/3">
                      <div className="p-2 lg:px-5 lg:py-3 border-2 border-gray-300">
                        <h3 className="font-bold">Order overview</h3>
                        <div className="mt-3 flex gap-5 items-center">
                          <div className="pt-5 pb-2 px-4 bg-blue-50 w-1/2 h-28 flex flex-col items-center gap-3">
                            <div className="flex gap-3 items-center">
                              <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center">
                                <img src={bag} alt="ticket" />
                              </div>
                              <h2 className="font-bold">
                                {businessInfo.totalNumberOfOrders}
                              </h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                              TOTAL ORDERS
                            </p>
                          </div>
                          <div className="pt-5 pb-2 px-4 bg-green-50 w-1/2 h-28 flex flex-col items-center gap-3">
                            <div className="flex gap-3 items-center">
                              <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center">
                                <img src={bag} alt="ticket" />
                              </div>
                              {/* <h2 className="font-bold">186</h2> */}
                              {/* </div> */}
                              {/* <p className="text-gray-400 text-sm">COMPLETED</p> */}
                              {/* </div> */}
                            </div>
                          </div>
                          <div className="p-2 lg:px-5 lg:py-3 border-2 border-gray-300">
                            <h3 className="font-bold">No of customers</h3>
                            <div className="py-2 flex justify-between items-center font-medium w-1/2">
                              <div>
                                <p>{businessInfo.totalNumberOfOrders}</p>
                                <p className="font-normal text-sm">Total</p>
                              </div>
                              <div>
                                <p>17</p>
                                <p className="font-normal text-sm">New</p>
                              </div>
                            </div>
                            {/* <LineChart className="w-full h-40" height={200} /> */}
                            <Chart
                              options={secondState.options}
                              series={secondState.series}
                              type="area"
                              height={200}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="border-2 border-gray-300 lg:p-2 md:w-2/3">
                          <div className="p-2 pb-3 flex justify-between items-center">
                            <h4 className="font-bold">Latest Orders</h4>
                            <Link to="/store/businessInfo.orders">
                              <p className="text-sm text-Dark-blue font-semibold">
                                view all
                              </p>
                            </Link>
                          </div>
                          <div className="container flex mx-auto">
                            <div className="flex flex-col mx-auto">
                              <div className="w-full">
                                <div className="border-b border-gray-200 shadow">
                                  <table className="divide-y divide-green-400 ">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th className="px-2 md:px-6 py-2 text-xs text-gray-500">
                                          PRODUCT NAME
                                        </th>
                                        <th className="px-2 md:px-6 py-2 text-xs text-gray-500">
                                          CATEGORY
                                        </th>
                                        <th className="px-2 md:px-6 py-2 text-xs text-gray-500">
                                          QUANTITY
                                        </th>
                                        <th className="px-2 md:px-6 py-2 text-xs text-gray-500">
                                          TOTAL
                                        </th>
                                        <th className="px-2 md:px-6 py-2 text-xs text-gray-500">
                                          ACTION
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-300">
                                      {businessInfo.orders &&
                                      businessInfo.orders[0] ? (
                                        <>
                                          <div>
                                            {" "}
                                            {businessInfo.orders &&
                                              businessInfo.orders
                                                .slice(0, 5)
                                                .map((order) => (
                                                  <OrderCard
                                                    key={order._id}
                                                    order={order}
                                                  />
                                                ))}{" "}
                                          </div>{" "}
                                        </>
                                      ) : (
                                        <>
                                          <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2"></div>{" "}
                                          <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                            You have no orders yet.{" "}
                                          </p>{" "}
                                        </>
                                      )}{" "}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="border-2 border-gray-300 p-2 lg:p-4 md:w-1/3"> */}
                        {/* <h3 className="font-bold">Top selling products</h3> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overview;
