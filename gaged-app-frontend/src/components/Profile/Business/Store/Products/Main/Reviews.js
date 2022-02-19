/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Fragment, useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAllIndividualOrders,
  getAllBusinessOrders,
} from "../../../../../../actions/businessActions";
import ReviewCard from "../reviewCard";
import IndividualReviewCard from "../individualReviewCard";
import { useAlert } from "react-alert";
import MetaData from "../../../../../Layout/MetaData";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Loader from "../../../../../Layout/Loader/Loader";

function ProductsReviews() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { individualReviews, loading, error } = useSelector(
    (state: RootStateOrAny) => state.reviews
  );
  const { businessReviews, loading, error } = useSelector(
    (state: RootStateOrAny) => state.businessBusinessnewProductReviews
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } else if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(getAllIndividualOrders());
    // dispatch(getAllBusinessOrders());
  }, [dispatch, alert, error, error]);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {loading || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Reviews" />
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
            <div className="lg:bg-magenta-blue lg:px-4 h-screen">
              <div className="block lg:flex lg:space-x-36">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>
                <div className="lg:hidden">{open && <DashBoard />}</div>
                <div className="flex flex-col lg:space-y-10 lg:w-4/5">
                  <div className="flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5">
                    <div className="flex justify-between lg:gap-10">
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Overview
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer border-b-2 hover:text-Dark-blue">
                        Products
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Orders
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Customers
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer border-Dark-blue hover:text-Dark-blue ">
                        Reviews
                      </p>
                    </div>
                    <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                      Visit store
                    </button>
                  </div>
                  <div className="mt-7 py-5 px-8 bg-white">
                    <h2 className="text-2xl font-normal">Reviews</h2>
                    {/* <div className='flex mt-3 text-base gap-5 text-Dark-grey'> */}
                    {/* <p className='text-medium-blue'>All</p> */}
                    {/* <p>Pending</p> */}
                    {/* <p>Delivered</p> */}
                    {/* </div> */}
                    {businessReviews && businessReviews[0] ? (
                      <>
                        <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                          <p>#</p>
                          <p>PRODUCT</p>
                          <p>RATING</p>
                          <p>CUSTOMER NAME</p>
                          <p>PHONE</p>
                          <p>COMMENT</p>
                        </div>
                        <div>
                          {businessReviews &&
                            businessReviews.map((review) => (
                              <ReviewCard key={review._id} review={review} />
                            ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                          <p>#</p>
                          <p>PRODUCT</p>
                          <p>RATING</p>
                          <p>CUSTOMER NAME</p>
                          <p>PHONE</p>
                          <p>COMMENT</p>
                          <p>STATUS</p>
                        </div>
                        <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                          No Businesses have placed any ordres yet.
                        </p>
                      </>
                    )}
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

export default ProductsReviews;
