/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import file from "../../../../../images/file.png";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

class Organisation extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  state = {
    open: false,
    num: "+234",
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="mx-auto">
        <Header
          handleNav={() => this.setState({ open: !this.state.open })}
          button={
            this.state.open ? (
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
            <div className="lg:hidden">
              {this.state.open && <DashboardCamp />}
            </div>
            <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
              <div className="flex flex-col px-2 md:px-4 py-2">
                <h2 className="text-lg font-semibold">1 of 6</h2>
                <div className="flex flex-col md:flex-row md:gap-4 my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                  <div className="flex gap-2 md:gap-4">
                    <div className="py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded cursor-pointer">
                      Organization Details
                    </div>
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Demographics
                    </div>
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Target
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Finance
                    </div>
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Set Schedule
                    </div>
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Review
                    </div>
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
                        onChange={handleChange("campaignName")}
                        defaultValue={values.campaignName}
                      />
                      <div className="mt-3">
                        <h2 className="text-lg font-semibold">
                          Select nature of business
                        </h2>
                        <div className="flex flex-col gap-3 mt-3 md:mt-3 form-control ">
                          <div className="flex flex-col md:flex-row gap-3 md:gap-7 p-6 card">
                            <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 ">
                              <label class="cursor-pointer label">
                                <input
                                  type="radio"
                                  name="campaignName"
                                  checked="checked"
                                  class="radio"
                                  value="Limited Liability Company"
                                  onChange={handleChange("natureOfBusiness")}
                                />
                                <span class="label-text">
                                  <h4 className="text-xs font-normal">
                                    Limited Liability Company
                                  </h4>
                                </span>
                              </label>
                            </div>
                            <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 form-control">
                              <label class="cursor-pointer label">
                                <input
                                  type="radio"
                                  name="campaignName"
                                  checked="checked"
                                  class="radio"
                                  value="Sole Proprietorship"
                                  onChange={handleChange("natureOfBusiness")}
                                />
                                <span class="label-text">
                                  <h4 className="text-xs font-normal">
                                    Sole Proprietorship
                                  </h4>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="flex gap-2 border-2 border-gray-400 items-center py-2 pl-2 w-60 md:w-52 form-control">
                            <label class="cursor-pointer label">
                              <input
                                type="radio"
                                name="campaignName"
                                checked="checked"
                                class="radio"
                                value="Unregistered"
                                onChange={handleChange("natureOfBusiness")}
                              />
                              <span class="label-text">
                                <h4 className="text-xs font-normal">
                                  Unregistered
                                </h4>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-6 border-b-2 border-gray-400 w-11/12">
                    <h3 className="text-lg font-semibold">Select a category</h3>
                    <div
                      className="my-4 grid grid-cols-2 md:grid-cols-3 gap-y-4 lg:w-4/6"
                      onChange={handleChange("campaignCategory")}
                      defaultValue={values.campaignCategory}
                    >
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Community"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Community</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Food and Drink"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Food and Drink
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Sports"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Sports</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Transport"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Transport</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Retail"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Retail</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Entertainment"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Entertainment
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Hospitality"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Hospitality
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Travel"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Travel</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Tourism"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Tourism</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Education"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Education</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Health and Fitness"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Health and Fitness
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Politics"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Politics</div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Technology"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Technology
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Creative Arts"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Creative Arts
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label class="cursor-pointer label">
                          <input
                            type="checkbox"
                            name="campaignCategory"
                            checked="checked"
                            className="h-7 w-7 checkbox"
                            value="Leisure"
                            onChange={handleChange("campaignCategory")}
                          />
                          <span class="label-text">
                            <div className="text-sm font-medium">Leisure</div>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-8 border-b-2 border-gray-400 md:w-9/12 lg:w-3/5">
                    <h3 className="text-lg font-semibold">Business Address</h3>
                    <div className="mt-3 md:w-4/5">
                      <div
                        className="flex flex-col md:flex-row gap-5 lg:gap-8"
                        onChange={handleChange("business_address_country")}
                        defaultValue={values.business_address_country}
                      >
                        <select
                          id="country"
                          name="business_address_country"
                          className="border-2 border-gray-400 h-10 pl-3 outline-none"
                          onChange={handleChange("business_address_country")}
                          defaultValue={values.business_address_country}
                        >
                          <option disabled="disabled" selected="selected">
                            Choose Country
                          </option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Egypt">Egypt</option>
                          <option value="South Africa">South Africa</option>
                        </select>
                        <input
                          placeholder="City"
                          name="business_address_city"
                          className="border-2 border-gray-400 h-10 pl-3 outline-none"
                          onChange={handleChange("business_address_city")}
                          defaultValue={values.business_address_city}
                        />
                      </div>
                      <div className="my-5">
                        <input
                          name="business_address_office"
                          placeholder="Office Address"
                          className="border-2 border-gray-400 h-10 w-full pl-3 outline-none"
                          onChange={handleChange("business_address_office")}
                          defaultValue={values.business_address_office}
                        />
                      </div>
                      <div className="flex flex-col gap-3 mt-5">
                        <label className="text-lg font-semibold">
                          Phone Number
                        </label>
                        <div className="flex">
                          <div className="px-2 flex items-center w-24 border-2 border-gray-400 border-r">
                            <Menu as="div" className="w-24">
                              <Menu.Button className="flex w-full items-center ">
                                <div className="flex text-base font-medium text-gray-400 pl-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                  {this.state.num}
                                </div>
                                <div className="ml-auto">
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
                                <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-20 mt-5 pt-2 pb-4 pl-2 pr-4 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div>
                                    <div
                                      onClick={() =>
                                        this.setState({ num: "+351" })
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      +351
                                    </div>
                                    <div
                                      onClick={() =>
                                        this.setState({ num: "+541" })
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      +541
                                    </div>
                                    <div
                                      onClick={() =>
                                        this.setState({ num: "+031" })
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      +031
                                    </div>
                                    <div
                                      onClick={() =>
                                        this.setState({ num: "+333" })
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      +333
                                    </div>
                                    <div
                                      onClick={() =>
                                        this.setState({ num: "+222" })
                                      }
                                      className="hover:text-blue-600"
                                    >
                                      +222
                                    </div>
                                  </div>
                                </Menu>
                              </Transition>
                            </Menu>
                          </div>
                          <input
                            className="border-2 border-l border-gray-400 h-10 w-full pl-3 outline-none"
                            name="phoneNumber"
                            onChange={handleChange("phoneNumber")}
                            defaultValue={values.phoneNumber}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 pb-5 border-b-2 border-gray-400 md:w-9/12 lg:w-3/5">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold">
                        Give investors a brief about your Business
                      </h3>
                      <p className="text-sm text-gray-600">
                        Give a brief expanation of your business. This enable
                        investors to understand your business
                      </p>
                      <div className="md:w-4/5 mt-2">
                        <textarea
                          className="border-2 border-l border-gray-400 h-40 w-full py-2 px-3 text-sm outline-none"
                          placeholder="People are far more likely to support your project if they know Link little bit about you and what you do."
                          name="investorBrief"
                          onChange={handleChange("investorBrief")}
                          defaultValue={values.investorBrief}
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
                        essence and how the money you are raising will be used
                        to grow your business. Upload the video as unlisted on
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
                                name="pitchDeck"
                                multiple
                                className="sr-only"
                                onChange={handleChange("pitchDeck")}
                                defaultValue={values.pitchDeck}
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
                      <div className="flex gap-8 card p-6">
                        <div className="flex gap-1 items-center form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <h4 className="text-sm font-medium">Yes</h4>
                            </span>
                            <input
                              type="radio"
                              name="familiarWithCrowdFunding"
                              checked="checked"
                              class="radio"
                              value="Yes"
                              onChange={handleChange(
                                "familiarWithCrowdFunding"
                              )}
                            />
                          </label>
                        </div>
                        <div className="flex gap-1 items-center form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <h4 className="text-sm font-medium">No</h4>
                            </span>
                            <input
                              type="radio"
                              name="familiarWithCrowdFunding"
                              checked="checked"
                              class="radio"
                              value="No"
                              onChange={handleChange(
                                "familiarWithCrowdFunding"
                              )}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-base font-semibold">
                        Do you operate Link store on Gaged?
                      </h3>
                      <div
                        className="flex gap-8 card p-6"
                        onChange={handleChange("storeOnGaged")}
                      >
                        <div className="flex gap-1 items-center form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <h4 className="text-sm font-medium">Yes</h4>
                            </span>
                            <input
                              type="radio"
                              name="storeOnGaged"
                              checked="checked"
                              class="radio"
                              value="Yes"
                              onChange={handleChange("storeOnGaged")}
                            />
                          </label>
                        </div>
                        <div className="flex gap-1 items-center form-control">
                          <label class="cursor-pointer label">
                            <span class="label-text">
                              <h4 className="text-sm font-medium">No</h4>
                            </span>
                            <input
                              type="radio"
                              name="storeOnGaged"
                              checked="checked"
                              class="radio"
                              value="No"
                              onChange={handleChange("storeOnGaged")}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-10 w-4/5 md:w-3/5 lg:w-1/2">
                    <button
                      className="text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white"
                      onClick={this.back}
                    >
                      Back
                    </button>

                    <button
                      className="text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500"
                      onClick={this.continue}
                    >
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
}

export default Organisation;
