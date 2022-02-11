import { Rating } from "@material-ui/lab";
import React from "react";

const BusinessReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{review.comment}</p>
          <div className="flex text-xs">
            <Rating {...options} />
          </div>
        </div>
        <p>
          {review.firstName} {review.lastName}
        </p>
      </div>
    </div>
  );
};

export default BusinessReviewCard;
