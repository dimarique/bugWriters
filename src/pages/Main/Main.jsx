import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";

import CategoryList from "../../components/Categories/CategoryList.jsx";


import Category from "../../components/Category/Category.jsx";
import DiscountForm from "../../components/DiscountForm/DiscountForm.jsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />

      <CategoryList categories={categories.slice(0, 4)} />

      <Category />
      <DiscountForm />

    </div>
  );
};

export default Main;
