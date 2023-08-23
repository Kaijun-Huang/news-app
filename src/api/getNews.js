import axios from "axios";
const newsApiBaseUrl = "https://newsapi.org/v2/";
// const gnewsApiBaseUrl = "https://gnews.io/api/v4/";
const news_api_key = process.env.REACT_APP_NewsAPI_API_Key_1;
//Gnews

// export const getTopHeadlines1 = async (country, category, pageSize, page) => {
//   try {
//     const { data } = await axios.get(`${gnewsApiBaseUrl}top-headlines`, {
//       params: {
//         country,
//         category,
//         pageSize,
//         page,
//       },
//       headers: {
//         Authorization: "Bearer " + gnews_api_key,
//       },
//     });
//     return data.articles;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getEverything1 = async (language, query, pageSize, page) => {
//   try {
//     const { data } = await axios.get(`${gnewsApiBaseUrl}search`, {
//       params: {
//         q: "'" + query + "'",
//         language,
//         max: pageSize,
//         page,
//         in: "title,description",
//       },
//       headers: {
//         Authorization: "Bearer " + gnews_api_key,
//       },
//     });
//     return data.articles;
//   } catch (error) {
//     console.error(error);
//   }
// };

//newsAPI

export const getTopHeadlines = async (country, category, pageSize, page) => {
  try {
    const { data } = await axios.get(`${newsApiBaseUrl}top-headlines`, {
      params: {
        country,
        category,
        pageSize,
        page,
      },
      headers: {
        Authorization: "Bearer " + news_api_key,
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
    const { data } = await axios.get(`${newsApiBaseUrl}everything`, {
      params: {
        q: "'" + query + "'",
        language,
        pageSize,
        page: page,
        sortBy: "publishedAt",
        searchIn: "title,description",
      },
      headers: {
        Authorization: "Bearer " + news_api_key,
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
    "https://newsi-api.p.rapidapi.com/api/category?category=world&language=en&country=us",
    {
      headers: {
        "X-RapidAPI-Key": "ec7e7c4c67msh1b2ace81c9ada05p14cab9jsn45762cb5d0db",
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    }
  );
  return data;
};
