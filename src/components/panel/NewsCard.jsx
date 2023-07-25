import style from "./NewsCard.module.scss";

export const NewsCard = ({ data }) => {
  return (
    <a href={data.url}>
      <div className={style.newsCard}>
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
          <p>{data.title}</p>
        </div>
        <p className={style.description}>{data.description}</p>
        {/* <p className={style.content}>{data.content}</p> */}
        <div className={style.authorAndDate}>
          <p>{data.author}</p>
          <p>{data.publishedAt}</p>
        </div>
      </div>
    </a>
  );
};
