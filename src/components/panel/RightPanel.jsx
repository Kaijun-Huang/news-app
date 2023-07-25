import { useEffect } from "react";
import { NewsCard } from "./NewsCard";
import style from "./RightPanel.module.scss";
import { getTopHeadlines } from "../../api/getNews";
export const RightPanel = () => {
  useEffect(() => {
    getTopHeadlines();
  }, []);
  return (
    <div className={style.rightPanel}>
      <h3>Top-headlines</h3>
      <div>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
