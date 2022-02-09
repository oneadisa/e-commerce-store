import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../../../../images/Profile.png";

const IndividualCustomerCard = ({ order }) => {
  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2 hover:bg-light-blue">
      <img src={profilePng} alt="User" />
      <p>{order.productOrdered.productName}</p>
      <p>
        {order.firstName} {order.lastName}
      </p>
      <p>{order.phoneNumber}</p>
      <p>{order.email}</p>
      <p>{order.totalPrice}</p>
      <p>{order.order.orderStatus}</p>
    </div>
  );
};

export default IndividualCustomerCard;
