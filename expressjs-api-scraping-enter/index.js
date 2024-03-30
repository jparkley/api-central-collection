require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const APIConstants = require("./constants");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/mlb", async (req, res) => {
  try {
    const result = await scraper();
    return res.status(200).json({
      result,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

async function scraper() {
  // console.log("🚀 ~ APIConstants.sites.forEach ~ site:", site.url);

  const content = [];
  const { data: html } = await axios("https://apnews.com/hub/mlb");
  const $ = cheerio.load(html);

  $('a:contains("Dodgers")', html).each(function () {
    content.push({
      title: $(this).text(),
      url: $(this).attr("href"),
    });
  });
  return content;

  // await axios.get("https://apnews.com/hub/mlb").then((res) => {
  //   const html = res.data;
  //   const $ = cheerio.load(html);

  //   $('a:contains("Dodgers")', html).each(function () {
  //     content.push({
  //       title: $(this).text(),
  //       url: $(this).attr("href"),
  //     });
  //   });
  //   return content;
  // });
  // return content;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
