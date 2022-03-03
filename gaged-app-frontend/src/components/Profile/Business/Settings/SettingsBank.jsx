/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";

function SettingsBank(props) {
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
      <div className="lg:bg-magenta-blue lg:px-2 h-screen">
        <div className="block lg:flex lg:space-x-32">
          <div className="hidden lg:block">
            <DashBoard />
          </div>
          <div className="lg:hidden">{open && <DashBoard />}</div>
          <div className="flex flex-col lg:w-4/5">
            <div className="px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12">
              <div className="flex gap-5 lg:gap-10">
                <button
                  className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue"
                  onClick={first}
                >
                  General
                </button>
                <button
                  className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue"
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
            <div className="px-3 lg:px-7 pt-5 pb-8 lg:py-5 lg:pb-12 mt-4 lg:mt-5 lg:mb-14 bg-white">
              <h2 className="text-2xl font-semibold">
                Set up and verify your your bankCode account
              </h2>
              <div className="my-5">
                <div className="flex flex-col gap-2 md:w-3/4">
                  <select
                    id="bankCode"
                    name="bankCode"
                    class="form-control form-control-alternative"
                    onChange={(e) => props.setbankCode(e.target.value)}
                  >
                    <option value="">
                      <label
                        className="text-lg font-normal"
                        for="input-last-name"
                      >
                        <label className="text-lg font-normal">
                          Select Bank
                        </label>{" "}
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
                    <option value="50746">Petra Mircofinance Bank Plc</option>
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
                    <option value="566">VFD Microfinance Bank Limited</option>
                    <option value="035">Wema Bank</option>
                    <option value="057">Zenith Bank</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4 md:flex-row mt-3">
                  <div className="flex flex-col gap-2 md:w-2/5">
                    <label className="text-lg font-normal">Account Name</label>
                    <input
                      placeholder="Account Name"
                      className="border-2 py-2 pl-5 rounded outline-none"
                      onChange={(e) => props.setbankAccountName(e.target.value)}
                      name="bankAccountName"
                      value={props.businessCredentials.bankAccountName}
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:w-4/12">
                    <label className="text-lg font-normal">
                      Account Number
                    </label>
                    <input
                      placeholder="Account Number"
                      className="border-2 py-2 pl-5 rounded outline-none"
                      onChange={(e) =>
                        props.setbankAccountNumber(e.target.value)
                      }
                      name="bankAccountNumber"
                      value={props.businessCredentials.bankAccountNumber}
                    />
                  </div>
                </div>
                <div className="mt-12 md:mt-16 pb-8 border-b-gray-300 border-b-2">
                  <button
                    className="px-10 md:px-16 py-2 bg-Dark-blue text-white border-2 rounded-md hover:bg-white hover:text-Dark-blue"
                    onClick={props.updateProfileSubmitHandler}
                  >
                    Verify account
                  </button>
                  <p className="mt-2 text-sm font-medium">
                    Verification may take 2-3 days business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBank;
