import mongoose from "mongoose";

const productOrderSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productStatus: {
      type: String,
      required: true,
      default: "Pending",
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

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

module.exports = ProductOrder;
