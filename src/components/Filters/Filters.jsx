import FilterByPrice from "../FilterByPrice/FilterByPrice";
import FilterDiscount from "../FilterDiscount/FilterDiscount";
import SortProducts from "../SortProducts/SortProducts";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={`${styles.filters} side_padding`}>
      <FilterByPrice />
      <FilterDiscount />
      {/* <SortProducts /> */}
    </div>
  );
};

export default Filters;
