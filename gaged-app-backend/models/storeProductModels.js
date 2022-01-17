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
    individualProductReviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          default: 0,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        comment: {
          type: String,
          required: true,
        },
        commentedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    numberOfIndividualReviews: {
      type: Number,
      default: 0,
    },

    BusinessProductReviews: [
      {
        user: {
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
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        comment: {
          type: String,
          required: true,
        },
        commentedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    numberOfBusinessReviews: {
      type: Number,
      default: 0,
    },
    totalNumberOfReviews: {
      type: Number,
      default: 0,
    },
    businessOrders: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        productOrdered: {
          type: String,
          required: false,
        },
        businessName: {
          type: String,
          required: false,
        },
        phoneNumber: {
          type: Number,
          required: false,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        email: {
          type: String,
          required: false,
        },
      },
    ],
    numberOfBusinessOrders: {
      type: Number,
      default: 0,
    },

    individualOrders: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        productOrdered: {
          type: String,
          required: false,
        },
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        phoneNumber: {
          type: Number,
          required: false,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        email: {
          type: String,
          required: false,
        },
      },
    ],
    numberOfIndividualOrders: {
      type: Number,
      default: 0,
    },
    totalNumberOfOrders: {
      type: Number,
      default: 0,
    },
    individualCustomers: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpUserTable",
          required: false,
        },
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: Number,
          required: false,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        email: {
          type: String,
          required: false,
        },
      },
    ],
    numberOfIndividualCustomers: {
      type: Number,
      default: 0,
    },
    businessCustomers: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        businessName: {
          type: String,
          required: false,
        },
        phoneNumber: {
          type: Number,
          required: false,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        email: {
          type: String,
          required: false,
        },
        productBought: {
          type: String,
          required: false,
        },
      },
    ],
    numberOfBusinessCustomers: {
      type: Number,
      default: 0,
    },
    totalNumberOfCustomers: {
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
