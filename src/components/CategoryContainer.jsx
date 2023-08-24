import { CategoryBtn } from "./CategoryBtn";
import styles from "./CategoryContainer.module.scss";

export const CategoryContainer = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <CategoryBtn categoryLabel="" categoryName="首頁" />
      <CategoryBtn categoryLabel="Business" categoryName="商業" />
      <CategoryBtn categoryLabel="Entertainment" categoryName="娛樂" />
      <CategoryBtn categoryLabel="Health" categoryName="健康" />
      <CategoryBtn categoryLabel="Science" categoryName="科學" />
      <CategoryBtn categoryLabel="Technology" categoryName="科技" />
      <CategoryBtn categoryLabel="Sports" categoryName="體育" />
    </div>
  );
};
