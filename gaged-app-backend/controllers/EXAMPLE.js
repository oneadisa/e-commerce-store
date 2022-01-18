// const StoreProduct = require("../models/storeProductModels");
// const ErrorHandler = require("../utils/errorhandler");
// const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// // Create new Individual individualOrder
// const newIndividualOrder = catchAsyncErrors(async (req, res, next) => {
//   const {
//     shippingInfo,
//     orderItems,
//     paymentInfo,
//     itemsPrice,
//     taxPrice,
//     shippingPrice,
//     totalPrice,
//   } = req.body;

//   const order = await individualOrder.create({
//     shippingInfo,
//     orderItems,
//     paymentInfo,
//     itemsPrice,
//     taxPrice,
//     shippingPrice,
//     totalPrice,
//     paidAt: Date.now(),
//     user: req.user._id,
//   });

//   res.status(201).json({
//     success: true,
//     order,
//   });
// });

// // get Single Individual individualOrder
// const getSingleIndividualOrder = catchAsyncErrors(async (req, res, next) => {
//   const order = await individualOrder.findById(req.params.id).populate(
//     "user",
//     "name email"
//   );

//   if (!order) {
//     return next(new ErrorHandler("Order not found with this Id", 404));
//   }

//   res.status(200).json({
//     success: true,
//     order,
//   });
// });

// // get logged in user Individual Orders
// const myIndividualOrders = catchAsyncErrors(async (req, res, next) => {
//   const orders = await individualOrder.find({ user: req.user._id });

//   res.status(200).json({
//     success: true,
//     orders,
//   });
// });

// // get all Individual Orders -- Admin
// const getAllIndividualOrders = catchAsyncErrors(async (req, res, next) => {
//   const orders = await individualOrder.find();

//   let totalAmount = 0;

//   orders.forEach((order) => {
//     totalAmount += order.totalPrice;
//   });

//   res.status(200).json({
//     success: true,
//     totalAmount,
//     orders,
//   });
// });

// // update individualOrder Status -- Admin
// const updateIndividualOrder = catchAsyncErrors(async (req, res, next) => {
//   const order = await individualOrder.findById(req.params.id);

//   if (!order) {
//     return next(new ErrorHandler("Order not found with this Id", 404));
//   }

//   if (order.orderStatus === "Delivered") {
//     return next(new ErrorHandler("You have already delivered this order", 400));
//   }

//   if (req.body.status === "Shipped") {
//     order.orderItems.forEach(async (o) => {
//       await updateStock(o.StoreProduct, o.quantity);
//     });
//   }
//   order.orderStatus = req.body.status;

//   if (req.body.status === "Delivered") {
//     order.deliveredAt = Date.now();
//   }

//   await order.save({ validateBeforeSave: false });
//   res.status(200).json({
//     success: true,
//   });
// });

// async function updateStock(id, quantity) {
//   const StoreProduct = await StoreProduct.findById(id);

//   StoreProduct.Stock -= quantity;

//   await StoreProduct.save({ validateBeforeSave: false });
// }

// // delete individualOrder -- Admin
// const deleteIndividualOrder = catchAsyncErrors(async (req, res, next) => {
//   const order = await individualOrder.findById(req.params.id);

//   if (!order) {
//     return next(new ErrorHandler("Order not found with this Id", 404));
//   }

//   await order.remove();

//   res.status(200).json({
//     success: true,
//   });
// });
