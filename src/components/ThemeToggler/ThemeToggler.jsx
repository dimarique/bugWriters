import styles from "./ThemeToggler.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const ThemeToggler = () => {
  return (
    <div className={styles.themeToggler}>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className={styles.theme_toggler}>
        <span className={`${styles.icon} ${styles.sun}`}>
          <img src={sun} alt="sun" />
        </span>
        <span className={`${styles.icon} ${styles.moon}`}>
          <img src={moon} alt="moon" />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
