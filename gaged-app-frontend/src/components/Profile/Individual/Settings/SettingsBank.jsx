/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { Fragment } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  updateProfile,
  loadUser,
} from "../../../../actions/signedUpUserInfoActions";
import { UPDATE_USER_PROFILE_RESET } from "../../../../constants/signedUpUserInfoConstants";
import Loader from "../../../Layout/Loader/Loader";
import MetaData from "../../../Layout/metaData";

function SettingsBankIndividual() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isUpdated } = useSelector(
    (state: RootStateOrAny) => state.userProfile
  );
  const { signedUpUserInfo } = useSelector(
    (state: RootStateOrAny) => state.signedUpUserLogin
  );

  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    pic: "",
    twitter: "",
    facebook: "",
    whatsApp: "",
    isAdmin: "",
    role: "",
    meansOfID: "",
    IDpic: "",
    regNum: "",
    natureOfBusiness: "",
    personalEmail: "",
    businessAddress: "",
    cacCertificate: "",
    formCO7: "",
    bankCode: "",
    bankAccountName: "",
    bankAccountNumber: "",
  });
  useEffect(() => {
    if (signedUpUserInfo) {
      setUserCredentials.firstName(signedUpUserInfo.firstName);
      setUserCredentials.lastName(signedUpUserInfo.lastName);
      setUserCredentials.email(signedUpUserInfo.email);
      setUserCredentials.phoneNumber(signedUpUserInfo.phoneNumber);
      setUserCredentials.password(signedUpUserInfo.password);
      setUserCredentials.pic(signedUpUserInfo.pic);
      setUserCredentials.twitter(signedUpUserInfo.twitter);
      setUserCredentials.facebook(signedUpUserInfo.facebook);
      setUserCredentials.whatsApp(signedUpUserInfo.whatsApp);
      setUserCredentials.isAdmin(signedUpUserInfo.isAdmin);
      setUserCredentials.role(signedUpUserInfo.role);
      setUserCredentials.meansOfID(signedUpUserInfo.meansOfID);
      setUserCredentials.IDpic(signedUpUserInfo.IDpic);
      setUserCredentials.regNum(signedUpUserInfo.regNum);
      setUserCredentials.natureOfBusiness(signedUpUserInfo.natureOfBusiness);
      setUserCredentials.personalEmail(signedUpUserInfo.personalEmail);
      setUserCredentials.businessAddress(signedUpUserInfo.businessAddress);
      setUserCredentials.cacCertificate(signedUpUserInfo.cacCertificate);
      setUserCredentials.formCO7(signedUpUserInfo.formCO7);
      setUserCredentials.bankCode(signedUpUserInfo.bankCode);
      setUserCredentials.bankAccountName(signedUpUserInfo.bankAccountName);
      setUserCredentials.bankAccountNumber(signedUpUserInfo.bankAccountNumber);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());
      navigate("/settings/individual/bank");
      dispatch({
        type: UPDATE_USER_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, navigate, signedUpUserInfo, isUpdated]);

  // const updateProfileDataChange = (e) => {
  // const reader = new FileReader();
  // reader.onload = () => {
  // if (reader.readyState === 2) {
  // setAvatarPreview(reader.result);
  // setAvatar(reader.result);
  // }
  // };
  // reader.readAsDataURL(e.target.files[0]);
  // };

  const updateProfileSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("firstName", userCredentials.firstName);
    myForm.set("lasrName", userCredentials.lastName);
    myForm.set("email", userCredentials.email);
    myForm.set("phoneNumber", userCredentials.phoneNumber);
    myForm.set("password", userCredentials.password);
    myForm.set("pic", userCredentials.pic);
    myForm.set("twitter", userCredentials.twitter);
    myForm.set("facebook", userCredentials.facebook);
    myForm.set("whatsApp", userCredentials.whatsApp);
    myForm.set("isAdmin", userCredentials.isAdmin);
    myForm.set("role", userCredentials.role);
    myForm.set("meansOfID", userCredentials.meansOfID);
    myForm.set("IDpic", userCredentials.IDpic);
    myForm.set("regNum", userCredentials.regNum);
    myForm.set("natureOfBusiness", userCredentials.natureOfBusiness);
    myForm.set("personalEmail", userCredentials.personalEmail);
    myForm.set("businessAddress", userCredentials.businessAddress);
    myForm.set("cacCertificate", userCredentials.cacCertificate);
    myForm.set("formCO7", userCredentials.formCO7);
    myForm.set("bankCode", userCredentials.bankCode);
    myForm.set("bankAccountName", userCredentials.bankAccountName);
    myForm.set("bankAccountNumber", userCredentials.bankAccountNumber);
    dispatch(updateProfile(myForm));
  };

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setUserCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Update Profile" />
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
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        General
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue">
                        Bank Information
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Store settings
                      </p>
                    </div>
                  </div>
                  <div className="px-3 lg:px-7 pt-5 pb-8 lg:py-5 lg:pb-12 mt-4 lg:mt-5 lg:mb-14 bg-white">
                    <h2 className="text-2xl font-semibold">
                      Set up and verify your your bankCode account
                    </h2>
                    <div className="my-5">
                      <div className="flex flex-col gap-2 md:w-3/4">
                        <label className="text-lg font-normal">
                          Select Bank
                        </label>
                        <select
                          id="bankCode"
                          name="bankCode"
                          class="form-control form-control-alternative"
                          onChange={(e) =>
                            setUserCredentials.bankCode(e.target.value)
                          }
                        >
                          <option value="">
                            <label
                              class="form-control-label border-2 py-2 pl-5 rounded outline-none"
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
                          <option value="501">
                            FSDH Merchant Bank Limited
                          </option>
                          <option value="00103">Globus Bank</option>
                          <option value="058">Guaranty Trust Bank</option>
                          <option value="51251">
                            Hackman Microfinance Bank
                          </option>
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
                          <option value="51310">
                            Sparkle Microfinance Bank
                          </option>
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
                      <div className="flex flex-col gap-4 md:flex-row mt-3">
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Account Name
                          </label>
                          <input
                            placeholder="Account Name"
                            className="border-2 py-2 pl-5 rounded outline-none"
                            onChange={(e) => handleChange(e)}
                            name="bankAccountName"
                            value={userCredentials.bankAccountName}
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:w-4/12">
                          <label className="text-lg font-normal">
                            Account Number
                          </label>
                          <input
                            placeholder="Account Number"
                            className="border-2 py-2 pl-5 rounded outline-none"
                            onChange={(e) => handleChange(e)}
                            name="bankAccountNumber"
                            value={userCredentials.bankAccountNumber}
                          />
                        </div>
                      </div>
                      <div className="mt-12 md:mt-16 pb-8 border-b-gray-300 border-b-2">
                        <button
                          className="px-10 md:px-16 py-2 bg-Dark-blue text-white border-2 rounded-md hover:bg-white hover:text-Dark-blue"
                          onClick={updateProfileSubmitHandler}
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
        </Fragment>
      )}
    </Fragment>
  );
}

export default SettingsBankIndividual;
