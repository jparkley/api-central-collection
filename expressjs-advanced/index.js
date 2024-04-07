require("dotenv").config();
const express = require("express");
const router = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();

const app = express();

// Use Express body parser middleware
app.use(express.json());

// Use Express.Router middleware
app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server started on ${PORT}`);
});
