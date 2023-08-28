import axios from "axios";
// const openWeatherBaseUrl = process.env.REACT_APP_OpenWeatherBaseUrl;
// const api_key = process.env.REACT_APP_OpenWeather_API_Key;

const openWeatherBaseUrl = "https://api.openweathermap.org/data/3.0/onecall";
const api_key = "93bc29abfa33b0b5b243f62874ec9f56";

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
