import { CategoryBtn } from "./CategoryBtn";
import style from "./CategoryContainer.module.scss";

export const CategoryContainer = () => {
  return (
    <div className={style.container}>
      <CategoryBtn category="Business" />
      <CategoryBtn category="Technology" />
      <CategoryBtn category="Entertainment" />
      <CategoryBtn category="Health" />
      <CategoryBtn category="International" />
      <CategoryBtn category="Taiwan" />
    </div>
  );
};
