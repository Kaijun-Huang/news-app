const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const baseUrl = process.env.REACT_APP_NewsApiBaseUrl;
// const baseUrl = "https://newsapi.org/v2/";
const api_key = process.env.REACT_APP_NewsAPI_API_Key_1;
// const api_key = "fe235f8dd24e4f668633aca2af28cc32";

const app = express();
app.use(cors());

app.use(express.static("build"));
app.get("/api/search", (req, res) => {
  console.log(baseUrl);
  const option = {
    method: "get",
    url: `${baseUrl}top-headlines`,
    params: {
      country: req.query.country,
      category: req.query.category,
    },
    headers: {
      Authorization: "Bearer " + api_key,
    },
  };
  axios
    .request(option)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/api/category", (req, res) => {
  const option = {
    method: "get",
    url: `${baseUrl}/search`,
    params: {
      category: req.query.category,
      mkt: req.query.country,
      count: req.query.pageSize,
      offset: req.query.page,
    },
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  axios
    .request(option)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
