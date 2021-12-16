const mongoose = require("mongoose");
const mongooseSerial = require("mongoose-serial");

const storeProductSchema = new mongoose.Schema(
  {
    serialNumber: {
      type: String,
      required: false,
    },
    productTitle: {
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
      required: false,
    },
    productImageOne: {
      type: String,
      required: false,
      default: "https://icon-library.com/icon/icon-image-file-29.html.html",
    },
    productImageTwo: {
      type: String,
      required: false,
      default: "https://icon-library.com/icon/icon-image-file-29.html.html",
    },
    productImageThree: {
      type: String,
      required: false,
      default: "https://icon-library.com/icon/icon-image-file-29.html.html",
    },
    category: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    numberOfOrders: {
      type: String,
      required: true,
    },
    customerNameList: {
      type: Array,
      required: true,
    },
    customerPhoneNumberList: {
      type: Array,
      required: true,
    },
    customerEmailList: {
      type: Array,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "mySignedUpBusinessTable",
    },
  },
  {
    timestamps: true,
  }
);

const StoreProduct = mongoose.model("StoreProduct", storeProductSchema);
storeProductSchema.plugin(mongooseSerial, {
  field: "serialNumber",
  initCount: "monthly",
  separator: "-",
  digits: 3,
});

module.exports = StoreProduct;

// {
//  name: '#',
//  selector: 'serial'
// }
