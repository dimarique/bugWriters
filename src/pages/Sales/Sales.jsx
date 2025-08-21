import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts";
import styles from "./Sales.module.css";

const Sales = () => {
  return (
    <div className={styles.sales}>
      <DiscountedProducts />
    </div>
  );
};

export default Sales;
