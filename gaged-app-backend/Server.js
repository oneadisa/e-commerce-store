const express = require("express");
const request = require("request");
const app = express();
const cloudinary = require("cloudinary");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const mongooseSerial = require("mongoose-serial");
const dotenv = require("dotenv");
const userRouterUrls = require("./routes/userRoutes");
const businessRouterUrls = require("./routes/businessRoutes");
const campaignUrls = require("./routes/campaignRoutes");
const storeProductUrls = require("./routes/storeProductRoutes");
const storeUrls = require("./routes/storeRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const errorMiddleware = require("./middlewares/error");
const path = require("path");

dotenv.config();
mongoose.connect(process.env.USERDATABASE_ACCESS, () =>
  console.log("Databases connected")
);

// mongoose.connect(process.env.BUSINESSDATABASE_ACCESS, () => console.log("Business Database connected"))

// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connected');
// });
//

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use("/app/individual", userRouterUrls);
app.use("/app/business", businessRouterUrls);
app.use("/app/store", storeUrls);
app.use("/app/store/products", storeProductUrls);
app.use("/app/campaigns", campaignUrls);

app.use(notFound);
app.use(errorHandler);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
app.use(errorMiddleware);

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
