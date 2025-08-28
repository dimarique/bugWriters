import styles from "./Cart.module.css";
import CartProduct from "../../components/CartProduct/CartProduct.jsx";

const Cart = () => {
  return <div className={styles.cart}>
    <CartProduct />
   
  </div>;
};

export default Cart;
