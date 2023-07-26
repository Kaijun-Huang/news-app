import { useFilter } from "context/filterContext";
import style from "./CategoryBtn.module.scss";

export const CategoryBtn = ({ category }) => {
  const { setCategory } = useFilter();

  const handleClick = () => {
    setCategory("");
    setCategory(category);
  };
  return (
    <span className={style.categoryBtn} onClick={handleClick}>
      {category}
    </span>
  );
};
