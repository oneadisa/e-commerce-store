import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-5">
          <div className="flex flex-col">
            <div className="pb-1 text-xl font-semibold border-b-2 border-gray-400 ">
              <h2>Products from {item.store}</h2>
            </div>
            <div className="flex gap-2 md:gap-5 py-3">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5">
                <div className="flex flex-col gap-5 md:gap-10">
                  <div className="flex flex-col">
                    <Link to={`/products/${item.product}`}>
                      <h4 className="text-lg font-medium">{item.name}</h4>
                    </Link>
                    <p className="text-base font-normal">{item.description}</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{item.price}</p>
                  </div>
                </div>
              </div>
              <p
                className="h-12 w-full mt-2 font-poppins border-2 border-Dark-blue bg-orange-800 text-white text-base md:text-lg font-medium rounded hover:bg-orange-800 hover:text-white"
                onClick={() => deleteCartItems(item.product)}
              >
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
