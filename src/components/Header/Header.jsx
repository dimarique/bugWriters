import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";

const Header = ({ setMenuIsOpen, menuIsOpen }) => {
  return (
    <div className={styles.header}>
      <div className={styles.icons_wrapper}>
        <Link to="/main">
          <Logo />
        </Link>
        <ThemeToggler />
      </div>
      <div className={styles.icons_wrapper}>
        <FavoritesIcon />
        <CartIcon />
        <NavMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </div>
  );
};

export default Header;
