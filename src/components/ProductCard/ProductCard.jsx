import styles from "./ProductCard.module.css";
const ProductCard = ({ title, price, image }) => {
  const baseUrl = "http://localhost:3333";
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard_top}>
        <img src={`${baseUrl}${image}`} alt="" />
      </div>
      <div className={styles.productCard_bottom}>
        <p className={styles.productCard_title}>{title}</p>
        <span className={styles.productCard_price}>{`$${price}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
