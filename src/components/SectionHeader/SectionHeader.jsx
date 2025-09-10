import SectionHeaderButton from "../SectionHeaderButton/SectionHeaderButton";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ linkTo, text, hasButton, buttonText }) => {
  return (
    <div className={`${styles.sectionHeader} side_padding`}>
      <h2>{text}</h2>
      {hasButton && (
        <>
          <div className={styles.sectionHeader_line}></div>
          <SectionHeaderButton linkTo={linkTo} text={buttonText} />
        </>
      )}
    </div>
  );
};

export default SectionHeader;
