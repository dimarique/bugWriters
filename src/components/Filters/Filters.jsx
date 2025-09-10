import FilterByPrice from "../FilterByPrice/FilterByPrice";
import FilterDiscount from "../FilterDiscount/FilterDiscount";
import SortProducts from "../SortProducts/SortProducts";
import styles from "./Filters.module.css";

const Filters = ({ price, discount, sort }) => {
  return (
    <div className={`${styles.filters} side_padding`}>
      {price && <FilterByPrice />}
      {discount && <FilterDiscount />}
      {sort && <SortProducts />}
    </div>
  );
};

export default Filters;
