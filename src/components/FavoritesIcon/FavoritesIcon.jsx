import styles from "./FavoritesIcon.module.css";
import heart from "../../assets/heart.svg";

const FavoritesIcon = () => {
  return (
    <div className={styles.favoritesIcon}>
      <img src={heart} alt="favorites" />
    </div>
  );
};

export default FavoritesIcon;
