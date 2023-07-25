import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import style from "./RightPanel.module.scss";
import { getTopHeadlines } from "api/getNews";
export const RightPanel = () => {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    (async () => setHeadlines(await getTopHeadlines("us")))();
  }, []);

  return (
    <div className={style.rightPanel}>
      <h3>Top-headlines</h3>
      {/*<div className={style.cardsContainer}>
        {headlines.map((headline, i) => (
          <NewsCard key={i} data={headline} />
        ))}
      </div> */}
    </div>
  );
};
