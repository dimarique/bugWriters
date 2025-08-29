import styles from "./ProductCount.module.css";
import { incrementProduct, decrementProduct} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCount = ({ count = 0, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.productCount}>
      <button onClick={() => dispatch(decrementProduct(id))}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(incrementProduct(id))}>+</button>
    </div>
  );
};

export default ProductCount;
