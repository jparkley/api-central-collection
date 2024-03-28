const PORT = process.env.port || 8080;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/enter", async (req, res) => {
  try {
    const content = await scraper();
    return res.status(200).json({
      result: content,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

async function scraper() {
  const content = [];
  await axios.get("https://www.allkpop.com/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    $('a:contains("pop")', html).each(function () {
      content.push({
        title: $(this).text(),
        url: $(this).attr("href"),
      });
    });
  });
  // console.log("🚀 ~ content:", content);
  return content;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
