import styles from "./SectionHeaderButton.module.css";
import { Link } from "react-router-dom";

const SectionHeaderButton = ({ text }) => {
  return (
    <div className={styles.sectionHeaderButton}>
      <Link to="/sales">{text}</Link>
    </div>
  );
};

export default SectionHeaderButton;
