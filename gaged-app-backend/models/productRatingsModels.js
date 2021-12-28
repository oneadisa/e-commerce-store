import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "mySignedUpBusinessTable",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
