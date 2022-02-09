import { Rating } from "@material-ui/lab";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2">
      <p></p>
      <p>Product 1</p>
      <p>John Doe</p>
      <p>PHONE</p>
      <p>TOTAL</p>
      <p>STATUS</p>
      <p>ACTION</p>
    </div>
  );
};

export default ReviewCard;
