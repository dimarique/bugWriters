import styles from "./AllCategories.module.css";
import Categories from "../../components/Categories/CategoriesList.jsx";


const AllCategories = ({ categories }) => {
  return (
    <div className={styles.Allcategories}>

      <Categories categories={categories} />
    </div>
  );
};

export default AllCategories;
