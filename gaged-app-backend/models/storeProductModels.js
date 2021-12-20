const mongoose = require("mongoose");
const mongooseSerial = require("mongoose-serial");

const storeProductSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: [true, "Please Enter product Name"],
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    productDetails: {
      type: String,
      required: [true, "Please Enter Product Details"],
    },
    standardPrice: {
      type: Number,
      required: [true, "Please Enter Standard Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    discountedPrice: {
      type: Number,
      required: [true, "Please Enter Discounted Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    costPrice: {
      type: Number,
      required: [true, "Please Enter product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    productStockCount: {
      type: Number,
      required: false,
    },
    productUnitCount: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
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
    ratings: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    reviews: [
      {
        IndividualUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        BusinessUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          default: 0,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    numberOfReviews: {
      type: Number,
      default: 0,
    },

    orders: [
      {
        IndividualUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        BusinessUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        productOrdered: {
          type: String,
          required: false,
        },
        name: {
          type: String,
          required: false,
        },
        rating: {
          type: Number,
          default: 0,
        },
        comment: {
          type: String,
          required: false,
        },
      },
    ],
    numberOfOrdes: {
      type: Number,
      default: 0,
    },

    customers: [
      {
        IndividualUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        BusinessUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        name: {
          type: String,
          required: false,
        },
        phoneNumber: {
          type: Number,
          required: false,
        },
        email: {
          type: Number,
          required: false,
        },
        numberOfders: {
          type: Number,
          required: [false, "All customers must have at least one order"],
        },
      },
    ],
    numberOfCustomers: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "mySignedUpBusinessTable",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const StoreProduct = mongoose.model("StoreProduct", storeProductSchema);

module.exports = StoreProduct;

// {
//  name: '#',
//  selector: 'serial'
// }

// storeProductSchema.plugin(mongooseSerial, {
// field: "serialNumber",
// initCount: "monthly",
// separator: "-",
// digits: 3,
// });

// images: [
// {
// public_id: {
// type: String,
// required: true,
// },
// url: {
// type: String,
// required: true,
// },
// },
// ],
