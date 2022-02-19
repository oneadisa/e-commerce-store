/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import file from "../../../../images/file.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
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
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";

function SettingsGeneralIndividual() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [message, setMessage] = useState(null);
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
    faceBook: "",
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
    confirmPassword: "",
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
      setUserCredentials.faceBook(signedUpUserInfo.faceBook);
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
      navigate("/settings/individual/general");
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
    myForm.set("faceBook", userCredentials.faceBook);
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
    if (userCredentials.password !== userCredentials.confirmPassword) {
      setMessage("Oops, Passwords do not match. Please try again.");
    } else dispatch(updateProfile(myForm));
  };

  function postIDpic(pics) {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gagedio");
      data.append("cloud_name", "gaged");
      fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserCredentials.IDPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // return setPicMessage("Please select at least one image.");
    }
  }
  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setUserCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // function postDetails(pics) {
  // if (
  // pics.type === "image/jpeg" ||
  // pics.type === "image/png" ||
  // pics.type === "image/jpg"
  // ) {
  // const data = new FormData();
  // data.append("file", pics);
  // data.append("upload_preset", "gagedio");
  // data.append("cloud_name", "gaged");
  // fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
  // method: "post",
  // body: data,
  // })
  // .then((res) => res.json())
  // .then((data) => {
  // console.log(data);
  // setUserCredentials.IDPic(data.url.toString());
  // })
  // .catch((err) => {
  // console.log(err);
  // });
  // } else {
  //return setPicMessage("Please select at least one image.");
  // }
  // }

  const [open, setOpen] = useState(false);

  const [identity, setIdentity] = useState("Select");

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
            {message && <GeneralErrorMessage>{message}</GeneralErrorMessage>}
            {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
            <div className="lg:bg-magenta-blue lg:px-2 h-full">
              <div className="block lg:flex lg:space-x-32">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>
                <div className="lg:hidden">{open && <DashBoard />}</div>
                <div className="flex flex-col lg:w-4/5">
                  <div className="px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12">
                    <div className="flex gap-5 lg:gap-10">
                      <p className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue">
                        General
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Bank Information
                      </p>
                    </div>
                  </div>
                  <div className="px-3 lg:px-6 pt-5 pb-8 lg:py-5 lg:pb-14 mt-4 lg:mt-5 lg:mb-14 bg-white">
                    <h2 className="text-2xl font-semibold">
                      Personal Information
                    </h2>
                    <div className="mt-5">
                      <div className="flex flex-col border-b-2 pb-7 md:pb-14">
                        <div className="flex flex-col md:flex-row gap-5 lg:gap-5">
                          <div className="flex flex-col gap-2 md:w-1/4">
                            <label className="text-lg font-normal">
                              First Name
                            </label>
                            <input
                              placeholder="First Name"
                              className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                              name="firstName"
                              value={userCredentials.firstName}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:w-1/4">
                            <label className="text-lg font-normal">
                              Last Name
                            </label>
                            <input
                              placeholder="Last Name"
                              className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                              name="lastName"
                              value={userCredentials.lastName}
                              onChange={(e) => handleChange(e)}
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
                              value={userCredentials.phoneNumber}
                              onChange={(e) => handleChange(e)}
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
                            value={userCredentials.email}
                            onChange={(e) => handleChange(e)}
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
                                      onChange={(e) => handleChange(e)}
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
                                            setIdentity(
                                              "International Passport"
                                            )
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
                                onChange={(e) => handleChange(e)}
                                name="regNum"
                                value={userCredentials.regNum}
                              />
                            </div>
                          </div>

                          <div className="flex flex-col md:w-1/2">
                            <label className="text-lg font-normal">
                              Upload ID
                            </label>
                            <p className="text-sm font-medium">
                              Upload your valid means of ID
                            </p>
                            <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                              <label className="text-base font-normal text-gray-700 mt-3">
                                <img src={file} className="h-20 w-20" />
                              </label>

                              <div>
                                <input
                                  onChange={(e) => postIDpic(e.target.files[0])}
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

                      <div className="py-10">
                        <h2 className="text-2xl font-semibold">
                          Change Password
                        </h2>
                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                          <div className="flex flex-col gap-2">
                            <label className="text-lg font-normal">
                              New Password
                            </label>
                            <input
                              placeholder="New Password"
                              className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                              onChange={(e) => handleChange(e)}
                              name="password"
                              value={userCredentials.password}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-lg font-normal">
                              Confirm Password
                            </label>
                            <input
                              placeholder="Confirm Password"
                              className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                              onChange={(e) => handleChange(e)}
                              name="confirmPassword"
                              value={userCredentials.confirmPassword}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-5 md:mt-10 justify-center lg:justify-start">
                        <button
                          className="text-white text-lg border border-Dark-blue font-medium bg-Dark-blue px-14 py-2 rounded hover:bg-white hover:text-Dark-blue"
                          onClick={updateProfileSubmitHandler}
                        >
                          Save
                        </button>
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

// {
//   /* <form class="flex items-center space-x-6"> */
// }
// {
//   /* <div class="shrink-0"> */
// }
// {
//   /* <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" /> */
// }
// {
//   /* </div> */
// }
// {
//   /* <label class="block"> */
// }
// {
//   /* <span class="sr-only">Choose profile photo</span> */
// }
// {
//   /* <input type="file" class="block w-full text-sm text-gray-500 */
// }
// //   file:mr-4 file:py-2 file:px-4
// //   file:rounded-full file:border-0
// //   file:text-sm file:font-semibold
// //   file:bg-violet-50 file:text-violet-700
// //   hover:file:bg-violet-100
// // "/>
// {
//   /* </label> */
// }
// {
//   /* </form> */
// }

export default SettingsGeneralIndividual;
