const ErrorHandler = require("../utils/errorhandler");
const businessOrder = require("../models/businessProductOrderModels");
const individualOrder = require("../models/individualProductOrderModels");
const StoreProduct = require("../models/storeProductModels");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create new Business Order
const newBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await businessOrder.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// get Single Business Order
const getSingleBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await businessOrder
    .findById(req.params.id)
    .populate("user", "name email");

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user Business Orders
const myBusinessOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await businessOrder.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// get all Business Orders -- Admin
const getAllBusinessOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await businessOrder.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- Admin
const updateBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await businessOrder.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// async function updateStock(id, quantity) {
  // const storeProduct = await StoreProduct.findById(id);
// 
  // storeProduct.productUnitCount -= quantity;
// 
  // await storeProduct.save({ validateBeforeSave: false });
// }

// delete Order -- Admin
const deleteBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await businessOrder.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});

// Create new Individual individualOrder
const newIndividualOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await individualOrder.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// get Single Individual individualOrder
const getSingleIndividualOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await individualOrder
    .findById(req.params.id)
    .populate("user", "name email");

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user Individual Orders
const myIndividualOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await individualOrder.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// get all Individual Orders -- Admin
const getAllIndividualOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await individualOrder.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update individualOrder Status -- Admin
const updateIndividualOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await individualOrder.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const storeProduct = await StoreProduct.findById(id);

  storeProduct.productUnitCount -= quantity;

  await storeProduct.save({ validateBeforeSave: false });
}

// delete individualOrder -- Admin
const deleteIndividualOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await individualOrder.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});

module.exports = {
  deleteBusinessOrder,
  updateBusinessOrder,
  getAllBusinessOrders,
  myBusinessOrders,
  getSingleBusinessOrder,
  newBusinessOrder,
  newIndividualOrder,
  getSingleIndividualOrder,
  myIndividualOrders,
  getAllIndividualOrders,
  updateIndividualOrder,
  deleteIndividualOrder,
};
