import axios from "axios";
const baseUrl = "https://newsapi.org/v2/";
const api_key = "55a44a5925ca4c5da9b47ab603ec1071";

export const getTopHeadlines = async (country, category) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}top-headlines?country=${country}&category=${category}`,
      {
        headers: {
          Authorization: "Bearer " + api_key,
        },
      }
    );
    return data.articles;
  } catch (error) {
    console.error(error);
  }
};

export const getEverything = async (language, query) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}everything?q=${query}&language=${language}&sortBy=publishedAt&searchIn=title,content`,
      {
        headers: {
          Authorization: "Bearer " + api_key,
        },
      }
    );
    console.log(data.articles);
    return data.articles;
  } catch (error) {
    console.error(error);
  }
};
