import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ product, business }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-20">
          <img
            alt={business.businessName}
            src={business.storeLogo}
            className="w-full"
          />
          <h4 className="text-lg font-bold my-2">{business.businessName}</h4>
          <p className="text-base leading-5">{business.storeTagline}</p>
        </div>
        <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
          <Link to={`/profile/business/id/${business._id}`}>Shop</Link>
        </button>
      </div>
    </>
  );
};
export default BusinessCard;
