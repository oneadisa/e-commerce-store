const Checkout = require("../models/checkoutModel");
const asyncHandler = require("express-async-handler");
const getheckoutProducts = asyncHandler(async (req, res) => {
  const checkoutProducts = await Checkout.find({
    user: req.user._id,
  });
  res.json(checkoutProducts);
});

const CreateCheckoutProduct = asyncHandler(async (req, res) => {
  const {
    businessName,
    productName,
    description,
    quantity,
    price,
    deliveryCharges,
  } = req.body;

  if (!businessName || !productName || !description || !quantity || !price) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const checkoutProduct = new Checkout({
      user: req.user._id,
      businessName,
      productName,
      description,
      quantity,
      price,
      deliveryCharges,
    });

    const createdCheckoutProduct = await checkoutProduct.save();

    res.status(201).json(createdCheckoutProduct);
  }
});

const getCheckoutProductById = asyncHandler(async (req, res) => {
  const checkoutProduct = await Checkout.findById(req.params.id);

  if (checkoutProduct) {
    res.json(checkoutProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(checkoutProduct);
});

const UpdateCheckoutProduct = asyncHandler(async (req, res) => {
  const { businessName, productName, description, quantity, price } = req.body;

  const checkoutProduct = await Checkout.findById(req.params.id);

  if (checkoutProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (checkoutProduct) {
    checkoutProduct.businessName = businessName;
    checkoutProduct.productName = productName;
    checkoutProduct.description = description;
    checkoutProduct.quantity = quantity;
    checkoutProduct.price = price;

    const updatedStoreProduct = await checkoutProduct.save();
    res.json(updatedStoreProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const DeleteCheckOutProduct = asyncHandler(async (req, res) => {
  const checkoutProduct = await Checkout.findById(req.params.id);

  if (checkoutProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (checkoutProduct) {
    await checkoutProduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

module.exports = {
  getheckoutProducts,
  CreateCheckoutProduct,
  getCheckoutProductById,
  UpdateCheckoutProduct,
  DeleteCheckOutProduct,
};
