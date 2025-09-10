import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";
import MenuList from "../MenuList/MenuList";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import burger_dark from '../../assets/burger_dark.svg'
import { useSelector } from "react-redux";

const NavMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  let windowsWidth = useWindowWidth();

  const theme = useSelector((state) => state.theme.selectedTheme);
  const isDark = theme === "dark";

  return (
    <>
      <div className={styles.navMenu}>
        {windowsWidth < 768 && (
          <img
            onClick={() => setMenuIsOpen(true)}
            src={isDark ? burger_dark : burger}
            alt="Main menu"
          />
        )}
      </div>
      <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  );
};

export default NavMenu;
