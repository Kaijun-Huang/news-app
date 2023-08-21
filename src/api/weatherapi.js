import axios from "axios";
const openWeatherBaseUrl = "https://api.openweathermap.org/data/3.0/onecall";
const api_key = "376e239215cdd28a1d69e7666bb3f799";
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

// const baseUrl = "http://api.weatherapi.com/v1";
// const api_key = "65f48f0a478c46888b662337231508";

// export const getWeatherData = async (lat, lng) => {
//   try {
//     const { data } = await axios.get(`${baseUrl}/current.json`, {
//       params: { q: `${lat},${lng}`, key: api_key },
//     });
//     return data.current;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getWeatherData = async (lat, lon) => {
//   try {
//     const { data } = await axios.get(
//       `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather`,
//       {
//         params: { lat: lat, lon: lon },
//         headers: {
//           "X-RapidAPI-Key":
//             "ec7e7c4c67msh1b2ace81c9ada05p14cab9jsn45762cb5d0db",
//           "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//         },
//       }
//     );
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };