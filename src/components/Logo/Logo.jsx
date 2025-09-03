import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
