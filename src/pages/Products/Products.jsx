import AllProducts from "../../components/AllProducts/AllProducts";
import styles from "./Products.module.css";

const Products = () => {
  return <div className={styles.products}>
    <AllProducts />
  </div>;
};

export default Products;
