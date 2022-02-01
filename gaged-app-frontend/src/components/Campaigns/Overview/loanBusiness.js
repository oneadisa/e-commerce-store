/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../Layout/Loader/Loader";
import Header0 from "../Header0";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import facebook from "../../../images/facebook.svg";
import tags from "../../../images/tags.svg";
import twitter from "../../../images/twitter.svg";
import whatsapp from "../../../images/whatsapp.svg";
import left from "../../../images/left.svg";
import { useAlert } from "react-alert";
import MetaData from "../../Layout/metaData";
import {
  clearErrors,
  getCampaignDetails,
  newBusinessReview,
} from "../../../actions/campaignActions";
import { NEW_CAMPAIGN_BUSINESS_REVIEW_RESET } from "../../../constants/campaignConstants";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import IndividualCampaignReviewCard from "../individualCampaignReviewCard";
import BusinessCampaignReviewCard from "../businessCampaignReviewCard.js.js";
import LendHistoryCard from "../lendHistoryCard";
import RepaymentHistoryCard from "../repaymentHistoryCard";

function loanThirdBusiness() {
  const dispatch = useDispatch();
  const alert = useAlert();
  let params = useParams();
  let navigate = useNavigate();

  const signedUpBusinessLogin = useSelector(
    (state: RootStateOrAny) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;
  useEffect(() => {
    if (!signedUpBusinessInfo) {
    }
  }, [dispatch, navigate, signedUpBusinessInfo]);
  useEffect(() => {}, [signedUpBusinessInfo]);

  const { campaign, loading, error } = useSelector(
    (state: RootStateOrAny) => state.campaignDetails
  );

  const { success, error: reviewError } = useSelector(
    (state: RootStateOrAny) => state.newIndividualCampaignReview
  );

  //    const submitReviewToggle = () => {
  //  open ? setOpen(false) : setOpen(true);
  //    };
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("comment", comment);
    myForm.set("campaignId", params.id);

    dispatch(newBusinessReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_CAMPAIGN_BUSINESS_REVIEW_RESET });
    }
    dispatch(getCampaignDetails(params.id));
  }, [dispatch, params.id, error, alert, reviewError, success]);

  const progress =
    Math.floor(campaign.amountAlreadyRaised / campaign.amountBeingRaised) * 100;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${campaign.campaignName} -- GAGED`} />
          <div className="mx-auto">
            <Header0 />
            <div className="pt-3 pb-5 px-1 md:px-2">
              <h2 className="px-5 pt-2 text-2xl font-semibold text-center md:text-left">
                {campaign.campaignName}
              </h2>
              <div className="px-2">
                <div className="mt-8 mb-5">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8">
                    <div className="flex flex-col gap-5 w-full">
                      <div>
                        {/* this image is suppose to be a video, for now we dnt have a video so i made it an image for fast work */}
                        <img src={campaign.campaignVideo} alt="" />
                      </div>
                      <div className="flex md:flex-row md:gap-0 justify-between px-0 lg:px-5">
                        <div className="flex gap-1">
                          <img src={twitter} className="h-8 w-8" alt="" />
                          <img src={facebook} className="h-8 w-8" alt="" />
                          <img src={whatsapp} className="h-8 w-8" alt="" />
                        </div>
                        <div className="flex gap-1">
                          <img src={tags} alt="" />
                          <p className="text-base font-normal">
                            {campaign.campaignCategory}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex flex-col border-2">
                        <div className="flex justify-between px-2 lg:px-14 pt-5 lg:pt-12 pb-5 lg:pb-9">
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              ₦{campaign.amountAlreadyRaised}
                            </h4>
                            <p className="text-sm font-normal">TOTAL RAISED</p>
                          </div>
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              07:13:26:40
                            </h4>
                            <p className="text-sm font-normal">TIME LEFT</p>
                          </div>
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              {campaign.totalNumberOfCampaignDonors}
                            </h4>
                            <p className="text-sm font-normal">INVESTORS</p>
                          </div>
                        </div>
                        <div className="flex justify-between border-t px-2 lg:px-14 py-5 pb-5 lg:py-9">
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              {campaign.fundingType}
                            </h4>
                            <p className="text-sm font-normal">FUNDING TYPE</p>
                          </div>
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              ${campaign.pledged_profit_to_lenders}
                            </h4>
                            <p className="text-sm font-normal">
                              LENDERS
                              <br />
                              PROFIT
                            </p>
                          </div>
                          <div className="flex gap-4 lg:gap-8 flex-col text-center">
                            <h4 className="text-base font-medium">
                              {campaign.duration_pledged_profit} MONTHS
                            </h4>
                            <p className="text-sm font-normal">DURATION</p>
                          </div>
                        </div>
                      </div>
                      <div className="my-1">
                        <p className="text-lg font-medium mb-2">Progress</p>
                        <div className="py-2">
                          <div className="h-2 w-full bg-gray-200 rounded">
                            <div className="h-full w-1/2 bg-Dark-blue rounded" />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium text-base">
                            {progress}% raised
                          </p>
                          <p className="font-medium text-base">7 days left</p>
                        </div>
                        <p>
                          This loan will be paid{" "}
                          {campaign.repayment_schedule_pledged_profit}{" "}
                        </p>
                      </div>
                      <div className="flex justify-between mt-6 md:mt-4">
                        <button className="border-2 border-Dark-blue text-Dark-blue font-medium bg-white w-36 lg:w-44 py-2 rounded hover:bg-Dark-blue hover:text-white">
                          View Pitchdeck
                        </button>
                        <button className="border-2 border-Dark-blue text-white font-medium bg-Dark-blue w-36 lg:w-44 py-2 rounded hover:bg-white hover:text-Dark-blue">
                          Invest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 mb-5 px-0 md:px-2 lg:px-4">
                  <Tabs>
                    <TabList>
                      <div className="flex gap-5 md:gap-10 border-b">
                        <Tab>Oneverview</Tab>
                        <Tab>Comments</Tab>
                        <Tab>History</Tab>
                      </div>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <div className="pt-4">
                          <div className="lg:px-1">
                            <div className="text-base text-gray-500 font-normal py-3 leading-6 md:w-3/4 lg:w-1/2">
                              {campaign.investorBrief}
                            </div>
                            <div className="flex flex-col gap-4 mt-16 md:w-2/3 lg:w-5/12 ">
                              <label className="text-base text-gray-600 font-medium">
                                Share your thoughts about this campaign.
                              </label>
                              <textarea
                                placeholder="This is an amazing business"
                                className="border-2 border-gray-400 py-3 px-4 rounded-xl h-36 md:h-48 placeholder-gray-600 outline-none"
                              />
                              <div className="flex justify-between my-12 text-center">
                                <button
                                  className="py-2 border-2 border-Dark-blue text-Dark-blue text-base font-medium rounded
                       w-1/3 lg:w-1/4 hover:bg-Dark-blue hover:text-white flex gap-3 md:gap-6"
                                >
                                  <img src={left} alt="" />
                                  <div>
                                    {" "}
                                    <Link to="">Back</Link>{" "}
                                  </div>
                                </button>
                                <button
                                  className="py-2 border-2 border-Dark-blue bg-Dark-blue text-white text-base font-medium rounded w-1/3 lg:w-1/4 hover:bg-white hover:text-Dark-blue"
                                  onClick={reviewSubmitHandler}
                                >
                                  Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <Tabs>
                          <TabList>
                            <div className="flex gap-5 md:gap-10 border-b">
                              <Tab>Businesses</Tab>
                              <Tab>Individuals</Tab>
                            </div>
                          </TabList>

                          <TabPanels>
                            <TabPanel>
                              {campaign.businsessCampaignReviews &&
                              campaign.businessCampaignReviews[0] ? (
                                <div>
                                  {campaign.businessCampaignReviews &&
                                    campaign.businessCampaignReviews.map(
                                      (review) => (
                                        <BusinessCampaignReviewCard
                                          key={review._id}
                                          review={review}
                                        />
                                      )
                                    )}
                                </div>
                              ) : (
                                <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                  No Reviews Yet
                                </p>
                              )}
                            </TabPanel>
                            <TabPanel>
                              {campaign.individualCampaignReviews &&
                              campaign.individualCampaignReviews[0] ? (
                                <div>
                                  {campaign.individualCampaignReviews &&
                                    campaign.individualCampaignReviews.map(
                                      (review: any) => (
                                        <IndividualCampaignReviewCard
                                          key={review._id}
                                          review={review}
                                        />
                                      )
                                    )}
                                </div>
                              ) : (
                                <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                  No Reviews Yet
                                </p>
                              )}
                            </TabPanel>
                          </TabPanels>
                        </Tabs>
                      </TabPanel>
                      <TabPanel>
                        <div className="mt-6 lg:px-1">
                          <div className="flex flex-col text-base font-medium">
                            <Tabs>
                              <TabList>
                                <div className="flex gap-5 md:gap-10 border-b">
                                  <Tab>Loans</Tab>
                                  <Tab>Repayments</Tab>
                                </div>
                              </TabList>
                              <TabPanels>
                                <TabPanel>
                                  {campaign.businsessCampaignReviews &&
                                  campaign.businessCampaignReviews[0] ? (
                                    <div>
                                      {signedUpBusinessInfo.listOfCampaignsInvested &&
                                        signedUpBusinessInfo.listOfCampaignsInvested.map(
                                          (lend) => (
                                            <LendHistoryCard
                                              key={lend._id}
                                              lend={lend}
                                            />
                                          )
                                        )}
                                    </div>
                                  ) : (
                                    <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                      You haven't invested in this campaign yet.
                                    </p>
                                  )}
                                </TabPanel>
                                <TabPanel>
                                  {campaign.individualCampaignReviews &&
                                  campaign.individualCampaignReviews[0] ? (
                                    <div>
                                      {signedUpBusinessInfo.listOfCampaignPayouts &&
                                        signedUpBusinessInfo.listOfCampaignPayouts.map(
                                          (repayment) => (
                                            <RepaymentHistoryCard
                                              key={repayment._id}
                                              repayment={repayment}
                                            />
                                          )
                                        )}
                                    </div>
                                  ) : (
                                    <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                      You haven't received any payments from
                                      this campaign yet.
                                    </p>
                                  )}
                                </TabPanel>
                              </TabPanels>
                            </Tabs>
                          </div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default loanThirdBusiness;
