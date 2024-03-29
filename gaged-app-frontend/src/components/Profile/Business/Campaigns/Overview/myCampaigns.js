/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../../../../actions/businessActions";
import MyCampaignCard from "./myCampaignCard";
import Loader from "../../../../Layout/Loader/Loader";
import MetaData from "../../../../Layout/metaData";
import GeneralErrorMessage from "../../../../Layout/Errors/GeneralErrorMessage";

function MyCampaigns() {
  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();
  // const [message, setMessage] = useState(null);

  const { businessInfo, loading, error } = useSelector(
    (state: RootStateOrAny) => state.business
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!businessInfo) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, businessInfo, navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Campaigns" />
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
            {error && (
              <GeneralErrorMessage bg="danger">{error}</GeneralErrorMessage>
            )}
            <div className="bg-magenta-blue h-full">
              <div className="block lg:flex lg:space-x-24">
                <div className="hidden lg:block">
                  <Dashboard />
                </div>
                <div className="lg:hidden">{open && <Dashboard />}</div>
                <div className="py-5 md:py-10 lg:py-0 lg:my-10 w-full px-3">
                  <div className="flex flex-col md:flex-row gap-5 justify-between">
                    <h1 className="text-3xl font-bold text-medium-blue">
                      Fundraising Campaigns
                    </h1>
                    <Link to="/business/campaign/new">
                      <button className="lg:mr-10 w-36 h-10 bg-white border-2 border-black hover:text-white hover:bg-Dark-blue hover:border-white">
                        New campaign
                      </button>
                    </Link>
                  </div>
                  <div className="my-3">
                    {/* <div className="flex justify-between md:justify-start border-b-2 border-black"> */}
                    {/* <div className="text-lg font-semibold border-b-4 border-Dark-blue px-4 md:px-10 py-1"> */}
                    {/* <h3>All</h3> */}
                    {/* </div> */}
                    {/* <div className="text-lg font-semibold text-gray-400 px-4 md:px-10 py-1 hover:text-Dark-blue"> */}
                    {/* <h3>LIVE</h3> */}
                    {/* </div> */}
                    {/* <div className="text-lg font-semibold text-gray-400 px-4 md:px-10 py-1 hover:text-Dark-blue"> */}
                    {/* <h3>COMPLETED</h3> */}
                    {/* </div> */}
                    {/* </div> */}
                    <div className="flex flex-col md:flex-row gap-5 md:gap-2 lg:gap-5 my-10 lg:px-1">
                      <div className="">
                        {businessInfo.listOfCampaignsStarted &&
                        businessInfo.listOfCampaignsStarted[0] ? (
                          <>
                            {businessInfo.listOfCampaignsStarted &&
                              businessInfo.listOfCampaignsStarted.map(
                                (campaign) => (
                                  <MyCampaignCard
                                    key={campaign._id}
                                    campaign={campaign}
                                  />
                                )
                              )}
                          </>
                        ) : (
                          <>
                            <h2 className="text-center font-poppins text-bold text-xl h-screen p-20">
                              You haven't started any Campaigns yet.
                            </h2>
                            <Link to="/explore/campaigns">
                              <button className="py-2 px-10 md:py-3 md:px-20 border-2 border-Dark-blue bg-Dark-blue text-white sm:text-base md:text-xl font-medium rounded hover:bg-white hover:animate-bounce hover:text-Dark-blue">
                                Explore Camaigns
                              </button>
                            </Link>
                          </>
                        )}
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

export default MyCampaigns;
