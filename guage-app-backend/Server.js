const express = require("express");
const request = require('request');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrls = require('./routes/routes');
const cors = require('cors');


dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use('/app', routerUrls)



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