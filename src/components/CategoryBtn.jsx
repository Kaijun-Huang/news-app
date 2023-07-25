import style from "./CategoryBtn.module.scss";

export const CategoryBtn = ({ category }) => {
  return <span className={style.categoryBtn}>{category}</span>;
};
