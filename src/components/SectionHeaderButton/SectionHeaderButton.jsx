import styles from "./SectionHeaderButton.module.css";
import { Link } from "react-router-dom";

const SectionHeaderButton = ({ linkTo, text }) => {
  return (
    <div className={styles.sectionHeaderButton}>
      <Link to={`/${linkTo}`}>{text}</Link>
    </div>
  );
};

export default SectionHeaderButton;
