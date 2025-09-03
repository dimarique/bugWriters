import styles from "./FavoritesIcon.module.css";
import heart from "../../assets/heart.svg";
import { useSelector } from "react-redux";
const FavoritesIcon = () => {
const count = useSelector((state)=> state.favorites.favProducts.length)
  return (
    <div className={styles.favoritesIcon}>
      <img src={heart} alt="favorites" />
      {count > 0 && <span className={styles.countBage}>{count}</span>}
    </div>
  );
};
export default FavoritesIcon;