import { LeftNewsCard } from "./NewsCard";
import style from "./LeftPanel.module.scss";
import { useEffect, useRef, useState } from "react";
import { getEverything, getTopHeadlines } from "api/getNews";
import { useFilter } from "context/filterContext";
import { isBottom } from "components/virtualScroll";
import { throttle } from "components/throttle";
import { getWeatherData } from "api/weatherapi";
import { getUserLocation } from "api/geoLocation";
export const LeftPanel = ({ pageSize }) => {
  const [allNews, setAllNews] = useState([]);
  const page = useRef(1);
  const [isEnd, setIsEnd] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const { category, country, query, language } = useFilter();
  useEffect(() => {
    const showContent = async () => {
      const allNewsData = await getEverything(
        language,
        query,
        pageSize,
        page.current
      );
      const headlinesData = await getTopHeadlines(
        country,
        category,
        pageSize,
        page.current
      );
      if (query.length !== 0) {
        setAllNews(allNewsData);
      } else {
        setAllNews(headlinesData);
      }
    };
    const showWeather = async () => {
      const { latitude, longitude } = await getUserLocation();
      const weatherData = await getWeatherData(latitude, longitude);
      console.log(weatherData);
      setWeatherData(weatherData);
    };
    showContent();
    showWeather();
  }, [country, category, query, language, pageSize]);

  const getFreshNews = async () => {
    page.current++;
    const freshData = await getTopHeadlines(
      country,
      category,
      pageSize,
      page.current
    );
    if (freshData.length !== 0) {
      setAllNews([...allNews, ...freshData]);
    } else {
      setIsEnd(true);
    }
  };
  console.log(weatherData);
  const handleScroll = throttle(getFreshNews, 2000);
  return (
    <>
      <div className={style.leftPanel}>
        <div className={style.leftPanelHeader}>
          {weatherData.length > 0 ? (
            <div className={style.weatherInfoContainer}>
              <div className={style.imgAndCity}>
                <img
                  src={weatherData?.current.condition.icon}
                  alt="weatherIcon"
                ></img>
                <span id="location">{weatherData?.location.tz_id}</span>
              </div>
              <div className={style.weatherInfo}>
                <span id="temperature">氣溫:{weatherData?.current.temp_c}</span>
                <span id="feelsLike">
                  體感溫度:{weatherData?.current.feelslike_c}
                </span>
                <span id="humidity">濕度:{weatherData?.current.humidity}</span>
              </div>
            </div>
          ) : (
            ""
          )}

          <span className={style.title}>焦點新聞</span>
        </div>
        <div
          className={style.cardsContainer}
          onScroll={(e) => {
            if (isBottom(e)) handleScroll();
          }}
        >
          {allNews.map((news, i) => (
            <LeftNewsCard key={i} data={news} />
          ))}
          {isEnd ? <div>以上就是全部內容</div> : ""}
        </div>
      </div>
    </>
  );
};
