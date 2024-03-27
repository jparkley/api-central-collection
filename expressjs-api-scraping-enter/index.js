const PORT = 8080;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
