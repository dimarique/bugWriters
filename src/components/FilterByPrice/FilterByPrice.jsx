import styles from "./FilterByPrice.module.css";
import { useDispatch } from "react-redux";
import { setPriceFrom, setPriceTo } from "../../redux/slices/filtersSlice";
import { useState, useEffect } from "react";

const FilterByPrice = () => {
  const [localPriceFrom, setLocalPriceFrom] = useState(0);
  const [localPriceTo, setLocalPriceTo] = useState(Infinity);

  const dispatch = useDispatch();

  const handleLocalPriceFromChange = (e) =>
    setLocalPriceFrom(Number(e.target.value));
  const handleLocalPriceToChange = (e) =>
    setLocalPriceTo(Number(e.target.value));

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setPriceFrom(localPriceFrom));
      return clearTimeout(timer);
    }, 1000);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setPriceTo(localPriceTo));
      return clearTimeout(timer);
    }, 500);
  });

  return (
    <div className={styles.filterByPrice}>
      <span>Price</span>
      <input
        className={styles.input_price}
        onChange={handleLocalPriceFromChange}
        id="price_from"
        type="number"
        placeholder="from"
      />
      <input
        className={styles.input_price}
        onChange={handleLocalPriceToChange}
        id="price_to"
        type="number"
        placeholder="to"
      />
    </div>
  );
};

export default FilterByPrice;
