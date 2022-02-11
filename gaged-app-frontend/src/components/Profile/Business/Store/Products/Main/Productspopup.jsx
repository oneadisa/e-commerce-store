import React, { Fragment, useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
// import { GoStar } from "react-icons/go";
// import { MdOutlineStarOutline } from "react-icons/md";
import BusinessReviewCard from "../businessProductReviewCard";
import IndividualReviewCard from "../individualProductReviewCard";
import {
  clearErrors,
  getProductDetails,
  newBusinessProductReview,
  newBusinessReview,
  newIndividualProductReview,
  newIndividualReview,
} from "../../../../actions/businessActions";

import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../../../actions/cartActions";
import { Rating } from "@material-ui/lab";
import {
  NEW_BUSINESS_PRODUCT_REVIEW_RESET,
  NEW_INDIVIDUAL_PRODUCT_REVIEW_RESET,
  NEW_BUSINESS_REVIEW_RESET,
  NEW_INDIVIDUAL_REVIEW_RESET,
} from "../../../../../../constants/businessConstants";

export default function Productspopup() {
  const dispatch = useDispatch();
  let params = useParams();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.businessProductDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.businessNewIndividualProductReview
  );
  const { successBusiness, errorBusiness: reviewBusinessError } = useSelector(
    (state) => state.businessNewBusinessProductReview
  );
  const { successProduct, errorProduct: reviewProductError } = useSelector(
    (state) => state.newIndividualSingleProductReview
  );
  const {
    successProductBusiness,
    errorProductBusiness: reviewProductBusinessError,
  } = useSelector((state) => state.newBusinessSingleProductReview);

  const { business } = useSelector((state) => state.singleBusinesses);
  const signedUpBusinessLogin = useSelector(
    (state) => state.signedUpBusinessLogin
  );

  const { signedUpBusinessInfo } = signedUpBusinessLogin;

  const { signedUpUserInfo } = useSelector((state) => state.signedUpUserLogin);

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const [quantity, setQuantity] = useState(1);
  // const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const increaseQuantity = () => {
    if (product.productUnitCount <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(params.id, quantity));
    alert.success("Item Added To Cart");
  };
  // const submitReviewToggle = () => {
  // open ? setOpen(false) : setOpen(true);
  // };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    if (signedUpBusinessInfo) {
      dispatch(newBusinessProductReview(myForm));
      dispatch(newBusinessReview(myForm));
    } else if (signedUpUserInfo) {
      dispatch(newIndividualProductReview(myForm));
      dispatch(newIndividualReview(myForm));
    } else {
      alert.error("Please Sign Up or Login to perfrom that action");
    }
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
    if (reviewBusinessError) {
      alert.error(reviewBusinessError);
      dispatch(clearErrors());
    }

    if (reviewProductError) {
      alert.error(reviewProductError);
      dispatch(clearErrors());
    }

    if (reviewProductBusinessError) {
      alert.error(reviewProductBusinessError);
      dispatch(clearErrors());
    }
    if (
      success &&
      successBusiness &&
      successProduct &&
      successProductBusiness
    ) {
      alert.success("Review Submitted Successfully");
      dispatch({
        type: NEW_BUSINESS_PRODUCT_REVIEW_RESET,
        NEW_INDIVIDUAL_PRODUCT_REVIEW_RESET,
        NEW_BUSINESS_REVIEW_RESET,
        NEW_INDIVIDUAL_REVIEW_RESET,
      });
    }
    dispatch(getProductDetails(params.id));
  }, [
    dispatch,
    params.id,
    error,
    alert,
    reviewError,
    success,
    successBusiness,
    successProduct,
    successProductBusiness,
    reviewBusinessError,
    reviewProductError,
    reviewProductBusinessError,
  ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title={`${product.productTitle} -- ${business.businessName}`}
          />
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50">
            <div className="mt-10 mb-2 flex items-center justify-center">
              <div className="detailsBlock-3-1-1">
                <button onClick={decreaseQuantity}>-</button>
                <input readOnly type="number" value={quantity} />
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button
                className="border-2 border-Dark-blue text-white font-medium h-8 w-2/5 bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue"
                disabled={product.productUnitCount < 1 ? true : false}
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
            <div className="mx-2 px-2 md:px-8 lg:px-20 bg-white rounded-md pt-3 pb-8 w-full md:w-3/5 flex flex-col gap-2">
              <div className="text-xl font-semibold text-right">X</div>
              <div>
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>
              <div className="mt-1">
                <div>
                  <div className="my-1 flex justify-between text-lg font-semibold">
                    <h2>{product.productTitle}</h2>
                    <p>${product.costPrice}</p>
                  </div>
                  <p className="md:w-3/4">
                    Product description: {product.shortDescription}
                  </p>
                  <div className="mt-1 flex gap-1">
                    <Rating {...options} />
                    <span className="detailsBlock-2-span">
                      {" "}
                      ({product.totalNumberOfReviews} Reviews)
                    </span>
                  </div>
                  <div className="my-5 md:w-3/4">
                    <p>Product details:</p>
                    <p>{product.productDetails}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-lg font-semibold">
                  Product ratings & Reviews
                </h1>
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50">
                  <div className="mx-2 px-5 lg:px-10 bg-white rounded-md pt-3 pb-8 w-full md:w-1/2 lg:w-2/5 flex flex-col gap-2">
                    <div className="text-xl font-semibold text-right">X</div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">Rate the product</h1>
                      <div className="mt-1 flex gap-1">
                        <Rating
                          onChange={(e) => setRating(e.target.value)}
                          value={rating}
                          size="large"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-7">
                      <h4>Review</h4>
                      <textarea
                        className="p-2 placeholder-black text-black outline-none border-2 border-gray-300 h-40 w-4/5 rounded"
                        placeholder="How do you feel about this product"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <button
                        className="border-2 border-Dark-blue text-white font-medium h-8 w-2/5 bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue"
                        onClick={reviewSubmitHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <Tabs>
                  <TabList>
                    <div className="flex gap-5 md:gap-10 border-b">
                      <Tab>Businesses</Tab>
                      <Tab>Individuals</Tab>
                    </div>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      {product.businessReviews && product.businessReviews[0] ? (
                        <>
                          <div>
                            {product.businessReviews &&
                              product.businessReviews.map((review) => (
                                <BusinessReviewCard
                                  key={review._id}
                                  review={review}
                                />
                              ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                            No reviews yet.
                          </p>
                        </>
                      )}
                    </TabPanel>
                    <TabPanel>
                      {product.individualReviews &&
                      product.individualReviews[0] ? (
                        <>
                          <div>
                            {product.individualReviews &&
                              product.individualReviews.map((review) => (
                                <IndividualReviewCard
                                  key={review._id}
                                  review={review}
                                />
                              ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                            No reviews yet.
                          </p>
                        </>
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
