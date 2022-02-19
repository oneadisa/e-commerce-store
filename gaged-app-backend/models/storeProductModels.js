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
    discountedPrice: {
      type: Number,
      required: [true, "Please Enter Discounted Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    productUnitCount: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    images: [
      {
        public_id: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        },
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    individualnewProductReviews: [
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
          required: false,
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
          required: false,
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

    BusinessnewProductReviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
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
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        comment: {
          type: String,
          required: false,
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
// required: false,
// },
// url: {
// type: String,
// required: false,
// },
// },
// ],
