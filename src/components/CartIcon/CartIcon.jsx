import styles from "./CartIcon.module.css";
import cart from "../../assets/cart.svg";

const CartIcon = () => {
  return (
    <div className={styles.cartIcon}>
      <img src={cart} alt="Cart image" />
    </div>
  );
};

export default CartIcon;
