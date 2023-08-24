import axios from "axios";
const baseUrl = process.env.REACT_APP_NewsApiBaseUrl;
const api_key = process.env.REACT_APP_NewsAPI_API_Key_1;

export const getTopHeadlines = async (country, category, pageSize, page) => {
  try {
    const { data } = await axios.get(`${baseUrl}top-headlines`, {
      // const { data } = await axios.get("/api/top-headlines", {
      params: {
        country,
        category,
        pageSize,
        page,
      },
      headers: {
        Authorization: "Bearer " + api_key,
      },
    });
    return data.articles;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getEverything = async (language, query, pageSize, page) => {
  try {
    const { data } = await axios.get(`${baseUrl}everything`, {
      // const { data } = await axios.get("/api/everything", {
      params: {
        q: query,
        language,
        pageSize,
        page: page,
        sortBy: "publishedAt",
        searchIn: "title,description",
      },
      headers: {
        Authorization: "Bearer " + api_key,
      },
    });
    return data.articles;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const testApi = async () => {
  const { data } = await axios.get(
    "https://bing-news-search1.p.rapidapi.com/news?mkt=zh-TW",
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_BingNews_Api_Key,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    }
  );
  return data;
};
