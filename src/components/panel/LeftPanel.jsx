import style from "./LeftPanel.module.scss";
import { LeftNewsCard } from "./NewsCard";
import { useEffect, useRef, useState } from "react";
import { getEverything, getTopHeadlines, getTopHeadlines1 } from "api/getNews";
import { useFilter } from "context/filterContext";
import { isBottom } from "components/virtualScroll";
import { throttle } from "components/throttle";
import { WeatherInfo } from "./WeatherInfo";
// import { getUserLocation } from "api/geoLocation";
// import { getWeatherData } from "api/weatherapi";

export const LeftPanel = ({ pageSize }) => {
  const [allNews, setAllNews] = useState([]);
  // const [weatherData, setWeatherData] = useState({});
  const page = useRef(1);
  const [isEnd, setIsEnd] = useState(false);
  const { category, country, query, language } = useFilter();
  useEffect(() => {
    const fetchData = async () => {
      if (query.length === 0) {
        const headlinesData = await getTopHeadlines(
          country,
          category,
          pageSize,
          page.current
        );
        console.log(
          await getTopHeadlines1(country, category, pageSize, page.current)
        );
        setAllNews(headlinesData);
      } else {
        const allNewsData = await getEverything(
          language,
          query,
          pageSize,
          page.current
        );
        setAllNews(allNewsData);
      }
    };
    fetchData();
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
  const handleScroll = throttle(getFreshNews, 2000);

  return (
    <>
      <div className={style.leftPanel}>
        <div className={style.leftPanelHeader}>
          <WeatherInfo />
          <p className={style.title}>焦點新聞</p>
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
