import LikedProducts from "../../components/LikedProducts/LikedProducts";
import styles from "./Favorites.module.css";

const Favorites = () => {
  return <div className={styles.favorites}>

    <LikedProducts />
  </div>;
};

export default Favorites;
