import styles from "./CategoriesPage.module.css";
import CategoriesList from "../../components/Categories/CategoriesList.jsx";

const CategoriesPage = () => {

  return (
    <div className={styles.categoriesPage}>
      <CategoriesList />
    </div>
  );
};

export default CategoriesPage;
