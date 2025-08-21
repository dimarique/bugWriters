import styles from "./FilterByPrice.module.css";
import { useState } from "react";

const FilterByPrice = () => {
  const [input, setInput] = useState([]);

  const handleInputChange = (e) => console.log(e.target.id);
  // console.log(input);
  return (
    <div className={styles.filterByPrice} onChange={handleInputChange}>
      <input id="price_from" type="number" placeholder="from" value={input} />
      <input id="price_to" type="number" placeholder="to" />
    </div>
  );
};

export default FilterByPrice;
