import { useFilter } from "context/filterContext";
import style from "./CategoryBtn.module.scss";

export const CategoryBtn = ({ categoryLabel, categoryName }) => {
  const { category, setCategory } = useFilter();

  const handleClick = () => {
    setCategory("");
    setCategory(categoryLabel);
  };
  return (
    <span
      className={
        category === categoryLabel
          ? `${style.categoryBtn} ${style.clicked}`
          : style.categoryBtn
      }
      onClick={handleClick}
    >
      {categoryName}
    </span>
  );
};
