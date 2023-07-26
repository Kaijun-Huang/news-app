import { NewsCard } from "./NewsCard";
import style from "./LeftPanel.module.scss";
import { useEffect, useState } from "react";
import { getEverything, getTopHeadlines } from "api/getNews";
import { useFilter } from "context/filterContext";

export const LeftPanel = () => {
  const [allNews, setAllNews] = useState([]);
  const { category, country, query } = useFilter();
  useEffect(() => {
    (async () => setAllNews(await getTopHeadlines(country, category, query)))();
  }, [country, category, query]);
  return (
    <div className={style.leftPanel}>
      <h3>焦點新聞</h3>
      <div className={style.cardsContainer}>
        {allNews.map((news, i) => (
          <NewsCard key={i} data={news} />
        ))}
      </div>
    </div>
  );
};
