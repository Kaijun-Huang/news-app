import axios from "axios";
const baseUrl = "https://newsapi.org/v2/";
// const api_key = "55a44a5925ca4c5da9b47ab603ec1071";
// const api_key = "1cae91a01378408481142597556d7ccd";
const api_key = "fe235f8dd24e4f668633aca2af28cc32";

export const getTopHeadlines = async (country, category, pageSize, page) => {
  try {
    const { data } = await axios.get(`${baseUrl}top-headlines`, {
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
  }
};

export const getEverything = async (language, query, pageSize, page) => {
  try {
    const { data } = await axios.get(`${baseUrl}everything`, {
      params: {
        q: "'" + query + "'",
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
  }
};
