const Transaction = require("../models/transactionModels");
const asyncHandler = require("express-async-handler");
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({
    user: req.user._id,
  });
  res.json(transactions);
});

const CreateTransaction = asyncHandler(async (req, res) => {
  const {
    businessName,
    description,
    price,
    charges,
    totalPrice,
    status,
    category,
  } = req.body;

  if (
    !businessName ||
    !description ||
    !price ||
    !charges ||
    !totalPrice ||
    !status ||
    !category
  ) {
    res.status(400);
    throw new Error("Invalid transaction description.");
    return;
  } else {
    const transaction = new Transaction({
      user: req.user._id,
      businessName,
      description,
      price,
      charges,
      totalPrice,
      status,
      category,
    });

    const createdTransaction = await transaction.save();

    res.status(201).json(createdTransaction);
  }
});

const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }

  res.json(transaction);
});

const UpdateTransaction = asyncHandler(async (req, res) => {
  const {
    businessName,
    description,
    price,
    charges,
    totalPrice,
    status,
    category,
  } = req.body;

  const transaction = await Transaction.findById(req.params.id);

  if (transaction.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (transaction) {
    transaction.businessName = businessName;
    transaction.description = description;
    transaction.price = price;
    transaction.charges = charges;
    transaction.totalPrice = totalPrice;
    transaction.status = status;
    transaction.category = category;

    const updatedStoreProduct = await transaction.save();
    res.json(updatedStoreProduct);
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});

const DeleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (transaction) {
    await transaction.remove();
    res.json({ message: "Transaction Removed" });
  } else {
    res.status(404);
    throw new Error("Transaction not Found");
  }
});

module.exports = {
  getTransactions,
  CreateTransaction,
  getTransactionById,
  UpdateTransaction,
  DeleteTransaction,
};
