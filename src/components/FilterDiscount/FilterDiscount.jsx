import styles from "./FilterDiscount.module.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscounted } from "../../redux/slices/filtersSlice";

const FilterDiscount = () => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.products.discounted);
  const handleCheckBox = (event) => {
    dispatch(setDiscounted(event.target.checked));
  };

  return (
    <div className={styles.filterDiscount_container}>
      <label htmlFor="filterDiscount">Discounted items</label>
      <input
        id="filterDiscount"
        className={styles.checkbox}
        type="checkbox"
        onChange={handleCheckBox}
        checked={checked}
      />
    </div>
  );
};

export default FilterDiscount;
