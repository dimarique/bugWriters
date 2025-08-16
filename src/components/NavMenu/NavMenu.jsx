import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";
import MenuList from "../MenuList/MenuList";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const NavMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  let windowsWidth = useWindowWidth();
  return (
    <>
      <div className={styles.navMenu}>
        {windowsWidth < 768 && (
          <img
            onClick={() => setMenuIsOpen(true)}
            src={burger}
            alt="Main menu"
          />
        )}
      </div>
      <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  );
};

export default NavMenu;
