import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";
import MenuList from "../MenuList/MenuList";

const NavMenu = () => {
  return (
    <>
      <div className={styles.navMenu}>
        <img src={burger} alt="Main menu" />
      </div>
      <MenuList />
    </>
  );
};

export default NavMenu;
