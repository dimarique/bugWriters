import { Link } from "react-router-dom";
import styles from "./DesktopNavMenu.module.css";

const DesktopNavMenu = () => {
  return (
    <div className={styles.desktopNavMenu}>
      <a className={styles.discount_link} href="">
        1 day discount!
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">All products</a>
          </li>
          <li>
            <Link to="/sales"> All sales </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavMenu;
