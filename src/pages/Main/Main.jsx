import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";
import CategoriesList from "../../components/Categories/CategoriesList.jsx";
import DiscountForm from "../../components/DiscountForm/DiscountForm.jsx";


const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />

      <CategoriesList  />

      <DiscountForm />

    </div>
  );
};

export default Main;
