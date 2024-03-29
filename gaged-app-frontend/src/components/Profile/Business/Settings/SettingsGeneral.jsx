/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import MetaData from "../../../Layout/metaData";
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";

function SettingsGeneral(props) {
  const [open, setOpen] = useState(false);

  const [identity, setIdentity] = useState("Select");

  const [category, setCategory] = useState("Select");

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
  return (
    <Fragment>
      <MetaData title="Update User" />
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
        {props.message && (
          <GeneralErrorMessage>{props.message}</GeneralErrorMessage>
        )}
        {props.error && (
          <GeneralErrorMessage>{props.error}</GeneralErrorMessage>
        )}
        <div className="lg:bg-magenta-blue lg:px-2 h-full">
          <div className="block lg:flex lg:space-x-32">
            <div className="hidden lg:block">
              <DashBoard />
            </div>
            <div className="lg:hidden">{open && <DashBoard />}</div>
            <div className="flex flex-col lg:w-4/5">
              <div className="px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12">
                <div className="flex gap-5 lg:gap-10">
                  <button
                    className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue"
                    onClick={first}
                  >
                    General
                  </button>
                  <button
                    className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                    onClick={second}
                  >
                    Bank Information
                  </button>
                  <button
                    className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                    onClick={third}
                  >
                    Store settings
                  </button>
                </div>
              </div>
              <div className="px-3 lg:px-6 pt-5 pb-8 lg:py-5 lg:pb-14 mt-4 lg:mt-5 lg:mb-14 bg-white">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <div className="mt-5">
                  <div className="flex flex-col border-b-2 pb-7 md:pb-14">
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-5">
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">
                          Business Name
                        </label>
                        <input
                          placeholder="Business Name"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          name="businessName"
                          value={props.businessName}
                          onChange={(e) =>
                            props.setbusinessName(e.target.value)
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">
                          Account Holder Name
                        </label>
                        <input
                          placeholder="Account Holder Name"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          name="accountHolderName"
                          value={props.accountHolderName}
                          onChange={(e) =>
                            props.setaccountHolderName(e.target.value)
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">
                          Phone Number
                        </label>
                        <input
                          placeholder="Phone Number"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          name="phoneNumber"
                          value={props.phoneNumber}
                          onChange={(e) => props.setphoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5 md:w-1/2">
                      <label className="text-lg font-normal">
                        Email Address
                      </label>
                      <input
                        placeholder="Email Address"
                        className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        name="email"
                        value={props.email}
                        onChange={(e) => props.setemail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-8">
                      <div className="flex flex-col gap-3 md:gap-10 md:w-2/5">
                        <div className="flex flex-col gap-2">
                          <label className="text-lg font-normal">
                            Means of Identification
                          </label>
                          <div className="px-2 w-64 h-10 border-2 flex items-center">
                            <Menu as="div" className="">
                              <Menu.Button className="flex w-64 items-center px-2">
                                <div
                                  className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                  onChange={(e) =>
                                    props.setmeansOfID(e.target.value)
                                  }
                                  name="meansOfID"
                                  value={identity}
                                >
                                  {identity}
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
                                <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-80 mt-3 pt-3 pb-7 pl-6 pr-10 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div>
                                    <div
                                      onClick={() =>
                                        setIdentity(
                                          "National Identification Number(NIN)"
                                        )
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      National Identification Number(NIN)
                                    </div>
                                    <div
                                      onClick={() =>
                                        setIdentity("Driver's License")
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      Driver's License
                                    </div>
                                    <div
                                      onClick={() =>
                                        setIdentity("International Passport")
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      International Passport
                                    </div>
                                    <div
                                      onClick={() =>
                                        setIdentity(
                                          "Personal Voter's Card(PVC)"
                                        )
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      Personal Voter's Card(PVC)
                                    </div>
                                  </div>
                                </Menu>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-lg font-normal">
                            Registration No.
                          </label>
                          <input
                            placeholder="registration number of valid ID"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                            onChange={(e) => props.setregNum(e.target.value)}
                            name="regNum"
                            value={props.regNum}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-lg font-normal">
                            Category
                          </label>
                          <div className="px-2 w-64 h-10 border-2 flex items-center">
                            <Menu as="div" className="">
                              <Menu.Button className="flex w-64 items-center px-2">
                                <div
                                  className="text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                  onChange={(e) =>
                                    props.setcategory(e.target.value)
                                  }
                                  name="category"
                                  value={category}
                                >
                                  {category}
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
                                      onClick={() => setCategory("Retail")}
                                      className="hover:text-blue-600"
                                    >
                                      Retail
                                    </div>
                                    <div
                                      onClick={() => setCategory("Fashion")}
                                      className="hover:text-blue-600"
                                    >
                                      Fashion
                                    </div>
                                    <div
                                      onClick={() =>
                                        setCategory("Food service")
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      Food service
                                    </div>
                                    <div
                                      onClick={() =>
                                        setCategory("Manufacturing")
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      Manufacturing
                                    </div>
                                    <div
                                      onClick={() => setCategory("Consulting")}
                                      className="hover:text-blue-600"
                                    >
                                      Consulting
                                    </div>
                                    <div
                                      onClick={() => setCategory("Toys")}
                                      className="hover:text-blue-600"
                                    >
                                      Toys
                                    </div>
                                    <div
                                      onClick={() => setCategory("Gift items")}
                                      className="hover:text-blue-600"
                                    >
                                      Gift items
                                    </div>
                                    <div
                                      onClick={() => setCategory("Other")}
                                      className="hover:text-blue-600"
                                    >
                                      Other
                                    </div>
                                  </div>
                                </Menu>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:w-1/2">
                        <label className="text-lg font-normal">Upload ID</label>
                        <p className="text-sm font-medium">
                          Upload your valid means of ID
                        </p>
                        <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                          <label className="text-base font-normal text-gray-700 mt-3">
                            <img src={props.IDpic} className="h-20 w-20" />
                          </label>

                          <div>
                            <input
                              onChange={(e) =>
                                props.postIDpic(e.target.files[0])
                              }
                              type="file"
                              name="file"
                              multiple
                              className="sr-only"
                            />
                          </div>
                          <div className="text-base font-normal text-gray-700 mt-3">
                            Click to add document or drag
                            <br />
                            file here
                          </div>
                        </div>
                        <p className="text-sm text-center">
                          Your document must be no larger than 2Mb
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-10 border-b-2">
                    <h2 className="text-2xl font-semibold">
                      Business Information
                    </h2>
                    <div className="flex flex-col mt-5">
                      <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Name
                          </label>
                          <input
                            placeholder="Business Name"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                            name="businessName"
                            value={props.businessName}
                            onChange={(e) =>
                              props.setbusinessName(e.target.value)
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Nature of Business
                          </label>
                          <input
                            placeholder={category}
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                            onChange={(e) => props.setcategory(e.target.value)}
                            name="category"
                            value={category}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-3">
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Email
                          </label>
                          <input
                            placeholder="Email address"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                            name="personalEmail"
                            value={props.personalEmail}
                            onChange={(e) =>
                              props.setpersonalEmail(e.target.value)
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Address
                          </label>
                          <input
                            placeholder="Business Address"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                            name="businessAddress"
                            value={props.businessAddress}
                            onChange={(e) =>
                              props.businessAddress(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-10 border-b-2">
                    <h2 className="text-2xl font-semibold">Type of Business</h2>
                    <div className="flex flex-col mt-6 md:mt-5">
                      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                        <label className="cursor-pointer label">
                          <input
                            type="radio"
                            name="natureOfBusiness"
                            className="radio"
                            value="Limited Liability Company"
                            onClick={(e) =>
                              props.natureOfBusiness(e.target.value)
                            }
                          />
                          <span className="label-text">
                            <h4 className="text-xs font-normal">
                              Limited Liability Company
                            </h4>
                          </span>
                        </label>
                      </div>
                      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                        <label className="cursor-pointer label">
                          <input
                            type="radio"
                            name="natureOfBusiness"
                            className="radio"
                            value="Sole Proprietorship"
                            onClick={(e) =>
                              props.natureOfBusiness(e.target.value)
                            }
                          />
                          <span className="label-text">
                            <h4 className="text-xs font-normal">
                              Sole Proprietorship
                            </h4>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                      <label className="cursor-pointer label">
                        <input
                          type="radio"
                          name="natureOfBusiness"
                          className="radio"
                          value="Unregistered"
                          onClick={(e) =>
                            props.natureOfBusiness(e.target.value)
                          }
                        />
                        <span className="label-text">
                          <h4 className="text-xs font-normal">Unregistered</h4>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:mt-5">
                  <div className="flex flex-col md:w-3/5">
                    <label className="text-lg font-normal">
                      Upload CAC Certificate
                    </label>
                    <p className="text-sm font-medium">
                      Upload CAC certificate{" "}
                    </p>
                    <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                      <label className="text-base font-normal text-gray-700 mt-3">
                        <img src={props.cacCertificate} className="h-20 w-20" />
                      </label>
                      <div>
                        <input
                          onChange={(e) =>
                            props.postCacCertificate(e.target.files[0])
                          }
                          type="file"
                          name="file"
                          multiple
                          className="sr-only"
                        />
                      </div>
                      <div className="text-base font-normal text-gray-700 mt-3">
                        Click to add document or drag
                        <br />
                        file here
                      </div>
                    </div>
                    <p className="text-sm text-center">
                      Your document must be no larger than 2Mb
                    </p>
                  </div>

                  <div className="flex flex-col md:w-3/5">
                    <label className="text-lg font-normal">
                      Upload Form CO 7
                    </label>
                    <p className="text-sm font-medium">
                      This shows the particulars of your directors
                    </p>
                    <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                      <label className="text-base font-normal text-gray-700 mt-3">
                        <img src={props.formCO7} className="h-20 w-20" />
                      </label>

                      <div>
                        <input
                          onChange={(e) => props.postFormCO7(e.target.files[0])}
                          type="file"
                          name="file"
                          multiple
                          className="sr-only"
                        />
                      </div>
                      <div className="text-base font-normal text-gray-700 mt-3">
                        Click to add document or drag
                        <br />
                        file here
                      </div>
                      <p className="text-sm text-center">
                        Your document must be no larger than 2Mb
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h2 className="text-2xl font-semibold">Change Password</h2>
                  <div className="flex flex-col md:flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-lg font-normal">
                        New Password
                      </label>
                      <input
                        placeholder="New Password"
                        className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        onChange={(e) => props.setpassword(e.target.value)}
                        name="password"
                        value={props.password}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-lg font-normal">
                        Confirm Password
                      </label>
                      <input
                        placeholder="Confirm Password"
                        className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        onChange={(e) =>
                          props.setconfirmPassword(e.target.value)
                        }
                        name="confirmPassword"
                        value={props.confirmPassword}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex mt-5 md:mt-10 justify-center lg:justify-start">
                  <button
                    className="text-white text-lg border border-Dark-blue font-medium bg-Dark-blue px-14 py-2 rounded hover:bg-white hover:text-Dark-blue"
                    onClick={props.updateProfileSubmitHandler}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SettingsGeneral;
