import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";
import MenuList from "../MenuList/MenuList";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const NavMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  const windowsWidth = useWindowWidth();
  return (
    <>
      <div className={styles.navMenu}>
        {windowsWidth === "mobile" && (
          <img
            onClick={() => setMenuIsOpen(true)}
            src={burger}
            alt="Main menu"
          />
        )}
      </div>
      {windowsWidth === "mobile" && (
        <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      )}
    </>
  );
};

export default NavMenu;
