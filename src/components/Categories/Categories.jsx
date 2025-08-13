import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";


const Categories = ({ categories }) => {

  return (
    <div className={styles.categories}>
          {categories.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}

    </div>
  );
};


export default Categories;
