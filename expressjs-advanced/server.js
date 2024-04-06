require("dotenv").config();
const express = require("express");
const router = require("./routes/index");

const app = express();

// User Express.Router middleware
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server started on ${PORT}`);
});
