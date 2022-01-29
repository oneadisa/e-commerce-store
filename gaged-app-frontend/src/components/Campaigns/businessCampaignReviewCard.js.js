import React from "react";

const BusinessCampaignReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col gap-2 py-3 md:w-1/2">
      <div className="flex gap-2">
        <img alt="" src={review.pic} />
        <div className="flex flex-col mt-2">
          <h3 className="text-base font-medium">{review.businessName}</h3>
          <p className="text-sm font-normal">{review.commentedAt}</p>
        </div>
      </div>
      <p className="text-base">{review.comment}</p>
    </div>
  );
};

export default BusinessCampaignReviewCard;
