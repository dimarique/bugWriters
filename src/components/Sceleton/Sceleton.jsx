import styles from "./Sceleton.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import Filters from "../Filters/Filters.jsx";
import React from "react";

const Sceleton = () => {
  return (
    <div className={styles.Sceleton}>
      <SectionHeader  text={"All Product"}   />      
           <Filters />
      <div className={styles.card}></div>
    </div>
  );
};

export default Sceleton;
