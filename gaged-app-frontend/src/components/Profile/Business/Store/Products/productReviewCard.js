import { Rating } from "@material-ui/lab";
import React from "react";

const ReviewCard = ({ review }) => {
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
        <p>{review.businessName}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
