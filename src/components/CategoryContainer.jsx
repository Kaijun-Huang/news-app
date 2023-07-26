import { CategoryBtn } from "./CategoryBtn";
import style from "./CategoryContainer.module.scss";

export const CategoryContainer = () => {
  return (
    <div className={style.container}>
      <CategoryBtn category="Business" />
      <CategoryBtn category="Entertainment" />
      <CategoryBtn category="General" />
      <CategoryBtn category="Health" />
      <CategoryBtn category="Science" />
      <CategoryBtn category="Technology" />
      <CategoryBtn category="Sports" />
    </div>
  );
};
