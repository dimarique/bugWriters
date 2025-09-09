import styles from "./MenuList.module.css";
import { Link } from "react-router-dom";
import close from "../../assets/x.svg";
import x_dark from '../../assets/x_dark.svg';
import { useSelector } from "react-redux";


const MenuList = ({ menuIsOpen, setMenuIsOpen }) => {

  const theme = useSelector((state) => state.theme.selectedTheme);
  const isDark = theme === "dark";


  return (
    <div className={`${styles.menuList} ${menuIsOpen ? styles.open : ""}`}>
      <img onClick={() => setMenuIsOpen(false)} src={isDark ? x_dark : close} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="products">All products</Link>
          </li>
          <li>
            <Link to="/sales">All sales</Link>
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
