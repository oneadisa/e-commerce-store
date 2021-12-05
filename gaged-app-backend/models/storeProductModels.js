declare var require: any;

const mongoose = require("mongoose");

const storeProductSchema = new mongoose.Schema(
  {
    ProductTitle: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    productDetails: {
      type: String,
      required: true,
    },
    standardPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    productStockCount: {
      type: Number,
      required: true,
    },
    productUnitCount: {
      type: Number,
      required: true,
    },
    productSKU: {
      type: Number,
      required: true,
    },
    productImageOne: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgrey%2520background%2F&psig=AOvVaw2p9TwtlqiYx-KidmqkJLdm&ust=1638691891078000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNio_5PZyfQCFQAAAAAdAAAAABAD",
    },
    productImageTwo: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgrey%2520background%2F&psig=AOvVaw2p9TwtlqiYx-KidmqkJLdm&ust=1638691891078000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNio_5PZyfQCFQAAAAAdAAAAABAD",
    },
    productImageThree: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgrey%2520background%2F&psig=AOvVaw2p9TwtlqiYx-KidmqkJLdm&ust=1638691891078000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNio_5PZyfQCFQAAAAAdAAAAABAD",
    },
    category: {
      type: String,
      required: true,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "mySignedUpBusinessTable",
    },
  },
  {
    timestamps: true,
  }
);

const StoreProduct = mongoose.model("StoreProduct", storeProductSchema);

module.exports = StoreProduct;
