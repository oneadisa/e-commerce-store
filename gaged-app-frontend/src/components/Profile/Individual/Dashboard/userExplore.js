//eslint-disable jsx-a11y/anchor-is-valid //
import React, { Fragment, useState, useEffect } from "react";
import Mainscreen from "../../../Layout/Mainscreen";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Loader from "../../../Layout/Loader/Loader";
import Header from "./Header";
import {
  clearErrors,
  getProduct,
} from "../../../../actions/storeProductsActions";
import DashBoard from "./DashBoard";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import {} from "react-router-dom";
import { getBusiness, logout } from "../../../../actions/businessActions";
import MetaData from "../../../Layout/metaData";
import BusinessCard from "../../../Home/businessCard";
import CampaignCard from "../../../Home/campaignCard";

// const categories = [
// "Laptop",
// "Footwear",
// "Bottom",
// "Tops",
// "Attire",
// "Camera",
// "SmartPhones",
// ];
function UserExplore() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let params = useParams();
  const signedUpUserLogin = useSelector(
    (state: RootStateOrAny) => state.signedUpUserLogin
  );
  const { signedUpUserInfo } = signedUpUserLogin;
  useEffect(() => {
    if (!signedUpUserInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, signedUpUserInfo]);

  useEffect(() => {}, [signedUpUserInfo]);

  const [open, setOpen] = useState(false);

  const alert = useAlert();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [price, setPrice] = useState([0, 25000]);
  // const [category, setCategory] = useState("");

  // const [ratings, setRatings] = useState(0);

  const {
    businesses,
    loading,
    error,
    // businessesCount,
    // resultPerPage,
    // filteredProductsCount,
  } = useSelector((state: RootStateOrAny) => state.businesses);

  // const {
  // campaigns
  // } = useSelector((state: RootStateOrAny) => state.campaigns);

  const keyword = params.keyword;

  // const setCurrentPageNo = (e) => {
  // setCurrentPage(e);
  // };

  // const priceHandler = (event, newPrice) => {
  // setPrice(newPrice);
  // };
  // let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getBusiness());
  }, [dispatch, keyword, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="EXPLORE -- GAGED" />
          <div className="mx-auto h-screen">
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

            <div className="lg:bg-magenta-blue lg:px-4 h-screen">
              <div className="block lg:flex lg:space-x-32 ">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>
                <div className="lg:hidden">{open && <DashBoard />}</div>
                <div className="lg:my-10 lg:space-y-10 lg:w-4/5 lg:h-2/5">
                  <div className="text-right pl-1 pr-10">
                    <Mainscreen
                      title={`Welcome Back ${
                        signedUpUserInfo && signedUpUserInfo.firstName
                      }`}
                    >
                      <Link to="/explore/stores">
                        <button className="bg-white text-black w-40 m-4 h-12 border-2 border-black py-3 rounded hover:bg-blue-800 hover: hover:text-gray-100">
                          Explore
                        </button>
                      </Link>
                    </Mainscreen>

                    <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          Businesses near you.
                        </h2>
                        <h4 className="text-lg font-bold my-2">
                          Explore the businesses in your locality. Shop with
                          ease.{" "}
                        </h4>
                        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8">
                          {businesses &&
                            businesses.reverse
                              .slice(0, 5)
                              .map((business) => (
                                <BusinessCard
                                  key={business._id}
                                  business={business}
                                  product={undefined}
                                />
                              ))}
                        </div>
                        <Link to="/explore/stores">
                          <button className="text-base font-medium text-Dark-blue">
                            See more
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white my-10 lg:pl-8 lg:pr-5 py-6">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          Campaign Overview
                        </h2>
                        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8">
                          {businesses.listOfCampaignsStarted &&
                            businesses.listOfCampaignsStarted.reverse
                              .slice(0, 5)
                              .map((campaign) => (
                                <CampaignCard
                                  key={campaign._id}
                                  campaign={campaign}
                                />
                              ))}
                        </div>
                        <Link to="/explore/campaigns">
                          <button className="text-base font-medium text-Dark-blue">
                            see more
                          </button>
                        </Link>
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

export default UserExplore;
