import styles from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icons_wrapper}>
        <Logo />
        <ThemeToggler />
      </div>
      <div className={styles.icons_wrapper}>
        <FavoritesIcon />
        <CartIcon />
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
