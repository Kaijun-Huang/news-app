import { NewsCard } from "./NewsCard";
import style from "./LeftPanel.module.scss";

export const LeftPanel = () => {
  return (
    <div className={style.leftPanel}>
      <h3>Everything / Based on category</h3>
      <div>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
