import React, { Fragment } from "react";
import Header from "../Profile/Business/Campaigns/New/Header";
import "./Cart.css";
import CartItemCard from "./cartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartActions";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="mx-auto">
            <Header />
            <div className="bg-magenta-blue py-5 md:py-12 px-1 md:px-8">
              <div className="px-1 md:px-5 py-3 md:py-5 bg-white">
                <div className="flex flex-col pt-10"></div>
                <div className="flex flex-col pt-10">
                  <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-5">
                    <div className="flex flex-col gap-12 md:gap-20 lg:gap-36 w-auto md:w-3/5 lg:w-auto">
                      <div className="border-t-2 border-gray-400 mt-3">
                        {cartItems &&
                          cartItems.map((item) => (
                            <div className="cartContainer" key={item.product}>
                              <CartItemCard
                                item={item}
                                deleteCartItems={deleteCartItems}
                              />
                              <div className="cartInput">
                                <button
                                  onClick={() =>
                                    decreaseQuantity(
                                      item.product,
                                      item.quantity
                                    )
                                  }
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  onClick={() =>
                                    increaseQuantity(
                                      item.product,
                                      item.quantity,
                                      item.stock
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <p className="cartSubtotal">{`₦${
                                item.price * item.quantity
                              }`}</p>
                            </div>
                          ))}
                        <div className="text-lg font-medium my-5 text-right pr-14 md:pr-20 lg:pr-3">
                          <p>{`₦${cartItems.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )}`}</p>
                          Total price
                        </div>
                        <div className="mt-6">
                          <button
                            className="h-12 w-full mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium rounded hover:bg-white hover:text-Dark-blue"
                            onClick={checkoutHandler}
                          >
                            Proceed to checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Cart;
