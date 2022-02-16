const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middlewares/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "gaged-app-backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const userRouterUrls = require("./routes/userRoutes");
const businessRouterUrls = require("./routes/businessRoutes");
const campaignUrls = require("./routes/campaignRoutes");
const storeProductUrls = require("./routes/storeProductRoutes");
const storeUrls = require("./routes/storeRoutes");
const productOrderUrls = require("./routes/productOrderRoutes");

app.use("/app/individual", userRouterUrls);
app.use("/app/business", businessRouterUrls);
app.use("/app/store", storeUrls);
// app.use("/app/store/products", storeProductUrls);
// app.use("/app/campaigns", campaignUrls);
app.use("/app/order", productOrderUrls);

app.use(express.static(path.join(__dirname, "../gaged-app-frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../gagaed-app-frontend/build/index.html")
  );
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
