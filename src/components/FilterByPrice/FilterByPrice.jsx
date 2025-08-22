import styles from "./FilterByPrice.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../redux/slices/productsSlice";

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput((old) => ({ ...old, [e.target.id]: Number(e.target.value) }));
  // console.log(input);
  const hz = () => {
    dispatch(filterByPrice(input));
  };
  return (
    <div className={styles.filterByPrice} onChange={handleInputChange}>
      <input onChange={hz} id="price_from" type="number" placeholder="from" />
      <input onChange={hz} id="price_to" type="number" placeholder="to" />
    </div>
  );
};

export default FilterByPrice;
