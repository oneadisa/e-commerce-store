import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import DashBoardII from "./DashBoardII";
import ticket from "../../../../images/ticket.svg";
import cashapp from "../../../../images/cashapp.svg";
import bag from "../../../../images/bag.svg";
import redgraph from "../../../../images/red-graph.svg";
import greengraph from "../../../../images/green-graph.svg";
// import LineChart from "../../../Layout/Charts/LineChart";
// import LineChartII from "../../../Layout/Charts/LineChartII";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, loadBusiness } from "../../../../actions/businessActions";
import MetaData from "../../../Layout/metaData.js";
import Loader from "../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

export default function Analytics() {
  const [open, setOpen] = useState(false);
  let today = new Date().toLocaleDateString();
  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();
  const [message] = useState(null);
  const { signedUpBusinessInfo, error, loading } = useSelector(
    (state: RootStateOrAny) => state.business
  );
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
        data: [0, signedUpBusinessInfo.totalSales],
      },
    ],
  });
  // const [secondState] = useState({
  // options: {
  // colors: ["#0000FF", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
  // stroke: {
  // curve: "straight",
  // width: 2,
  // },
  // xaxis: {
  // categories: [1, 2, 3, 4, 5],
  // axisBorder: {
  // show: false,
  // },
  // },
  // yaxis: {
  // opposite: true,
  // },
  // dataLabels: {
  // enabled: false,
  // },
  // chart: {
  // toolbar: {
  // show: false,
  // },
  // },
  // },
  // series: [
  // {
  // name: "series-1",
  // data: [0, signedUpBusinessInfo.totalNumberOfOrders],
  // },
  // ],
  // });
  let investors = 0;
  signedUpBusinessInfo.listOfCampaignsStarted &&
    signedUpBusinessInfo.listOfCampaignsStarted.forEach((item) => {
      item.totalNumberOfCampaignDonors += investors;
    });

  var revenue =
    signedUpBusinessInfo.walletBalance - signedUpBusinessInfo.totalSales;
  var average =
    signedUpBusinessInfo.totalAmountRaised -
    signedUpBusinessInfo.totalNumberOfCampaignsStarted;

  useEffect(() => {
    if (!signedUpBusinessInfo) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(loadBusiness());
  }, [dispatch, alert, error, signedUpBusinessInfo, navigate]);

  return (
    <Fragment>
      <MetaData title={`${signedUpBusinessInfo.businessName} - Dashboard`} />
      {loading ? (
        <Loader />
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
                <DashBoardII />
              </div>
              <div className="lg:hidden">{open && <DashBoardII />}</div>
              <div className="flex flex-col pt-3 lg:pt-16 lg:space-y-7 lg:w-4/5">
                <div className="py-6 px-2 pb-8 lg:pl-8 lg:pr-4 p-4 bg-white">
                  <div className="py-3 flex flex-col gap-7 w-full">
                    <div className="flex flex-col md:flex-row gap-5 items-center md:w-4/5">
                      <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-green-50 w-full md:w-2/6 h-40 md:h-32">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center">
                            <img src={ticket} alt="ticket" />
                          </div>
                          <h2 className=" font-bold">
                            $ {signedUpBusinessInfo.totalSales}
                          </h2>
                        </div>
                        <div className="py-2 flex items-center justify-between text-xs font-semibold">
                          <h3 className="text-gray-400">TOTAL SALES</h3>
                          <select className="w-14 bg-transparent text-green-500 outline-none cursor-pointer">
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
                      <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-red-50 w-full md:w-2/6 h-40 md:h-32">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-red-300 rounded flex items-center justify-center">
                            <img src={cashapp} alt="ticket" />
                          </div>
                          <h2 className="font-bold">$ {revenue}</h2>
                        </div>
                        <div className="py-2 flex items-center justify-between text-xs font-semibold">
                          <h3 className="text-gray-400">REVENUE</h3>
                          <select className="w-14 bg-transparent text-red-500 outline-none cursor-pointer">
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
                      <div className="lg:pt-3 pb-2 p-2 lg:px-4 bg-blue-50 w-full md:w-2/6 h-40 md:h-32">
                        <div className="flex gap-3 items-center">
                          <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center">
                            <img src={bag} alt="bag" />
                          </div>
                          <h2 className=" font-bold">
                            $ {signedUpBusinessInfo.totalSales}
                          </h2>
                        </div>
                        <div className="py-2 flex items-center justify-between text-xs font-semibold">
                          <h3 className="text-gray-400">PRODUCTS</h3>
                          <select className="w-14 bg-transparent text-blue-500 outline-none cursor-pointer">
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
                            Sales Statistics
                          </h1>
                          <span className="text-sm text-gray-400">
                            as of {today}
                          </span>
                        </div>
                        <select className="px-2 w-32 h-8 font-bold bg-gray-300 outline-none cursor-pointer">
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
                </div>
                <div className="bg-white lg:mt-2 py-6 px-2 pb-10 lg:pl-8 lg:pr-4 p-4">
                  <div className="mt-3 flex flex-col md:flex-row gap-5 items-center">
                    <div className="pt-5 pb-2 px-4 bg-blue-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center">
                          <img src={ticket} alt="ticket" />
                        </div>
                        <h2 className="font-bold">$5</h2>
                      </div>
                      <p className="text-gray-400 text-xs">TOTAL CAMPAIGN</p>
                    </div>
                    <div className="pt-5 pb-2 px-4 bg-pink-100 w-full md:w-1/4 h-28 flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-pink-400 rounded flex items-center justify-center">
                          <img src={ticket} alt="ticket" />
                        </div>
                        <h2 className="font-bold">$11,000</h2>
                      </div>
                      <p className="text-gray-400 text-xs">
                        TOTAL AMOUNT RAISED
                      </p>
                    </div>
                    <div className="pt-5 pb-2 px-4 bg-green-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center">
                          <img src={ticket} alt="ticket" />
                        </div>
                        <h2 className="font-bold">$ {average}</h2>
                      </div>
                      <div className="py-2 flex items-center justify-between text-xs font-semibold">
                        <h3 className="text-gray-400">AVERAGE RAISE</h3>
                        <select className="w-14 bg-transparent text-blue-500 outline-none cursor-pointer">
                          <option value="">+18%</option>
                          <option value="+25%">+25%</option>
                          <option value="+25%">+35%</option>
                          <option value="+25%">+50%</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-5 pb-2 px-4 bg-green-50 w-full md:w-1/4 h-28 flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-7 h-7 bg-green-300 rounded flex items-center justify-center">
                          <img src={ticket} alt="ticket" />
                        </div>
                        <h2 className="font-bold">{investors}</h2>
                      </div>
                      <p className="text-gray-400 text-xs">NO OF INVESTORS</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="p-3 lg:px-8 lg:pt-5 pb-2 border-2 border-gray-300 w-full">
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-lg font-semibold">
                            Campaign Statistics
                          </h1>
                          <span className="text-sm text-gray-400">
                            as of {today}
                          </span>
                        </div>
                        <select className="px-2 w-32 h-8 font-bold bg-gray-300 outline-none cursor-pointer">
                          <option>MONTHLY</option>
                          <option>YEARLY</option>
                          <option>WEEKLY</option>
                          <option>DAILY</option>
                        </select>
                      </div>
                      {/* <LineChartII className="w-full" height={250} /> */}
                      <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        height={250}
                      />
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
