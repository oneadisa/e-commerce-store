const Review = require("../models/productRatingsModels");
const asyncHandler = require("express-async-handler");
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({
    user: req.user._id,
  });
  res.json(reviews);
});

const CreateReview = asyncHandler(async (req, res) => {
  const { productName, customerName, comment, rating } = req.body;

  if (productName || !comment || !rating || !customerName) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const newReview = new Review({
      user: req.user._id,
      productName,
      customerName:
        req.user.accountHolderName ||
        req.user.firstName + "" + req.user.lastName,
      comment,
      rating,
    });

    const createdReview = await newReview.save();

    res.status(201).json(createdReview);
  }
});

const getReviewById = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ message: "Review not found" });
  }

  res.json(review);
});

const UpdateReview = asyncHandler(async (req, res) => {
  const { productName, customerName, comment, rating } = req.body;

  const review = await Review.findById(req.params.id);

  if (review.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (review) {
    review.productName = productName;
    review.customerName = customerName;
    review.comment = comment;
    review.rating = rating;

    const updatedReview = await review.save();
    res.json(updatedReview);
  } else {
    res.status(404);
    throw new Error("Review not found");
  }
});

const DeleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (review) {
    await review.remove();
    res.json({ message: "Review Deleted" });
  } else {
    res.status(404);
    throw new Error("Review not Found");
  }
});

module.exports = {
  getReviews,
  CreateReview,
  getReviewById,
  UpdateReview,
  DeleteReview,
};
