import styles from "./ProductCount.module.css";

const ProductCount = ({ count = 0 }) => {
  return (
    <div className={styles.productCount}>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  );
};

export default ProductCount;
