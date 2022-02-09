import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../../../../images/Profile.png";

const individualReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2 hover:bg-light-blue">
      <p>{review.productTitle}</p>
      <img src={profilePng} alt="User" />
      <p>
        {review.firstName} {review.lastName}
      </p>
      <Rating {...options} />
      <p>{review.comment}</p>
      <p>{review.phoneNumber}</p>
    </div>
  );
};

export default individualReviewCard;
