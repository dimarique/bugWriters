import { Link } from "react-router-dom";
import styles from "./CartIcon.module.css";
import cart from "../../assets/cart.svg";
import { useSelector } from "react-redux";
import cart_dark from "../../assets/cart_dark.svg";

const CartIcon = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);

  const theme = useSelector((state) => state.theme.selectedTheme);
  const isDark = theme === "dark";

  return (
    <Link to="/cart" className={styles.cartIcon}>
      <img src={isDark ? cart_dark : cart} alt="Cart image" />
      {totalCount > 0 && <span className={styles.cartCount}>{totalCount}</span>}
    </Link>
  );
};

export default CartIcon;
