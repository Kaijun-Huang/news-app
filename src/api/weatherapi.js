import axios from "axios";
const openWeatherBaseUrl = process.env.REACT_APP_OpenWeatherBaseUrl;
const api_key = process.env.REACT_APP_OpenWeather_API_Key;

export const getWeatherData = async (lat, lon) => {
  try {
    const { data } = await axios.get(openWeatherBaseUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: api_key,
        exclude: "hourly,daily,minutely,alerts",
        units: "metric",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
