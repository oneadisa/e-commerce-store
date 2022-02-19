import React from "react";
import profilePng from "../../../../../images/Profile.png";

const OrderCard = ({ order }) => {
  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2 hover:bg-light-blue">
      <img src={profilePng} alt="User" />
      <p>{order.productOrdered.productName}</p>
      <p>{order.name}</p>
      <p>{order.phoneNumber}</p>
      <p>{order.email}</p>
      <p>{order.totalPrice}</p>
      <p>{order.orderStatus}</p>
    </div>
  );
};

export default OrderCard;
