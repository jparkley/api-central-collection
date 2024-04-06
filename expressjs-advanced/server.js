const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server started on ${port}`);
});
