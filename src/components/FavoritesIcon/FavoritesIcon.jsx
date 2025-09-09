import styles from "./FavoritesIcon.module.css";
import heart from "../../assets/heart.svg";
import { useSelector } from "react-redux";
import heart_dark from "../../assets/heart_dark.svg";
const FavoritesIcon = () => {
  const count = useSelector((state) => state.favorites.favProducts.length);

  const theme = useSelector((state) => state.theme.selectedTheme);
  const isDark = theme === "dark";

  return (
    <div className={styles.favoritesIcon}>
      <img src={isDark ? heart_dark : heart} alt="favorites" />
      {count > 0 && <span className={styles.countBage}>{count}</span>}
    </div>
  );
};
export default FavoritesIcon;
