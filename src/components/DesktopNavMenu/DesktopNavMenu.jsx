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
    </div>
  );
};

export default DesktopNavMenu;
