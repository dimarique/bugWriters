import styles from "./CategoriesPage.module.css";
import CategoriesList from "../../components/Categories/CategoriesList.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";

const CategoriesPage = () => {
  let windowWidth = useWindowWidth();
  return (
    <div className={styles.categoriesPage}>
      {windowWidth >= 768 && <Breadcrumbs />}
      <SectionHeader text={"Categories"} hasButton={false} />
      <CategoriesList />
    </div>
  );
};

export default CategoriesPage;
