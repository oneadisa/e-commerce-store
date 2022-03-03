import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Card from "./Card";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import MetaData from "../../../Layout/metaData";
import Loader from "../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";
// import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  updateProfile,
  clearErrors,
  loadBusiness,
} from "../../../../actions/businessActions";
import { UPDATE_BUSINESS_PROFILE_RESET } from "../../../../constants/businessConstants";

function BusinessWallet() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showFundModal, setShowFundModal] = React.useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = React.useState(false);
  const [message, setMessage] = useState(null);

  const [withdrawValue, setWithdrawValue] = useState("");
  const [fundValue, setFundValue] = useState("");

  const [filter, setFilter] = useState("Date");

  const { businessInfo, loading } = useSelector(
    (state: RootStateOrAny) => state.business
  );

  const { error, isUpdated } = useSelector(
    (state: RootStateOrAny) => state.businessProfile
  );

  var [walletBalance, setWalletBalance] = useState(null);
  const [name, setName] = useState("");

  const FundHandler = async (e) => {
    e.preventDefault();

    const config = {
      public_key: "FLWPUBK-c49999c8b3ae0a1fafe35a4bad31d166-X",
      tx_ref: Date.now(),
      amount: fundValue,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd,banktransfer",
      customer: {
        email: businessInfo.email,
        phonenumber: businessInfo.phoneNumber,
        name: businessInfo.businessName,
      },
      customizations: {
        title: "Gaged",
        description: "Gaged Checkout",
        logo: "https://www.linkpicture.com/q/Gaged-Blue.svg",
      },
    };
    const handleFlutterPayment = useFlutterwave(config);
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          // order.paymentInfo = {
          //   id: response.transaction_id,
          //   status: response.status,
          // };
          dispatch(loadBusiness());
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      },
      onClose: () => {},
    });
  };

  const WithdrawHandler = async (e) => {
    e.preventDefault();
    if (withdrawValue > walletBalance) {
      setMessage(
        "Oops, it seems you have insufficient funds. Please try again."
      );
    } else {
      const transferData = {
        account_bank: businessInfo.bankCode,
        account_number: businessInfo.bankAccountNumber,
        amount: withdrawValue,
        narration: "Akhlm Pstmn Trnsfr xx007",
        currency: "NGN",
        reference: "akhlm-pstmnpyt-rfxx007_PMCKDU_1",
        callback_url:
          "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
        debit_currency: "NGN",
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${businessInfo.token}`,
          },
        };
        const { data } = await axios.post(
          "https://api.flutterwave.com/v3/transfers",
          transferData,
          config
        );
      } catch (error) {}

      setWalletBalance((walletBalance -= Number(withdrawValue)));

      const myForm = new FormData();
      myForm.set("walletBalance", walletBalance);
      dispatch(updateProfile(myForm));
    }
  };

  useEffect(() => {
    if (businessInfo) {
      setWalletBalance(businessInfo.walletBalance);
      setName(businessInfo.businessName);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Transaction successful.");
      dispatch(loadBusiness());
      navigate("/business/wallet");
      dispatch({
        type: UPDATE_BUSINESS_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated, businessInfo, navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title={`${businessInfo.businessName}'s GAGED BusinessWallet`}
          />
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
            {message && <GeneralErrorMessage>{message}</GeneralErrorMessage>}
            {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
            <div className="lg:bg-magenta-blue lg:px-4">
              <div className="block lg:flex lg:space-x-32">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>
                <div className="lg:hidden">{open && <DashBoard />}</div>
                <div className="bg-white py-10 lg:py-20 mb-24 px-2 md:px-4 lg:px-5 lg:w-4/5">
                  <h2 className="text-2xl font-medium">My Cards</h2>
                  <div className="mt-3 pb-10 flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                      <div className="lg:w-2/5 bg-medium-blue px-5 pt-7 pb-7 lg:pb-0 rounded-lg">
                        <p className="text-sm text-white">BALANCE</p>
                        <h3 className="text-3xl font-semibold text-white">
                          ₦{walletBalance}
                        </h3>
                        <p className="mt-7 text-sm text-white">{name}</p>
                        <div className="mt-14 flex justify-between">
                          <button
                            className="w-28 h-10 border border-white text-white rounded text-base font-medium hover:text-Dark-blue hover:bg-white disabled:opacity-50 cursor-not-allowed"
                            type="button"
                            onClick={() => setShowFundModal(true)}
                          >
                            Fund wallet
                          </button>
                          {showFundModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="mx-2 md:mx-0 bg-white rounded-md pt-10 pb-24 w-full md:w-4/5 lg:w-1/2 flex flex-col items-center gap-3 ">
                                    <h2 className="text-xl font-semibold">
                                      Fund wallet
                                    </h2>
                                    <div className="flex flex-col py-5 gap-4">
                                      <div className="flex flex-col gap-1">
                                        <h4 className="text-base font-medium">
                                          Amount
                                        </h4>
                                        <input
                                          className="h-12 border-2 border-gray-400 w-80 md:w-96 outline-none pl-5"
                                          onChange={(e) =>
                                            setFundValue(e.target.value)
                                          }
                                        />
                                      </div>
                                      {/* <div className='flex flex-col gap-1'> */}
                                      {/* <h4 className='text-base font-medium'>Payment method</h4> */}
                                      {/* <input className='h-12 border-2 w-80 md:w-96' /> */}
                                      {/* <div className="px-2 h-12 flex items-center w-80 md:w-96 border-2 border-gray-400"> */}
                                      {/*  */}
                                      {/* </div> */}
                                      {/* </div> */}
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                      <button
                                        className="mt-3 border border-Dark-blue hover:bg-Dark-blue hover:text-white font-medium w-80 md:w-96 h-12 bg-white text-Dark-blue"
                                        type="button"
                                        onClick={() => setShowFundModal(false)}
                                      >
                                        Close
                                      </button>
                                      <button
                                        className="mt-3 border border-Dark-blue bg-Dark-blue text-white font-medium w-80 md:w-96 h-12 hover:bg-white hover:text-Dark-blue"
                                        type="button"
                                        onClick={(e) => FundHandler(e)}
                                      >
                                        Fund
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                          <button
                            className="w-28 h-10 border border-white text-white rounded text-base font-medium hover:text-Dark-blue hover:bg-white"
                            type="button"
                            onClick={() => setShowWithdrawModal(true)}
                          >
                            Withdraw
                          </button>
                          {showWithdrawModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="mx-2 md:mx-0 bg-white rounded-md pt-10 pb-24 w-full md:w-4/5 lg:w-1/2 flex flex-col items-center gap-3 ">
                                    <h2 className="text-xl font-semibold">
                                      Withdraw
                                    </h2>
                                    <div className="flex flex-col py-5 gap-4">
                                      <div className="flex flex-col gap-1">
                                        <h4 className="text-base font-medium">
                                          Amount
                                        </h4>
                                        <input
                                          className="h-12 border-2 border-gray-400 w-80 md:w-96 outline-none pl-5"
                                          onChange={(e) =>
                                            setWithdrawValue(e.target.value)
                                          }
                                        />
                                      </div>
                                      {/* <div className='flex flex-col gap-1'> */}
                                      {/* <h4 className='text-base font-medium'>Payment method</h4> */}
                                      {/* <input className='h-12 border-2 w-80 md:w-96' /> */}
                                      {/* <div className="px-2 h-12 flex items-center w-80 md:w-96 border-2 border-gray-400"> */}
                                      {/*  */}
                                      {/* </div> */}
                                      {/* </div> */}
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                      <button
                                        className="mt-3 border border-Dark-blue hover:bg-Dark-blue hover:text-white font-medium w-80 md:w-96 h-12 bg-white text-Dark-blue"
                                        type="button"
                                        onClick={() => setShowFundModal(false)}
                                      >
                                        Close
                                      </button>
                                      <button
                                        className="mt-3 border border-Dark-blue bg-Dark-blue text-white font-medium w-80 md:w-96 h-12 hover:bg-white hover:text-Dark-blue"
                                        type="button"
                                        onClick={(e) => WithdrawHandler(e)}
                                      >
                                        Withdraw
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="lg:w-3/5 md:mt-1 border-2 px-2 lg:px-4 py-6 flex flex-col md:flex-row rounded-lg">
                        <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-black pb-5 md:pb-0 md:pr-3">
                          <div className="flex justify-between text-sm font-medium text-gray-400">
                            <p>LAST PAYOUT</p>
                            {/* <p>May 17, 2021</p> */}
                          </div>
                          <h3 className="my-3 text-4xl font-semibold">₦</h3>
                          <div className="my-4 py-1 w-14 rounded-full text-sm text-center text-green-900 font-medium bg-green-200 ">
                            Paid
                          </div>
                          <button className="mt-14 text-base font-medium text-medium-blue hover:text-red-500">
                            View transaction
                          </button>
                        </div>
                        <div className="md:w-1/2 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pr-3 md:pl-6">
                          <div className="flex justify-between text-sm font-medium text-gray-400">
                            <p>NEXT PAYOUT</p>
                            {/* <p>June 18, 2021</p> */}
                          </div>
                          <h3 className="my-3 text-4xl font-semibold">₦</h3>
                          <div className="my-4 py-1 w-20 rounded-full text-sm text-center text-brown font-medium bg-light-orange">
                            Pending
                          </div>
                          <button className="mt-14 text-base font-medium text-medium-blue hover:text-red-500">
                            View transaction
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-7">
                      <div className="lg:w-4/6">
                        <h3 className="text-lg font-medium">Transactions</h3>
                        <div className="mt-4 lg:mt-2 flex w-full">
                          <div className="flex items-center border-2 border-gray-300 border-r">
                            <Menu as="div" className="">
                              <Menu.Button className="flex w-32 md:w-48 items-center justify-center">
                                <div className="flex text-base font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                  {filter}
                                </div>
                                <div className="">
                                  <ChevronDownIcon
                                    className="w-6 h-6 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                  />
                                </div>
                              </Menu.Button>
                              <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-28 mt-3 pt-2 pb-4 pl-2 pr-4 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div>
                                    <div
                                      onClick={() => setFilter("Date")}
                                      className="hover:text-blue-600"
                                    >
                                      Date
                                    </div>
                                    <div
                                      onClick={() => setFilter("Amount")}
                                      className="hover:text-blue-600"
                                    >
                                      Amount
                                    </div>
                                    <div
                                      onClick={() => setFilter("Store")}
                                      className="hover:text-blue-600"
                                    >
                                      Store
                                    </div>
                                  </div>
                                </Menu>
                              </Transition>
                            </Menu>
                          </div>
                          <input
                            placeholder="Search"
                            className="border-2 border-l border-gray-300 w-full h-10 pl-3 outline-none"
                          />
                        </div>
                        <div className="mt-3 flex justify-between w-full">
                          <p className="text-base font-medium">Date</p>
                          <p className="text-base font-medium">Description</p>
                          <p className="text-base font-medium">Amount</p>
                          <p className="text-base font-medium">Charges</p>
                          <p className="text-base font-medium">Total</p>
                          <p className="text-base font-medium">Status</p>
                        </div>
                      </div>
                      <div className="lg:w-2/6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium">
                            Payment methods
                          </h3>
                          <button className="text-sm text-Dark-blue font-medium hover:text-red-500">
                            Add new
                          </button>
                        </div>
                        <div className="mt-2 border-2 border-gray-300 pt-3 pb-6 px-4">
                          <Card />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default BusinessWallet;
