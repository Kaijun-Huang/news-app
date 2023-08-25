import style from "./LeftPanel.module.scss";
import { LeftNewsCard } from "./NewsCard";
import { useEffect, useRef, useState } from "react";
import { getBingNewsByCategory, getBingNewsBySearching } from "api/getNews";
import { useFilter } from "context/filterContext";
import { isBottom } from "components/virtualScroll";
import { throttle } from "components/throttle";
import { WeatherInfo } from "./WeatherInfo";
import { getCityName, getUserLocation } from "api/geoLocation";
export const LeftPanel = ({ pageSize }) => {
  const [city, setCity] = useState("");
  const [allNews, setAllNews] = useState([]);
  // const [weatherData, setWeatherData] = useState({});
  const page = useRef(0);
  const [isEnd, setIsEnd] = useState(false);
  const { category, country, query, language } = useFilter();
  useEffect(() => {
    const fetchData = async () => {
      const { latitude, longitude } = await getUserLocation();
      const cityName = await getCityName(latitude, longitude);
      setCity(cityName);
      if (query.length === 0) {
        const headlinesData = await getBingNewsByCategory(
          category,
          country,
          pageSize,
          page.current
        );

        if (headlinesData) setAllNews(headlinesData);
      } else {
        const searchResult = await getBingNewsBySearching(
          query,
          country,
          pageSize,
          page.current
        );
        if (searchResult) setAllNews(searchResult);
      }
    };
    fetchData();
  }, [country, category, query, language, pageSize]);

  const getFreshNews = async () => {
    page.current += pageSize;
    console.log(page.current);
    let freshData = [];
    if (query.length === 0) {
      freshData = await getBingNewsByCategory(
        category,
        country,
        pageSize,
        page.current
      );
    } else {
      freshData = await getBingNewsBySearching(
        query,
        country,
        pageSize,
        page.current
      );
    }

    if (freshData.length !== 0) {
      setAllNews([...allNews, ...freshData]);
    } else {
      setIsEnd(true);
    }
  };
  const handleScroll = throttle(getFreshNews, 2000);

  return (
    <>
      <div className={style.leftPanel}>
        <div className={style.leftPanelHeader}>
          <WeatherInfo city={city} />
          <p className={style.title}>焦點新聞</p>
        </div>
        {allNews.length > 0 ? (
          <div
            className={style.cardsContainer}
            onScroll={(e) => {
              if (category === "") {
                setIsEnd(true);
                return;
              } else {
                setIsEnd(false);
              }
              if (isBottom(e)) handleScroll();
            }}
          >
            {allNews?.map((news, i) => (
              <LeftNewsCard key={i} data={news} />
            ))}
            {isEnd ? <div>以上就是全部內容, 看看其他分類的新聞吧!</div> : ""}
          </div>
        ) : (
          "新聞資料系統維修中, 請稍後再試"
        )}
      </div>
    </>
  );
};
