import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./imagesCard";
import { GoStar } from "react-icons/go";
import { MdOutlineStarOutline } from "react-icons/md";
import drink1 from "../../images/drink1.png";
import drink2 from "../../images/drink2.png";
import drink3 from "../../images/drink3.png";
import { getProductDetails } from "../../../../actions/businessActions";
import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

export default function Productspopup() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.businessProductDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);
    dispatch(newReview(myForm));
    setOpen(false);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50">
      <div className="mx-2 px-2 md:px-8 lg:px-20 bg-white rounded-md pt-3 pb-8 w-full md:w-3/5 flex flex-col gap-2">
        <div className="text-xl font-semibold text-right">X</div>
        <Carousel>
          <Card number={<img src={drink1} alt="drink1" />} />
          <Card number={<img src={drink2} alt="drink2" />} />
          <Card number={<img src={drink3} alt="drink3" />} />
        </Carousel>
        <div className="mt-1">
          <div>
            <div className="my-1 flex justify-between text-lg font-semibold">
              <h2>Product Name</h2>
              <p>$400</p>
            </div>
            <p className="md:w-3/4">
              Product description: This is a drink brewed for all occasion.
            </p>
            <div className="mt-1 flex gap-1">
              <GoStar className="text-medium-blue" />
              <GoStar className="text-medium-blue" />
              <GoStar className="text-medium-blue" />
              <MdOutlineStarOutline className="text-medium-blue" />
              <MdOutlineStarOutline className="text-medium-blue" />
            </div>
            <div className="my-5 md:w-3/4">
              <p>Product details:</p>
              <p>
                This is a drink brewed for all occasion, specifically to delight
                your taste buds
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-semibold">Product ratings & Reviews</h1>
          <div className="mt-1">
            <div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p>A very good product</p>
                  <div className="flex text-xs">
                    <GoStar className="text-medium-blue" />
                    <GoStar className="text-medium-blue" />
                    <GoStar className="text-medium-blue" />
                    <GoStar className="text-medium-blue" />
                    <MdOutlineStarOutline className="text-medium-blue" />
                  </div>
                </div>
                <p>Michael Andrew</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-2 flex items-center justify-center">
          <button className="border-2 border-Dark-blue text-white font-medium h-8 w-2/5 bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
