import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";
import MenuList from "../MenuList/MenuList";

const NavMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <>
      <div className={styles.navMenu}>
        <img onClick={() => setMenuIsOpen(true)} src={burger} alt="Main menu" />
      </div>
      <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  );
};

export default NavMenu;
