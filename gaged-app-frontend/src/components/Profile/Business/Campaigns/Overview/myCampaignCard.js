/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

const MyCampaignCard = ({ campaign }) => {
  const shortForm = substr(campaign.investorBrief, 0, 100);
  const progress = (
    campaign.amountAlreadyRaised / campaign.amountBeingRaised
  ).toString();
  return (
    <div>
      <div className="flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5">
        <div>
          <img src={campaign} className="w-full" alt="" />
          <h3 className="text-xl font-medium mt-5">{campaign.campaignName}</h3>
          <p className="text-base leading-5">{shortForm}</p>
        </div>
        <div className="py-2">
          <progress
            class="progress progress-info"
            value={progress}
            max="100"
          ></progress>
        </div>
        <div className="flex justify-between">
          <p className="text-base">55% raised</p>
          <p className="text-base text-red-500">7 days left</p>
        </div>
      </div>
    </div>
  );
};

export default MyCampaignCard;
