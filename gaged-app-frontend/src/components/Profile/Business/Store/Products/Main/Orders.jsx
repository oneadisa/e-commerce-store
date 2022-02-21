/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  loadBusiness,
} from "../../../../../../actions/businessActions";
import OrderCard from "../orderCard";

import { useAlert } from "react-alert";
import MetaData from "../../../../../Layout/metaData";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Loader from "../../../../../Layout/Loader/Loader";

function ProductsOrders() {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { signedUpBusinessInfo, loading, error } = useSelector(
    (state) => state.business
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } else if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(loadBusiness());
  }, [dispatch, alert, error]);

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {" "}
      {loading || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Orders" />
          <div className="mx-auto">
            <Header
              handleNav={() => setOpen(!open)}
              button={
                open ? (
                  <i className="fas fa-times"> </i>
                ) : (
                  <i className="fas fa-bars"> </i>
                )
              }
            />{" "}
            <div className="lg:bg-magenta-blue lg:px-4 h-screen">
              <div className="block lg:flex lg:space-x-36">
                <div className="hidden lg:block">
                  <DashBoard />
                </div>{" "}
                <div className="lg:hidden"> {open && <DashBoard />} </div>{" "}
                <div className="flex flex-col lg:space-y-10 lg:w-4/5">
                  <div className="flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5">
                    <div className="flex justify-between lg:gap-10">
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Overview{" "}
                      </p>{" "}
                      <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
                        Products{" "}
                      </p>{" "}
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Orders{" "}
                      </p>{" "}
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Customers{" "}
                      </p>{" "}
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Reviews{" "}
                      </p>{" "}
                    </div>{" "}
                    <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                      Visit store{" "}
                    </button>{" "}
                  </div>{" "}
                  <div className="mt-7 py-5 px-8 bg-white">
                    <h2 className="text-2xl font-normal"> Orders </h2>{" "}
                    {/* <div className="flex mt-3 text-base gap-5 text-Dark-grey"> */}{" "}
                    {/* <p className="text-medium-blue">All</p> */}{" "}
                    {/* <p>Pending</p> */} {/* <p>Delivered</p> */}{" "}
                    {/* </div> */}{" "}
                    {signedUpBusinessInfo.orders &&
                    signedUpBusinessInfo.orders[0] ? (
                      <>
                        <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                          <p> # </p> <p> ORDER </p> <p> CUSTOMER NAME </p>{" "}
                          <p> PHONE </p> <p> TOTAL </p> <p> STATUS </p>{" "}
                          <p> ACTION </p>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          {signedUpBusinessInfo.orders &&
                            signedUpBusinessInfo.orders.reverse.map((order) => (
                              <OrderCard key={order._id} order={order} />
                            ))}{" "}
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                          <p> # </p> <p> ORDER </p> <p> CUSTOMER NAME </p>{" "}
                          <p> PHONE </p> <p> TOTAL </p> <p> STATUS </p>{" "}
                          <p> ACTION </p>{" "}
                        </div>{" "}
                        <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                          You have no orders yet.{" "}
                        </p>{" "}
                      </>
                    )}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </Fragment>
      )}{" "}
    </Fragment>
  );
}

export default ProductsOrders;
