import axios from "axios";
// const baseUrl = process.env.REACT_APP_NewsApiBaseUrl;
// const baseUrl = "https://newsapi.org/v2/";
const api_key = process.env.REACT_APP_BingNews_Api_Key;
// const api_key = "fe235f8dd24e4f668633aca2af28cc32";

const baseUrl = process.env.REACT_APP_BingNewsApiBaseUrl;
// const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

// const api_key = process.env.REACT_APP_NewsAPI_API_Key_1;
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
        "X-RapidAPI-Key": "b5ebc42dbemsh6bcc6f82a52d0a8p13b936jsn0284fa664f7b",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    }
  );
  return data.value;
};

export const getBingNewsBySearching = async (
  query,
  country,
  pageSize,
  page
) => {
  try {
    const { data } = await axios.get(`${baseUrl}/search`, {
      params: {
        q: query,
        mkt: country,
        count: pageSize,
        offset: page,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_BingNews_Api_Key,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    });
    return data.value;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getBingNewsByCategory = async (
  category,
  country,
  pageSize,
  page
) => {
  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        category,
        mkt: country,
        count: pageSize,
        offset: page,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_BingNews_Api_Key,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    });
    return data.value;
  } catch (error) {
    console.error(error);
    return false;
  }
};
