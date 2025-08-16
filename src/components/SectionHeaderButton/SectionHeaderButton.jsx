import styles from "./SectionHeaderButton.module.css";

const SectionHeaderButton = ({ text }) => {
  return (
    <div className={styles.sectionHeaderButton}>
      <a href="#">{text}</a>
    </div>
  );
};

export default SectionHeaderButton;
