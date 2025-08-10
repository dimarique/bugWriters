import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";
import Footer from "../../components/footer/footer.jsx";
import Category from "../../components/Category/Category.jsx";
const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <Category />
    </div>
  );
};

export default Main;
