import { NewsCard } from "./NewsCard";
import style from "./LeftPanel.module.scss";
import { useEffect, useState } from "react";
import { getTopHeadlines } from "api/getNews";

export const LeftPanel = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    (async () => setAllNews(await getTopHeadlines("us")))();
  }, []);
  return (
    <div className={style.leftPanel}>
      <h3>Everything / Based on category</h3>
      <div className={style.cardsContainer}>
        {allNews.map((news, i) => (
          <NewsCard key={i} data={news} />
        ))}
      </div>
    </div>
  );
};
