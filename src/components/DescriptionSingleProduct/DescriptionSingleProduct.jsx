import React, { useState } from "react";
import styles from "./DescriptionSingleProduct.module.css";

const DescriptionSingleProduct = ({ text = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 360;

  const toggleText = () => {
    setExpanded((old) => !old);
  };

  return (
    <div className={styles.description}>
      <p className={`${styles.text} ${expanded ? "" : styles.clamped}`}>
        {text}
      </p>

      {isLong && (
        <button className={styles.description_button} onClick={toggleText}>
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default DescriptionSingleProduct;
