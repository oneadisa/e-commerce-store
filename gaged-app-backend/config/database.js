const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.USERDATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
