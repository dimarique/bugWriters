import styles from "./ProductCard.module.css";
import heart_filled from "../../assets/heart_filled.svg";
import cart_filled from "../../assets/cart_filled.svg";
import DiscountAmountBage from "../DiscountAmountBage/DiscountAmountBage";

const ProductCard = ({ title, price, discont_price, image }) => {
  const baseUrl = "http://localhost:3333";

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard_top}>
        <DiscountAmountBage price={price} discont_price={discont_price} />
        <span className={styles.productCard_favorite}>
          <img src={heart_filled} alt="" />
        </span>
        <span className={styles.productCard_cart}>
          <img src={cart_filled} alt="" />
        </span>
        <img src={`${baseUrl}${image}`} alt="" />
      </div>

      <div className={styles.productCard_bottom}>
        <p className={styles.productCard_title}>{title}</p>
        <div className={styles.prices_wrapper}>
          <span
            className={styles.productCard_discont_price}
          >{`$${discont_price}`}</span>
          {discont_price && (
            <span className={styles.productCard_price}>{`$${price}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
