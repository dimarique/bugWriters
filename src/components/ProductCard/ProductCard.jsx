import styles from "./ProductCard.module.css";
import heart_filled from "../../assets/heart_filled.svg";
const ProductCard = ({ title, price, discont_price, image }) => {
  const baseUrl = "http://localhost:3333";
  const discont_amount = Math.floor(((price - discont_price) / price) * 100);
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard_top}>
        <span className={styles.productCard_discont_amount}>
          -{discont_amount}%
        </span>
        <span className={styles.productCard_favorite}>
          <img src={heart_filled} alt="" />
        </span>

        <img src={`${baseUrl}${image}`} alt="" />
      </div>
      <div className={styles.productCard_bottom}>
        <p className={styles.productCard_title}>{title}</p>
        <div className={styles.prices_wrapper}>
          <span className={styles.productCard_price}>{`$${price}`}</span>
          {discont_price && (
            <span className={styles.productCard_discont_price}>
              {`$${discont_price}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
