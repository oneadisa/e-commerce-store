import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    charges: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    withdraw: {
      type: Boolean,
      required: false,
    },
    deposit: {
      type: Boolean,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;
