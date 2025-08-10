import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";
import Footer from "../../components/footer/footer.jsx";
const Main = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <Footer />
    </div>
  );
};

export default Main;
