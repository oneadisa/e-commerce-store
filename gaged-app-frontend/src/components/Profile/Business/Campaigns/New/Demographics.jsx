/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import left from "../../../../../images/left.svg";
import right from "../../../../../images/right.svg";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";
// import { Link } from "react-router-dom";

class Demographics extends Component {
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
                <h2 className="text-lg font-semibold">2 of 6</h2>
                <div className="flex flex-col md:gap-4 md:flex-row my-2 py-2 px-1 md:px-3 bg-magenta-blue text-base font-medium">
                  <div className="flex gap-2 md:gap-4">
                    <div className="cursor-pointer p-1 md:p-2 hover:text-medium-blue">
                      Organization Details
                    </div>
                    <div className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white text-medium-blue rounded">
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
                <div className="mt-3">
                  <h2 className="text-lg font-semibold">
                    Tell us a bit about your customers
                  </h2>
                  <div className="py-5 mt-3 border-t-2 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                    <h3 className="text-lg font-semibold">
                      Who are your ideal target audience?
                    </h3>
                    <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6 p-6 card">
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Children (0-11)
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_age"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("ideal_target_audience_age")}
                            value="Children (0-11)"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Youths (12-25)
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_age"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("ideal_target_audience_age")}
                            value="Youths (12-25)"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Older (60+)
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_age"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("ideal_target_audience_age")}
                            value="Older (60+)"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="py-5 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                    <h3 className="text-lg font-semibold">
                      Health issues or disabilities
                    </h3>
                    <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6 p-6 card">
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Physical disabilities
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_health_issues_or_disabilities"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange(
                              "ideal_target_audience_health_issues_or_disabilities"
                            )}
                            value="Physical disabilities"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Addiction issues
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_health_issues_or_disabilities"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange(
                              "ideal_target_audience_health_issues_or_disabilities"
                            )}
                            value="Addiction Issues"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center w-full form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Coognitive or learning disabilities
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="ideal_target_audience_health_issues_or_disabilities"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange(
                              "ideal_target_audience_health_issues_or_disabilities"
                            )}
                            value="Cognitive Or Learning Disabilities"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="py-5 border-b-2 border-gray-400 md:w-3/4 lg:w-3/5">
                    <h3 className="text-lg font-semibold">Gender</h3>
                    <div className="my-4 grid grid-cols-2 gap-y-4 lg:w-4/6 p-6 card">
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">Male</div>
                          </span>
                          <input
                            type="checkbox"
                            name="gender"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("gender")}
                            value="Male"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">Female</div>
                          </span>
                          <input
                            type="checkbox"
                            name="gender"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("gender")}
                            value="Female"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center w-full form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Gender Neutral
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="gender"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("gender")}
                            value="Gender Neutral"
                          />
                        </label>
                      </div>
                      <div className="flex gap-2 items-center w-full form-control">
                        <label class="cursor-pointer label">
                          <span class="label-text">
                            <div className="text-sm font-medium">
                              Non-binary
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            name="gender"
                            checked="checked"
                            className="checkbox h-7 w-7"
                            onChange={handleChange("gender")}
                            value="Non-Binary"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-10 md:w-3/4 lg:w-3/5">
                    <button
                      className="flex gap-5 items-center text-base text-gray-500 font-medium bg-gray-300 h-10 w-32 hover:bg-Dark-blue hover:text-white"
                      onClick={this.back}
                    >
                      <img alt="" src={left} />
                      <div>Back</div>
                    </button>

                    <button
                      className="flex gap-5 items-center text-base font-medium bg-Dark-blue text-white h-10 w-32 hover:bg-gray-300 hover:text-gray-500"
                      onClick={this.continue}
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
}

export default Demographics;
