// require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios");
const cheerio = require("cheerio");
const APIConstants = require("./constants");

// const PORT = process.env.PORT || 8080;

const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome!");
// });

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
  const result = await Promise.all(
    APIConstants.sites.map(async (site) => {
      const { data: html } = await axios(site.url);
      const $ = cheerio.load(html);
      const articles = [];

      $('a:contains("Dodgers")', html).each(function () {
        articles.push({
          title: $(this).text(),
          url: $(this).attr("href"),
        });
      });
      return articles;
    })
  );
  return result.flat();
}

export const handler = serverless(app);
