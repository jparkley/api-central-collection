const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "DB successfully connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("Error while connecting DB", err);
  }
};

module.exports = connectDB;
