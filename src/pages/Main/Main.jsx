import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />
    </div>
  );
};

export default Main;
