import { LeftNewsCard } from "./NewsCard";
import style from "./LeftPanel.module.scss";
import { useEffect, useState } from "react";
import { getEverything, getTopHeadlines } from "api/getNews";
import { useFilter } from "context/filterContext";

export const LeftPanel = () => {
  const [allNews, setAllNews] = useState([]);
  const { category, country, query, language } = useFilter();
  useEffect(() => {
    const showContent = async () => {
      if (query.length !== 0) setAllNews(await getEverything(language, query));
      else setAllNews(await getTopHeadlines(country, category));
    };
    showContent();
  }, [country, category, query, language]);
  const top10 = allNews.slice(0, 10);

  return (
    <div className={style.leftPanel}>
      <h3>焦點新聞</h3>
      <div className={style.cardsContainer}>
        {top10.length === 0
          ? "沒有內容喔!!"
          : top10.map((news, i) => <LeftNewsCard key={i} data={news} />)}
      </div>
    </div>
  );
};
