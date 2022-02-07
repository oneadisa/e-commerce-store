import React, { useState } from "react";
import left from "../../../../../images/left.svg";
import right from "../../../../../images/right.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import DashboardCamp from "./DashboardCamp";

function Finance(props) {
  const clear = (e) => {
    e.preventDefault();
    props.clear();
  };

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
      <div className="lg:bg-magenta-blue lg:px-3">
        <div className="block lg:flex lg:space-x-28">
          <div className="hidden lg:block">
            <DashboardCamp />
          </div>
          <div className="lg:hidden">{open && <DashboardCamp />}</div>
          <div className="bg-white lg:mt-3 lg:mb-8 pb-24 lg:w-3/4">
            <div className="flex flex-col px-2 md:px-4 py-2">
              <h2 className="text-lg font-semibold">4 of 6</h2>
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
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={third}
                  >
                    Target
                  </button>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="cursor-pointer py-1 md:py-2 px-1 md:px-3 bg-white
text-medium-blue rounded "
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
                    className="cursor-pointer p-1 md:p-2 hover:text-medium-blue"
                    onClick={sixth}
                  >
                    Review
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">Add your bank details</h2>
                <div className="mt-3 border-t-2 border-gray-400 md:w-3/4 lg:w-4/6">
                  <div className="py-4 text-base">
                    <div className="md:w-11/12 lg:w-5/6 leading-5">
                      You need Link valid bank account to set up your campaign.
                      This should be registered with your duly registered
                      business name.
                    </div>
                    <div className="md:w-11/12 lg:w-5/6 leading-5 mt-6">
                      While for unregistered business, the account should be
                      registered in the promoter’s name
                    </div>
                    <div className="leading-5 mt-1">
                      You may be required to verify your account before you are
                      enabled to initiate withdrawals. This verification will be
                      done as soon as Link bank account account is added.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="my-5 flex flex-col gap-7 md:w-3/5 lg:w-1/2">
                    <div className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none">
                      <select
                        id="bankCode"
                        name="bankCode"
                        class="form-control form-control-alternative"
                        onChange={(e) => props.handleChange(e)}
                      >
                        <option value="">
                          <label
                            class="form-control-label"
                            for="input-last-name"
                          >
                            Select Bank
                          </label>
                        </option>

                        <option value="801">Abbey Mortgage Bank</option>

                        <option value="044">Access Bank</option>

                        <option value="063">Access Bank (Diamond)</option>

                        <option value="035A">ALAT by WEMA</option>

                        <option value="401">ASO Savings and Loans</option>

                        <option value="50931">Bowen Microfinance Bank</option>

                        <option value="50823">CEMCS Microfinance Bank</option>

                        <option value="023">Citibank Nigeria</option>

                        <option value="559">Coronation Merchant Bank</option>

                        <option value="050">Ecobank Nigeria</option>

                        <option value="562">Ekondo Microfinance Bank</option>

                        <option value="50126">Eyowo</option>

                        <option value="070">Fidelity Bank</option>

                        <option value="51314">Firmus MFB</option>

                        <option value="011">First Bank of Nigeria</option>

                        <option value="214">First City Monument Bank</option>

                        <option value="501">FSDH Merchant Bank Limited</option>

                        <option value="00103">Globus Bank</option>

                        <option value="058">Guaranty Trust Bank</option>

                        <option value="51251">Hackman Microfinance Bank</option>

                        <option value="50383">Hasal Microfinance Bank</option>

                        <option value="030">Heritage Bank</option>

                        <option value="51244">Ibile Microfinance Bank</option>

                        <option value="50457">Infinity MFB</option>

                        <option value="301">Jaiz Bank</option>

                        <option value="082">Keystone Bank</option>

                        <option value="50211">Kuda Bank</option>

                        <option value="90052">
                          Lagos Building Investment Company Plc.
                        </option>

                        <option value="50563">Mayfair MFB</option>

                        <option value="50304">Mint MFB</option>

                        <option value="565">One Finance</option>

                        <option value="999991">PalmPay</option>

                        <option value="526">Parallex Bank</option>

                        <option value="311">Parkway - ReadyCash</option>

                        <option value="999992">Paycom</option>

                        <option value="50746">
                          Petra Mircofinance Bank Plc
                        </option>

                        <option value="076">Polaris Bank</option>

                        <option value="101">Providus Bank</option>

                        <option value="502">Rand Merchant Bank</option>

                        <option value="125">Rubies MFB</option>

                        <option value="51310">Sparkle Microfinance Bank</option>

                        <option value="221">Stanbic IBTC Bank</option>

                        <option value="068">Standard Chartered Bank</option>

                        <option value="232">Sterling Bank</option>

                        <option value="100">Suntrust Bank</option>

                        <option value="302">TAJ Bank</option>

                        <option value="51211">TCF MFB</option>

                        <option value="102">Titan Bank</option>

                        <option value="032">Union Bank of Nigeria</option>

                        <option value="033">United Bank For Africa</option>

                        <option value="215">Unity Bank</option>

                        <option value="566">
                          VFD Microfinance Bank Limited
                        </option>

                        <option value="035">Wema Bank</option>

                        <option value="057">Zenith Bank</option>
                      </select>
                    </div>
                    <input
                      className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Account Name"
                      name="bank_account_name"
                      onChange={(e) => props.handleChange(e)}
                      value={props.campaignCredentials.bank_account_name}
                    />
                    <input
                      className="h-10 w-full pl-5 text-sm border-2 border-gray-400 placeholder-gray-500 outline-none"
                      placeholder="Account Number"
                      name="bank_account_number"
                      onChange={(e) => props.handleChange(e)}
                      value={props.campaignCredentials.bank_account_number}
                    />
                  </div>
                  <div className="flex justify-between mt-14 md:w-3/5 lg:w-1/2">
                    <button
                      className="text-base text-gray-500 font-medium bg-white border-2 border-gray-400 h-10 w-32 hover:bg-Dark-blue hover:text-white hover:border-Dark-blue"
                      onClick={clear}
                    >
                      Clear
                    </button>
                    <button className="text-base font-medium bg-Dark-blue border-2 border-Dark-blue text-white h-10 w-32 hover:bg-white hover:text-gray-500 hover:border-gray-400">
                      Save
                    </button>
                  </div>
                  <div className="my-12 flex gap-2 lg:w-3/5">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="h-7 w-7 border-2 border-gray-400 checkbox"
                    />
                    <div className="text-sm">
                      I have read and agreed to the
                      <span className="text-medium-blue">
                        {" "}
                        Terms and conditions{" "}
                      </span>
                      of Gaged.io’s payments provider.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between md:w-8/12 lg:w-7/12">
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

export default Finance;
