import { useEffect, useRef, useState } from "react";
import { RightNewsCard } from "./NewsCard";
import style from "./RightPanel.module.scss";
import { getBingNewsByCategory } from "api/getNews";
export const RightPanel = ({ className, pageSize }) => {
  const [localNews, setLocalNews] = useState([]);
  const page = useRef(1);

  useEffect(() => {
    const fetchData = async () => {
      const allNewsData = await getBingNewsByCategory(
        "",
        "zh-TW",
        pageSize,
        page.current
      );
      if (allNewsData) setLocalNews(allNewsData);
    };
    fetchData();
  }, [pageSize]);

  // const getFreshNews = async () => {
  //   page.current++;
  //   const freshData = await getEverything("zh", city, pageSize, page.current);
  //   if (freshData.length !== 0) {
  //     setLocalNews([...localNews, ...freshData]);
  //   }
  // };

  // const handleScroll = throttle(getFreshNews, 2000);

  return (
    <div className={`${style.rightPanel} ${className}`}>
      <p className={`${style.title}`}>地方新聞</p>
      {localNews.length > 0 ? (
        <div
          className={style.cardsContainer}
          // onScroll={(e) => {
          //   if (isBottom(e)) handleScroll();
          // }}
        >
          {localNews.map((news, i) => (
            <RightNewsCard key={i} data={news} />
          ))}
          <div>以上就是全部內容</div>
        </div>
      ) : (
        "新聞資料系統維修中, 請稍後再試"
      )}
    </div>
  );
};
