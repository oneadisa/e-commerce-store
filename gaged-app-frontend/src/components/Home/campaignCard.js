import React from "react";
import { Link } from "react-router-dom";

const CampaignCard = ({ business, campaign }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-3">
          <img alt="" src={business.storeLogo} className="w-full h-fit" />
          <h4 className="text-lg font-bold my-2">{business.businessName}</h4>
          <p className="text-base leading-5">{business.storeTagline}</p>
        </div>
        <div className="mb-7">
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              $ {campaign.amountAlreadyRaised} raised
            </p>
            <p className="text-lg">$ {campaign.amountBeingRaised}</p>
          </div>
          <div className="py-2">
            <div className="h-2 w-full bg-Dark-grey rounded">
              <div className="h-full w-1/3 bg-Dark-blue rounded" />
            </div>
          </div>
          <p className="text-lg">{campaign.duration}</p>
        </div>
        <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
          <Link to={`/campaign/${campaign._id}`}>Fund</Link>
        </button>
      </div>
    </>
  );
};
export default CampaignCard;
