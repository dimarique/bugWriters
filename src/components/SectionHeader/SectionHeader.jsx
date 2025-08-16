import styles from "./SectionHeader.module.css";

const SectionHeader = ({ text, hasButton, buttonText }) => {
  return (
    <div className={`${styles.sectionHeader} side_padding`}>
      <h2>{text}</h2>
      {hasButton && (
        <>
          <div className={styles.sectionHeader_line}></div>
          <a href="#">{buttonText}</a>
        </>
      )}
    </div>
  );
};

export default SectionHeader;
