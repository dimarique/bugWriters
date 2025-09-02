import { Link } from "react-router-dom";
import styles from "./CartIcon.module.css";
import cart from "../../assets/cart.svg";
import { useSelector } from "react-redux";

const CartIcon = () => {
   const totalCount = useSelector((state) => state.cart.totalCount); 

  return (
    <Link to="/cart" className={styles.cartIcon}>
      <img src={cart} alt="Cart image" />
      {totalCount > 0 && <span className={styles.cartCount}>{totalCount}</span>}
    </Link>
  );
};

export default CartIcon;
