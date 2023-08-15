import axios from "axios";
const baseUrl = "http://api.weatherapi.com/v1";
const api_key = "65f48f0a478c46888b662337231508";

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(`${baseUrl}/current.json`, {
      params: { q: `${lat},${lng}`, key: api_key },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
