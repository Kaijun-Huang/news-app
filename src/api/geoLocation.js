import axios from "axios";
// const geoCodeBaseURL = "https://maps.googleapis.com/maps/api/geocode/json";
const geoCodeBaseURL = process.env.REACT_APP_GeoCodeBaseURL;

// const API_KEY = "AIzaSyCPE6n06HPh6bBkYXDGlJRLPNr_2Y7EhKI";
const API_KEY = process.env.REACT_APP_GeoLoaction_API_Key;

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
