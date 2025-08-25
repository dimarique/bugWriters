import styles from "./FilterByPrice.module.css";
import { useDispatch } from "react-redux";
import { setPriceFrom, setPriceTo } from "../../redux/slices/productsSlice";

const FilterByPrice = () => {
  const dispatch = useDispatch();

  const handleFromInputChange = (e) => dispatch(setPriceFrom(e.target.value));
  const handleToInputChange = (e) => dispatch(setPriceTo(e.target.value));

  return (
    <div className={styles.filterByPrice}>
      <span>Price</span>
      <input
        className={styles.input_price}
        onChange={handleFromInputChange}
        id="price_from"
        type="number"
        placeholder="from"
      />
      <input
        className={styles.input_price}
        onChange={handleToInputChange}
        id="price_to"
        type="number"
        placeholder="to"
      />
    </div>
  );
};

export default FilterByPrice;
