import styles from "./MenuList.module.css";
import close from "../../assets/x.svg";
const MenuList = () => {
  return (
    <div className={`${styles.menuList}`}>
      <img src={close} alt="" />
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
