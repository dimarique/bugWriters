import styles from "./MenuList.module.css";
import close from "../../assets/x.svg";
const MenuList = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <div className={`${styles.menuList} ${menuIsOpen ? styles.open : ""}`}>
      <img onClick={() => setMenuIsOpen(false)} src={close} alt="" />
      <nav>
        <ul>
          <li>
            <a href="">Main Page</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">All products</a>
          </li>
          <li>
            <a href="">All sales</a>
          </li>
        </ul>
      </nav>
      <a className={styles.discount_link} href="">
        1 day discount!
      </a>
    </div>
  );
};

export default MenuList;
