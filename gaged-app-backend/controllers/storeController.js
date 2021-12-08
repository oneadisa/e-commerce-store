const newStore = require("../models/storeModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerStore = asyncHandler(async (req, res) => {
  const { storeName, tagLine, description, link, logo, business } = req.body;

  const store = await newStore.create({
    storeName,
    tagLine,
    description,
    link,
    logo,
    business,
  });
  if (store) {
    res.status(201).json({
      _id: store._id,
      storeName: store.storeName,
      tagLine: store.tagLine,
      description: store.description,
      link: store.link,
      logo: store.logo,
      business: store.business,
      token: generateToken(store._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
  newStore
    .save()
    .then((data) => {
      res.json.stingify(data);
    })
    .catch((error) => {
      res.json.stringify(error);
    });
});

module.exports = registerStore;
