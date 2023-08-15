import axios from "axios";
const API_KEY = "AIzaSyA0rC7Z_9M3MOqagNKbRgNfKi_GCm3F9eA";
const geoCodeBaseURL = "https://maps.googleapis.com/maps/api/geocode/json";

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      reject("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      resolve({ latitude, longitude });
    }
    function error() {
      reject("Unable to retrieve your location");
    }
  });
};

export const getCityName = async (lat, lng) => {
  try {
    const { data } = await axios.get(geoCodeBaseURL, {
      params: {
        latlng: lat + "," + lng,
        key: API_KEY,
        language: "zh-TW",
        result_type: "administrative_area_level_1",
      },
    });
    const city = data.results[0].address_components[0].long_name;
    return city;
  } catch (error) {
    console.error(error);
  }
};
