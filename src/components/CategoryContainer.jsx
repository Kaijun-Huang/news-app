import { CategoryBtn } from "./CategoryBtn";
import styles from "./CategoryContainer.module.scss";

export const CategoryContainer = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <CategoryBtn categoryLabel="" categoryName="首頁" />
      <CategoryBtn categoryLabel="Business" categoryName="商業" />
      <CategoryBtn categoryLabel="World" categoryName="國際" />
      <CategoryBtn categoryLabel="Entertainment" categoryName="娛樂" />
      <CategoryBtn
        categoryLabel="ScienceAndTechnology"
        categoryName="科學與科技"
      />
      <CategoryBtn categoryLabel="Sports" categoryName="體育" />
    </div>
  );
};
