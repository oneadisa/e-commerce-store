const express = require("express");
const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const mongoose = require("mongoose");

require("dotenv").config();

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "gaged-app-backend/config/config.env" });
}

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const Server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  Server.close(() => {
    process.exit(1);
  });
});

// dotenv.config();
// mongoose.connect(process.env.USERDATABASE_ACCESS, () =>
// console.log("Databases connected")
// );

// mongoose.connect(process.env.BUSINESSDATABASE_ACCESS, () => console.log("Business Database connected"))

// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connected');
// });
//

// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true }));
// app.use(cors());
// app.use("/app/individual", userRouterUrls);
// app.use("/app/business", businessRouterUrls);
// app.use("/app/store", storeUrls);
// app.use("/app/store/products", storeProductUrls);
// app.use("/app/campaigns", campaignUrls);
// app.use("/app/order", productOrderUrls);
//
// app.use(notFound);
// app.use(errorHandler);
