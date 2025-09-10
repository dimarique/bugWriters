import styles from "./ThemeToggler.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { switchTheme } from "../../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.selectedTheme);

  const themeToggle = () => {
    dispatch(switchTheme());
  };

  return (
    <div className={styles.themeToggler}>
      <input
        type="checkbox"
        id="toggle"
        onChange={themeToggle}
        checked={theme === "dark" ? true : false}
      />
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
