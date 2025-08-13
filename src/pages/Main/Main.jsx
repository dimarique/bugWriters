import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";
import CategoryList from "../../components/Categories/CategoryList.jsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <CategoryList categories={categories.slice(0, 4)} />
    </div>
  );
};

export default Main;
