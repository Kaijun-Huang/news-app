import { CategoryBtn } from "./CategoryBtn";
import styles from "./CategoryContainer.module.scss";

export const CategoryContainer = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <CategoryBtn category="General" />
      <CategoryBtn category="Business" />
      <CategoryBtn category="Entertainment" />
      <CategoryBtn category="Health" />
      <CategoryBtn category="Science" />
      <CategoryBtn category="Technology" />
      <CategoryBtn category="Sports" />
    </div>
  );
};
