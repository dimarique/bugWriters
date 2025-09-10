import styles from "./CategoriesPage.module.css";
import CategoriesList from "../../components/Categories/CategoriesList.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

const CategoriesPage = () => {
  return (
    <div className={styles.categoriesPage}>
      <Breadcrumbs />
      <SectionHeader text={"Categories"} hasButton={false} />
      <CategoriesList />
    </div>
  );
};

export default CategoriesPage;
