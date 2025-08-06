import styles from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon.jsx";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.icons_wrapper}>
        <FavoritesIcon />
        <CartIcon />
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
