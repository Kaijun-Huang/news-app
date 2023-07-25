import style from "./NewsCard.module.scss";

export const NewsCard = () => {
  return (
    <div className={style.newsCard}>
      <p>title</p>
      <p>author</p>
      <p>description</p>
      <p>url</p>
    </div>
  );
};
