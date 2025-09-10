import styles from "./FilterDiscount.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsDiscounted } from "../../redux/slices/filtersSlice";

const FilterDiscount = () => {
  const dispatch = useDispatch();

  const handleCheckBox = (event) => {
    dispatch(setIsDiscounted(event.target.checked));
  };

  return (
    <div className={styles.filterDiscount_container}>
      <label htmlFor="filterDiscount">Discounted items</label>
      <input
        id="filterDiscount"
        className={styles.checkbox}
        type="checkbox"
        onChange={handleCheckBox}
      />
    </div>
  );
};

export default FilterDiscount;
