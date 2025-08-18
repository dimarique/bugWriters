import styles from "./DiscountAmountBage.module.css";

const DiscountAmountBage = ({ price, discont_price }) => {
  const discont_amount = Math.floor(((price - discont_price) / price) * 100);

  return <div className={styles.discountAmountBage}>-{discont_amount}%</div>;
};

export default DiscountAmountBage;
