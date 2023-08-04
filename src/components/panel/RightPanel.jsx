import { useEffect, useState } from "react";
import { RightNewsCard } from "./NewsCard";
import style from "./RightPanel.module.scss";
import { getEverything } from "api/getNews";
import { useFilter } from "context/filterContext";
export const RightPanel = ({ className }) => {
  const [localNews, setLocalNews] = useState([]);
  const { language } = useFilter();
  useEffect(() => {
    (async () => setLocalNews(await getEverything(language, "台北")))();
  }, [language]);
  const top10 = localNews.slice(0, 15);
  return (
    <div className={`${style.rightPanel} ${className}`}>
      <h3>地方新聞</h3>
      <div className={style.cardsContainer}>
        {top10.map((news, i) => (
          <RightNewsCard key={i} data={news} />
        ))}
      </div>
    </div>
  );
};
