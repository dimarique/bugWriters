import styles from "./FilterByPrice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFrom, setPriceTo } from "../../redux/slices/filtersSlice";
import { useState, useEffect } from "react";

const FilterByPrice = () => {
  const [localPriceFrom, setLocalPriceFrom] = useState("");
  const [localPriceTo, setLocalPriceTo] = useState("");

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleLocalPriceFromChange = (e) => setLocalPriceFrom(e.target.value);
  const handleLocalPriceToChange = (e) => setLocalPriceTo(e.target.value);

  useEffect(() => {
    if (products.length) {
      setLocalPriceTo(Math.max(...products.map((p) => p.price)));
    }
  }, [products]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setPriceFrom(Number(localPriceFrom)));
    }, 500);
    return () => clearTimeout(timer);
  }, [localPriceFrom, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setPriceTo(Number(localPriceTo)));
    }, 500);
    return () => clearTimeout(timer);
  }, [localPriceTo, dispatch]);

  return (
    <div className={styles.filterByPrice}>
      <span>Price</span>
      <input
        className={styles.input_price}
        onChange={handleLocalPriceFromChange}
        id="price_from"
        type="text"
        placeholder="from"
        value={localPriceFrom ?? ""}
      />
      <input
        className={styles.input_price}
        onChange={handleLocalPriceToChange}
        id="price_to"
        type="text"
        placeholder="to"
        value={localPriceTo ?? ""}
      />
    </div>
  );
};

export default FilterByPrice;
