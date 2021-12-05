const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerUrls = require("./routes/userRoutes");
const campaignUrls = require("./routes/campaignRoutes");
const storeProductUrls = require("./routes/storeProductRoutes");
const storeUrls = require("./routes/storeRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/app", routerUrls);
app.use("/app/store", storeUrls);
app.use("/app/store/products", storeProductUrls);
app.use("/app/campaigns", campaignUrls);

app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
// res.send("Hello World!");
// });
//
// app.post("/", (req, res) => {
// console.log("Connected to React");
// res.redirect("/login");
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));