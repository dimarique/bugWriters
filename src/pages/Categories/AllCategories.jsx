import styles from "./CategoriesPage.module.css";
import Categories from "../../components/Categories/Categories.jsx";


const AllCategories = ({ categories }) => {
  return (
    <div className={styles.Allcategories}>
      
          <Categories categories={categories} />
    </div>
  );
};

export default AllCategories;
