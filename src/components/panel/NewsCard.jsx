import { timeAgo } from "components/timeCacul";
import style from "./NewsCard.module.scss";

export const LeftNewsCard = ({ data }) => {
  const time = timeAgo(data.publishedAt);
  return (
    <a href={data.url}>
      <div className={`${style.leftNewsCard}`}>
        <div className={style.imgAndTitle}>
          {data.urlToImage !== null ? (
            <img
              className={style.urlToImage}
              src={data.urlToImage}
              alt="urlToImage"
            />
          ) : (
            ""
          )}
          <div className={style.titleAuthorAndDate}>
            <p className={style.title}>{data.title}</p>
            <div className={style.authorAndDate}>
              <span>{time}</span>
              {data.author ? <span>from: {data.author}</span> : ""}
            </div>
          </div>
        </div>
        {/* <p className={style.description}>{data.description}</p> */}
      </div>
    </a>
  );
};

export const RightNewsCard = ({ data }) => {
  return (
    <a href={data.url}>
      <div className={style.rightNewsCard}>
        <div className={style.imgAndTitle}>
          {data.urlToImage !== null ? (
            <img
              className={style.urlToImage}
              src={data.urlToImage}
              alt="urlToImage"
            />
          ) : (
            ""
          )}
          <p className={style.title}>{data.title}</p>
        </div>
      </div>
    </a>
  );
};
