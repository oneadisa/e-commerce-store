/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./Products.css";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllIndividualOrders,
  getAllBusinessOrders,
} from "../../../../../../actions/businessActions";
import BusinessCustomerCard from "../businessCustomerCard";
import IndividualCustomerCard from "../individualCustomerCard";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Loader from "../../../../../Layout/Loader";

function ProductsCustomers() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { customers, loading, error } = useSelector(
    (state: RootStateOrAny) => state.businessIndividualProductCustomers
  );
  const { businessCustomers, loadingBusiness, errorBusiness } = useSelector(
    (state: RootStateOrAny) => state.businessBusinessProductCustomers
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } else if (errorBusiness) {
      alert.error(errorBusiness);
      dispatch(clearErrors());
    }
    dispatch(getAllIndividualCustomers());
    dispatch(getAllBusinessCustomers());
  }, [dispatch, alert, error, errorBusiness]);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {loadingBusiness || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Customers" />
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
                      <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
                        Products
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Orders
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Customers
                      </p>
                      <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                        Customers
                      </p>
                    </div>
                    <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                      Visit store
                    </button>
                  </div>
                  <div className="mt-7 py-5 px-8 bg-white">
                    <h2 className="text-2xl font-normal">Customers</h2>
                    {/* <div className="flex mt-3 text-base gap-5 text-Dark-grey"> */}
                    {/* <p className="text-medium-blue">All</p> */}
                    {/* <p>Pending</p> */}
                    {/* <p>Delivered</p> */}
                    {/* </div> */}
                    <Tabs>
                      <TabList>
                        <div className="flex gap-5 md:gap-10 border-b">
                          <Tab>Businesses</Tab>
                          <Tab>Individuals</Tab>
                        </div>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          {businessCustomers && businessCustomers[0] ? (
                            <>
                              <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                                <p>#</p>

                                <p>CUSTOMER NAME</p>
                                <p>PRODUCT</p>
                                <p>PHONE</p>
                                <p>EMAIL</p>
                              </div>
                              <div>
                                {businessCustomers &&
                                  businessCustomers.map((order) => (
                                    <BusinessCustomerCard
                                      key={order._id}
                                      order={order}
                                    />
                                  ))}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                                <p>#</p>

                                <p>CUSTOMER NAME</p>
                                <p>PRODUCT</p>
                                <p>PHONE</p>
                                <p>EMAIL</p>
                                <p>PRICE</p>
                              </div>
                              <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                You have no Business Customers yet...
                              </p>
                            </>
                          )}
                        </TabPanel>
                        <TabPanel>
                          {customers && customers[0] ? (
                            <>
                              <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                                <p>#</p>

                                <p>CUSTOMER NAME</p>
                                <p>PRODUCT</p>
                                <p>PHONE</p>
                                <p>EMAIL</p>
                                <p>PRICE</p>
                              </div>
                              <div>
                                {customers &&
                                  customers.map((order) => (
                                    <IndividualCustomerCard
                                      key={order._id}
                                      order={order}
                                    />
                                  ))}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                                <p>#</p>

                                <p>CUSTOMER NAME</p>
                                <p>PRODUCT</p>
                                <p>PHONE</p>
                                <p>EMAIL</p>
                                <p>PRICE</p>
                              </div>
                              <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                You have no Individual customers yet..
                              </p>
                            </>
                          )}
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
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

export default ProductsCustomers;
