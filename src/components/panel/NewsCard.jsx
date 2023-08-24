import { timeAgo } from "components/timeCacul";
import style from "./NewsCard.module.scss";

export const LeftNewsCard = ({ data }) => {
  const time = timeAgo(data.datePublished);
  return (
    <a href={data.url}>
      <div className={`${style.leftNewsCard}`}>
        {data.image?.thumbnail.contentUrl !== null ? (
          <img
            className={style.urlToImage}
            src={data.image?.thumbnail.contentUrl}
            alt="urlToImage"
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
