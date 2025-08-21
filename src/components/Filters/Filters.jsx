import FilterByPrice from "../FilterByPrice/FilterByPrice";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <FilterByPrice />
    </div>
  );
};

export default Filters;
