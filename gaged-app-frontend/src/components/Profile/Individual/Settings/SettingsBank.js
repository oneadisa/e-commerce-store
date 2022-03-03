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
} from "../../../../actions/userActions";
import { UPDATE_USER_PROFILE_RESET } from "../../../../constants/userConstants";
import Loader from "../../../Layout/Loader/Loader";
import MetaData from "../../../Layout/metaData";

function SettingsBankIndividual() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isUpdated } = useSelector(
    (state: RootStateOrAny) => state.userProfile
  );
  const { userInfo } = useSelector((state: RootStateOrAny) => state.user);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [pic, setpic] = useState("");
  const [twitter, settwitter] = useState("");
  const [faceBook, setfaceBook] = useState("");
  const [whatsApp, setwhatsApp] = useState("");
  const [isAdmin, setisAdmin] = useState("");
  const [role, setrole] = useState("");
  const [meansOfID, setmeansOfID] = useState("");
  const [IDpic, setIDpic] = useState("");
  const [regNum, setregNum] = useState("");
  const [natureOfBusiness, setnatureOfBusiness] = useState("");
  const [personalEmail, setpersonalEmail] = useState("");
  const [businessAddress, setbusinessAddress] = useState("");
  const [cacCertificate, setcacCertificate] = useState("");
  const [formCO7, setformCO7] = useState("");
  const [bankCode, setbankCode] = useState("");
  const [bankAccountName, setbankAccountName] = useState("");
  const [bankAccountNumber, setbankAccountNumber] = useState("");

  useEffect(() => {
    if (userInfo) {
      setfirstName(userInfo.firstName);
      setlastName(userInfo.lastName);
      setemail(userInfo.email);
      setphoneNumber(userInfo.phoneNumber);
      setpassword(userInfo.password);
      setpic(userInfo.pic);
      settwitter(userInfo.twitter);
      setfaceBook(userInfo.faceBook);
      setwhatsApp(userInfo.whatsApp);
      setisAdmin(userInfo.isAdmin);
      setrole(userInfo.role);
      setmeansOfID(userInfo.meansOfID);
      setIDpic(userInfo.IDpic);
      setregNum(userInfo.regNum);
      setnatureOfBusiness(userInfo.natureOfBusiness);
      setpersonalEmail(userInfo.personalEmail);
      setbusinessAddress(userInfo.businessAddress);
      setcacCertificate(userInfo.cacCertificate);
      setformCO7(userInfo.formCO7);
      setbankCode(userInfo.bankCode);
      setbankAccountName(userInfo.bankAccountName);
      setbankAccountNumber(userInfo.bankAccountNumber);
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
  }, [dispatch, error, alert, navigate, userInfo, isUpdated]);

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
    myForm.set("firstName", firstName);
    myForm.set("lasrName", lastName);
    myForm.set("email", email);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("password", password);
    myForm.set("pic", pic);
    myForm.set("twitter", twitter);
    myForm.set("faceBook", faceBook);
    myForm.set("whatsApp", whatsApp);
    myForm.set("isAdmin", isAdmin);
    myForm.set("role", role);
    myForm.set("meansOfID", meansOfID);
    myForm.set("IDpic", IDpic);
    myForm.set("regNum", regNum);
    myForm.set("natureOfBusiness", natureOfBusiness);
    myForm.set("personalEmail", personalEmail);
    myForm.set("businessAddress", businessAddress);
    myForm.set("cacCertificate", cacCertificate);
    myForm.set("formCO7", formCO7);
    myForm.set("bankCode", bankCode);
    myForm.set("bankAccountName", bankAccountName);
    myForm.set("bankAccountNumber", bankAccountNumber);
    dispatch(updateProfile(myForm));
  };

  // function handleChange(e) {
  // const { value, name } = e.currentTarget;
  // set(prevValue) => {
  // return {
  // ...prevValue,
  // [name]: value,
  // };
  // });
  // }
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
                        <select
                          id="bankCode"
                          name="bankCode"
                          className="form-control form-control-alternative"
                          onChange={(e) => setbankCode(e.target.value)}
                        >
                          <option value="">
                            <label
                              className="text-lg font-normal"
                              htmlFor="input-last-name"
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
                            onChange={(e) => setbankAccountName(e.target.value)}
                            name="bankAccountName"
                            value={bankAccountName}
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
                              setbankAccountNumber(e.target.value)
                            }
                            name="bankAccountNumber"
                            value={bankAccountNumber}
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
