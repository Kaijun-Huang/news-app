import { useEffect, useRef, useState } from "react";
import { RightNewsCard } from "./NewsCard";
import style from "./RightPanel.module.scss";
import { getEverything } from "api/getNews";
import { getCityName, getUserLocation } from "api/geoLocation";
import { isBottom } from "components/virtualScroll";
import { throttle } from "components/throttle";
export const RightPanel = ({ className, pageSize }) => {
  const [localNews, setLocalNews] = useState([]);
  const [city, setCity] = useState("");
  const page = useRef(1);

  useEffect(() => {
    const fetchData = async () => {
      const { latitude, longitude } = await getUserLocation();
      const cityName = await getCityName(latitude, longitude);
      const allNewsData = await getEverything(
        "zh",
        cityName,
        pageSize,
        page.current
      );
      setCity(cityName);
      if (allNewsData) setLocalNews(allNewsData);
    };
    fetchData();
  }, [pageSize]);

  const getFreshNews = async () => {
    page.current++;
    const freshData = await getEverything("zh", city, pageSize, page.current);
    if (freshData.length !== 0) {
      setLocalNews([...localNews, ...freshData]);
    }
  };

  const handleScroll = throttle(getFreshNews, 2000);

  return (
    <div className={`${style.rightPanel} ${className}`}>
      <p className={`${style.title}`}>{city + " - "}地方新聞</p>
      {localNews.length > 0 ? (
        <div
          className={style.cardsContainer}
          onScroll={(e) => {
            if (isBottom(e)) handleScroll();
          }}
        >
          {localNews.map((news, i) => (
            <RightNewsCard key={i} data={news} />
          ))}
        </div>
      ) : (
        "新聞資料系統維修中, 請稍後再試"
      )}
    </div>
  );
};
