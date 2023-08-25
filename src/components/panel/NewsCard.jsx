import { timeAgo } from "components/timeCacul";
import style from "./NewsCard.module.scss";

export const LeftNewsCard = ({ data }) => {
  const time = timeAgo(data.datePublished);
  return (
    <a href={data.url}>
      <div className={`${style.leftNewsCard}`}>
        {data.image?.thumbnail.contentUrl !== undefined ? (
          <img
            className={style.urlToImage}
            src={data.image?.thumbnail.contentUrl}
            alt="img"
          />
        ) : (
          ""
        )}
        <div className={style.titleAuthorAndDate}>
          <p className={style.title}>
            {data.name.length > 60
              ? data.name.slice(0, 60).concat("...")
              : data.name}
          </p>
          <div className={style.authorAndDate}>
            <span>{time}</span>
            {data.provider ? <span>from: {data.provider[0].name}</span> : ""}
          </div>
        </div>
      </div>
    </a>
  );
};

export const RightNewsCard = ({ data }) => {
  return (
    <a href={data.url}>
      <div className={style.rightNewsCard}>
        <div className={style.imgAndTitle}>
          {data.image?.thumbnail.contentUrl !== undefined ? (
            <img
              className={style.urlToImage}
              src={data.image?.thumbnail.contentUrl}
              alt="img"
            />
          ) : (
            ""
          )}
          <p className={style.title}>
            {data.name.length > 60
              ? data.name.slice(0, 60).concat("...")
              : data.name}
          </p>
        </div>
      </div>
    </a>
  );
};
