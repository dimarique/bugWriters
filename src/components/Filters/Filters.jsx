import FilterByPrice from "../FilterByPrice/FilterByPrice";
import FilterDiscount from "../FilterDiscount/FilterDiscount";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <FilterByPrice />
      <FilterDiscount />
    </div>
  );
};

export default Filters;
