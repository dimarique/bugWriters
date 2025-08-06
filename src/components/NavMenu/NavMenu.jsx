import styles from "./NavMenu.module.css";
import burger from "../../assets/burger.svg";

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <img src={burger} alt="Main menu" />
    </div>
  );
};

export default NavMenu;
