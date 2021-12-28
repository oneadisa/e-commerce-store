const Cart = require("../models/cartModels");
const asyncHandler = require("express-async-handler");
const getCartProducts = asyncHandler(async (req, res) => {
  const cartProducts = await Cart.find({
    user: req.user._id,
  });
  res.json(cartProducts);
});

const CreateCartProduct = asyncHandler(async (req, res) => {
  const { businessName, productName, description, quantity, price } = req.body;

  if (!businessName || !productName || !description || !quantity || !price) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const cartProduct = new Cart({
      user: req.user._id,
      businessName,
      productName,
      description,
      quantity,
      price,
    });

    const createdStoreProduct = await cartProduct.save();

    res.status(201).json(createdStoreProduct);
  }
});

const getCartProductById = asyncHandler(async (req, res) => {
  const cartProduct = await Cart.findById(req.params.id);

  if (cartProduct) {
    res.json(cartProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(cartProduct);
});

const UpdateCartProduct = asyncHandler(async (req, res) => {
  const { businessName, productName, description, quantity, price } = req.body;

  const cartProduct = await Cart.findById(req.params.id);

  if (cartProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (cartProduct) {
    cartProduct.businessName = businessName;
    cartProduct.productName = productName;
    cartProduct.description = description;
    cartProduct.quantity = quantity;
    cartProduct.price = price;

    const updatedStoreProduct = await cartProduct.save();
    res.json(updatedStoreProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const DeleteCartProduct = asyncHandler(async (req, res) => {
  const cartProduct = await Cart.findById(req.params.id);

  if (cartProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (cartProduct) {
    await cartProduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

module.exports = {
  getCartProducts,
  CreateCartProduct,
  getCartProductById,
  UpdateCartProduct,
  DeleteCartProduct,
};
