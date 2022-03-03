/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import left from "../../../../../images/left.svg";
import right from "../../../../../images/right.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import { Link } from "react-router-dom";

import { Dialog } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function Target(props) {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);
  const [fourthOpen, setFourthOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const forward = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const first = (e) => {
    e.preventDefault();
    props.firstStep();
  };
  const second = (e) => {
    e.preventDefault();
    props.secondStep();
  };
  const third = (e) => {
    e.preventDefault();
    props.thirdStep();
  };
  const fourth = (e) => {
    e.preventDefault();
    props.fourthStep();
  };
  const fifth = (e) => {
    e.preventDefault();
    props.fifthStep();
  };
  const sixth = (e) => {
    e.preventDefault();
    props.sixthStep();
  };

  const payBack = (e) => {
    return props.pledged_profit_to_lenders * props.amountBeingRaised;
  };

  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState("Select a Duration");
  const [schedule, setSchedule] = useState("Select a Payment Plan");

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
      <div className="lg:bg-magenta-blue lg:px-3">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashboardCamp />
          </div>
          <div className="lg:hidden">{open && <DashboardCamp />}</div>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">3 of 6</h2>
              <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={first}
                  >
                    Organization Details
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={second}
                  >
                    Demographics
                  </button>
                  <button
                    className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded"
                    onClick={third}
                  >
                    Target
                  </button>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={fourth}
                  >
                    Finance
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={fifth}
                  >
                    Set Schedule
                  </button>
                  <button
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue "
                    onClick={sixth}
                  >
                    Review
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">
                  What type of funding are you looking for?
                </h2>
                <div className="mt-3 border-t-2 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="pt-5 pb-7 flex flex-col gap-5 md:flex-row justify-between">
                    <button className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 ">
                      <label class="cursor-pointer label">
                        <input
                          type="radio"
                          name="fundingType"
                          checked="checked"
                          class="radio"
                          value="Loan"
                          onChange={(e) => props.setfundingType(e.target.value)}
                        />
                        <span class="label-text">
                          <div className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-Dark-blue border-2 border-Dark-blue">
                            <div className="text-white font-medium text-lg ml-auto pl-6">
                              Loan
                            </div>
                            <div className="bg-white h-4 w-4 text-center text-Dark-blue text-xs font-medium rounded-full ml-auto">
                              ?
                            </div>
                          </div>
                        </span>
                      </label>
                    </button>
                    <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 ">
                      <button className="flex gap-5 items-center px-2 w-full md:w-56 h-12 bg-white border-2 border-gray-400 disabled">
                        <div className="text-gray-500 font-medium text-lg ml-auto pl-6">
                          <label class="cursor-pointer label">
                            <input
                              type="radio"
                              name="fundingType"
                              checked="checked"
                              class="radio"
                              value="Equity"
                              onChange={(e) =>
                                props.setfundingType(e.target.value)
                              }
                              disabled="disabled"
                            />
                            <span class="label-text">Equity</span>
                            <div className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto">
                              ?
                            </div>
                          </label>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pb-10 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <h3 className="text-lg font-semibold">Category</h3>
                  <div className="pl-1 mt-2 flex flex-col gap-8 ">
                    <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                      Please click the question mark icon associated with each
                      category to know the requirements.
                    </p>
                    <div className="flex flex-col gap-6 card p-6">
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label gap-4 md:flex-row justify-between">
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={(e) =>
                                props.setcategoryFunding(e.target.value)
                              }
                              value="$0 – $999"
                            />
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $0 – $999
                              </div>
                              <button
                                className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto"
                                onClick={() => setFirstOpen(!firstOpen)}
                              >
                                ?
                              </button>
                            </span>
                          </label>
                        </div>

                        <Transition.Root show={firstOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed z-10 inset-0 overflow-y-auto"
                            initialFocus={cancelButtonRef}
                            onClose={setOpen}
                          >
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </Transition.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon
                                          className="h-6 w-6 text-red-600"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                          as="h3"
                                          className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                          <div className="flex items-center py-4 border-b border-gray-400">
                                            <GoChevronLeft />
                                            <h1 className="text-xl font-semibold">
                                              {">"} $1000
                                            </h1>
                                          </div>
                                          <div className="text-lg font-medium">
                                            <h3>
                                              This category is avaliable to all
                                              businesses including unregistered
                                              or sole propietorships.
                                            </h3>
                                            <h3>
                                              This category of funding can only
                                              raised as a loan. The requirements
                                              to raise these category are:
                                            </h3>
                                          </div>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <div className="flex flex-col gap-2 text-base">
                                            <p>
                                              I. A minimum of 20 customers on
                                              Gaged.
                                            </p>
                                            <p>
                                              II. You should select a repayment
                                              plan for loans.
                                            </p>
                                            <p>
                                              III. Upload an introductory video
                                              of the organization and stating
                                              the purpose of the funding.
                                            </p>
                                            <p>
                                              IV. You are encouraged offer a
                                              percentage of your profit to
                                              lenders.
                                            </p>
                                            <p>
                                              V. You must have 15 unique lenders
                                              from your private network
                                              participate in the campaign before
                                              your campaign can be publicly
                                              listed on Gaged.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => setFirstOpen(false)}
                                    >
                                      Got it
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={(e) =>
                                props.setcategoryFunding(e.target.value)
                              }
                              value="$1000 – $9,999"
                            />
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $1000 – $9,999
                              </div>
                              <button
                                className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto"
                                onClick={() => setSecondOpen(!secondOpen)}
                              >
                                ?
                              </button>
                            </span>
                          </label>
                        </div>
                        <Transition.Root show={secondOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed z-10 inset-0 overflow-y-auto"
                            initialFocus={cancelButtonRef}
                            onClose={setOpen}
                          >
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </Transition.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon
                                          className="h-6 w-6 text-red-600"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                          as="h3"
                                          className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                          <div className="py-4 border-b border-gray-400">
                                            <h1 className="text-xl font-semibold">
                                              $1000 - $9999
                                            </h1>
                                          </div>
                                          <div className="text-lg font-medium">
                                            <h3>
                                              This category is only available to
                                              business registered as limited
                                              liabilty and can be raised as a
                                              loan or Equity The requirements to
                                              raise this category are:
                                            </h3>
                                          </div>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <div className="flex flex-col gap-2 text-base">
                                            <p>
                                              I. A minimum of 20 customers on
                                              Gaged.
                                            </p>
                                            <p>
                                              II. Upload business registration
                                              documents
                                            </p>
                                            <p>
                                              III. You should select a repayment
                                              plan for loans.
                                            </p>
                                            <p>
                                              IV. Upload an introductory video
                                              of the organization and stating
                                              the purpose of the funding.
                                            </p>
                                            <p>
                                              V. You are encouraged offer a
                                              percentage of your profit to
                                              lenders.
                                            </p>
                                            <p>
                                              VI. You must have 30 unique
                                              investors/lenders from your
                                              private network participate in the
                                              campaign before your campaign can
                                              be publicly listed on Gaged.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => setSecondOpen(false)}
                                    >
                                      Got it
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>
                      </div>
                      <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={(e) =>
                                props.setcategoryFunding(e.target.value)
                              }
                              value="$10,000 – $99,999"
                            />
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                $10,000 – $99,999
                              </div>
                              <button
                                className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto"
                                onClick={() => setThirdOpen(!thirdOpen)}
                              >
                                ?
                              </button>
                            </span>
                          </label>
                        </div>
                        <Transition.Root show={thirdOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed z-10 inset-0 overflow-y-auto"
                            initialFocus={cancelButtonRef}
                            onClose={setOpen}
                          >
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </Transition.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon
                                          className="h-6 w-6 text-red-600"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                          as="h3"
                                          className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                          <div className="py-4 border-b border-gray-400">
                                            <h1 className="text-xl font-semibold">
                                              $10 000 - $99 999
                                            </h1>
                                          </div>
                                          <div className="text-lg font-medium">
                                            <h3>
                                              This category is only available to
                                              business registered as limited
                                              liabilty and can be raised as a
                                              loan or Equity. The requirements
                                              to raise this category are:
                                            </h3>
                                          </div>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <div className="flex flex-col gap-2 text-base">
                                            <p>
                                              I. A minimum of 50 customers on
                                              Gaged.
                                            </p>
                                            <p>
                                              II. Upload business registration
                                              documents
                                            </p>
                                            <p>
                                              III. You should select a repayment
                                              plan for loans.
                                            </p>
                                            <p>
                                              IV. Upload an introductory video
                                              of the organization and stating
                                              the purpose of the funding.
                                            </p>
                                            <p>
                                              V. You are encouraged offer a
                                              percentage of your profit to
                                              lenders.
                                            </p>
                                            <p>
                                              VI. You must have 50 unique
                                              investors/lenders from your
                                              private network participate in the
                                              campaign before your campaign can
                                              be publicly listed on Gaged.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => setThirdOpen(false)}
                                    >
                                      Got it
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>
                        <div className="flex items-center gap-2 border-2 border-gray-400 px-2 w-full md:w-56 h-12 form-control">
                          <label class="cursor-pointer label">
                            <input
                              type="radio"
                              name="categoryFunding"
                              checked="checked"
                              class="radio"
                              onChange={(e) =>
                                props.setcategoryFunding(e.target.value)
                              }
                              value="> $100,000"
                            />
                            <span class="label-text">
                              <div className="text-base text-gray-600 font-medium">
                                {">"} $100,000
                              </div>
                              <button
                                className="bg-gray-500 h-4 w-4 text-center text-white text-xs font-medium rounded-full ml-auto"
                                onClick={() => setFourthOpen(!fourthOpen)}
                              >
                                ?
                              </button>
                            </span>
                          </label>
                        </div>
                        <Transition.Root show={fourthOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed z-10 inset-0 overflow-y-auto"
                            initialFocus={cancelButtonRef}
                            onClose={setOpen}
                          >
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </Transition.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon
                                          className="h-6 w-6 text-red-600"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                          as="h3"
                                          className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                          <div className="py-4 flex items-center border-b border-gray-400">
                                            <GoChevronRight />
                                            <h1 className="text-xl font-semibold">
                                              $100,000
                                            </h1>
                                          </div>
                                          <div className="text-lg font-medium">
                                            <h3>
                                              This category is only available to
                                              business registered as limited
                                              liabilty and can be raised as a
                                              loan or Equity. The requirements
                                              to raise this category are:
                                            </h3>
                                          </div>
                                        </Dialog.Title>
                                        <div className="flex flex-col gap-2 text-base">
                                          <p>
                                            I. A minimum of 200 customers on
                                            Gaged.
                                          </p>
                                          <p>
                                            II. Upload business registration
                                            documents.
                                          </p>
                                          <p>
                                            III. You should select a repayment
                                            plan for loans.
                                          </p>
                                          <p>
                                            IV. Upload an introductory video of
                                            the organization and stating the
                                            purpose of the funding.
                                          </p>
                                          <p>V. Upload a pitchdeck.</p>
                                          <p>
                                            VI. You are encouraged offer a
                                            percentage of your profit to
                                            lenders.
                                          </p>
                                          <p>
                                            VII. You must have 150 unique
                                            investors/lenders from your private
                                            network participate in the campaign
                                            before your campaign can be publicly
                                            listed on Gaged.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => setFourthOpen(false)}
                                    >
                                      Got it
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-2 pb-10 border-b-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">Amount</h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please indicate the specific amount being raised
                      </p>
                      <input
                        className="border-2 border-gray-400 w-56 h-10 outline-none"
                        name="amountBeingRaised"
                        onChange={(e) =>
                          props.setamountBeingRaised(e.target.value)
                        }
                        value={props.amountBeingRaised}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">
                      Pledge profit to Lenders
                    </h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please indicate the share of your capital raised Lenders
                        will get in addition when repaying.
                      </p>
                      <input
                        className="border-2 border-gray-400 w-56 h-10 outline-none"
                        name="pledged_profit_to_lenders"
                        value={props.pledged_profit_to_lenders}
                        onChange={(e) =>
                          props.setpledged_profit_to_lenders(e.target.value)
                        }
                        // onChange={(e) => props.set(e.target.value)}
                      />
                      <br />
                      <p>
                        If you raise $1000, you will have to pay ${payBack} back
                        to your Lenders.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please select the period that is appropriate to your
                        needs
                      </p>
                      <div className="px-2 bg-gray-200 w-64 h-10 flex items-center">
                        <Menu as="div" className="">
                          <Menu.Button className="flex w-64 items-center px-2">
                            <div
                              className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                              onChange={(e) =>
                                props.setduration_pledged_profit(e.target.value)
                              }
                              name="duration_pledged_profit"
                              value={duration}
                            >
                              {duration}
                            </div>
                            <div className="ml-auto mr-2">
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
                            <Menu className="absolute cursor-pointer flex flex-col gap-3 w-40 mt-3 py-4 pl-6 pr-10 text-sm font-medium bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div>
                                <div
                                  name="duration_pledged_profit"
                                  value="12"
                                  onClick={() => setDuration("12 months")}
                                  className="hover:text-blue-600"
                                >
                                  12 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="18"
                                  onClick={() => setDuration("18 months")}
                                  className="hover:text-blue-600"
                                >
                                  18 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="24"
                                  onClick={() => setDuration("24 months")}
                                  className="hover:text-blue-600"
                                >
                                  24 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="30"
                                  onClick={() => setDuration("30 months")}
                                  className="hover:text-blue-600"
                                >
                                  30 months
                                </div>
                                <div
                                  name="duration_pledged_profit"
                                  value="36"
                                  onClick={() => setDuration("36 months")}
                                  className="hover:text-blue-600"
                                >
                                  36 months
                                </div>
                              </div>
                            </Menu>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg font-semibold">
                      Repayment schedule
                    </h3>
                    <div className="pl-1 flex flex-col gap-3">
                      <p className="text-sm text-gray-800 md:4/5 lg:w-3/4">
                        Please select Link repayment schedule
                      </p>
                      <div className="px-2 bg-gray-200 w-64 h-10 flex items-center">
                        <Menu as="div" className="">
                          <Menu.Button className="flex w-64 items-center px-2">
                            <div
                              className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                              onChange={(e) =>
                                props.setrepayment_schedule_pledged_profit(
                                  e.target.value
                                )
                              }
                              name="repayment_schedule_pledged_profit"
                              value={schedule}
                            >
                              {schedule}
                            </div>
                            <div className="ml-auto mr-2">
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
                            <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-40 mt-3 pt-3 pb-7 pl-6 pr-10 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="1"
                                  onClick={() => setSchedule("Monthly")}
                                  className="hover:text-blue-600"
                                >
                                  Monthly
                                </div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="2"
                                  onClick={() => setSchedule("Bi-monthly")}
                                  className="hover:text-blue-600"
                                >
                                  Bi-monthly
                                </div>
                                <div
                                  name="repayment_schedule_pledged_profit"
                                  value="3"
                                  onClick={() => setSchedule("Quarterly")}
                                  className="hover:text-blue-600"
                                >
                                  Quarterly
                                </div>
                              </div>
                            </Menu>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-10 md:w-3/4 lg:w-4/6">
                  <button
                    className="flex gap-5 items-center text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white"
                    onClick={back}
                  >
                    <img alt="" src={left} />
                    <div>Back</div>
                  </button>

                  <button
                    className="flex gap-5 items-center text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500"
                    onClick={forward}
                  >
                    <div className="ml-auto pl-7">Next</div>
                    <img alt="" src={right} className="ml-auto" />
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

export default Target;
