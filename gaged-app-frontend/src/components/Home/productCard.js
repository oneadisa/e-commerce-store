import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <div className="flex flex-col p-2 bg-white rounded">
        <div className="mb-5">
          <img
            src={product.images[0].url}
            alt={product.productTitle}
            className="w-full"
          />
          <div className="flex justify-between my-2">
            <div className="flex flex-col">
              <h4 className="font-bold">{product.productTitle}</h4>
              <p className="font-medium">{product.shortDescription}</p>
            </div>
            <div className="mt-2 font-bold">
              <h4>#{product.price}</h4>
            </div>
          </div>
        </div>
        <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
          <Link to={`/products/business/id/${product._id}`}>Details</Link>
        </button>
      </div>
    </>
  );
};
export default ProductCard;
