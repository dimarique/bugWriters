import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import DesktopNavMenu from "../DesktopNavMenu/DesktopNavMenu.jsx";
const Header = ({ setMenuIsOpen, menuIsOpen }) => {
  let windowWidth = useWindowWidth();
  return (
    <div className={styles.header}>
      <div className={styles.icons_wrapper}>
        <Link to="/main">
          <Logo />
        </Link>
        <ThemeToggler />
      </div>
      {windowWidth >= 768 && <DesktopNavMenu />}
      <div className={styles.icons_wrapper}>
        <Link to='/favorites'>
          <FavoritesIcon />
        </Link>
        <CartIcon />
        <NavMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </div>
  );
};

export default Header;
