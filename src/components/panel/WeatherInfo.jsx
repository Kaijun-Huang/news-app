import { useEffect, useState } from "react";
import style from "./WeatherInfo.module.scss";
import { getUserLocation } from "api/geoLocation";
import { getWeatherData } from "api/weatherapi";

export const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { latitude, longitude } = await getUserLocation();
      const data = await getWeatherData(latitude, longitude);
      setWeatherData(data?.current);
    };
    fetchData();
  }, []);

  const roundUp = (num) => Math.round(num).toString();

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}@2x.png`;
  return (
    <div className={style.weatherInfoContainer}>
      <div className={style.imgAndCity}>
        <img src={iconUrl} alt="weatherIcon"></img>
      </div>
      <div className={style.weatherInfo}>
        <span>氣溫: {roundUp(weatherData?.temp)}度</span>
        <span>體感溫度: {roundUp(weatherData?.feels_like)}度</span>
        <span>濕度: {weatherData?.humidity}%</span>
      </div>
    </div>
  );
};
