import { useEffect } from "react";
import styles from "./CartPopup.module.css";

export default function CartPopup({ open, onClose, duration = 3000000 }) {
  useEffect(() => {
  
    if (!open) return;
    const timer = setTimeout(() => {
          onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) {
 
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup_top}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <span>Congratulations!</span>
      </div>
      <p className={styles.paragraf}>
        Your order has been successfully placed on the website. <br /> <br />A manager will
        contact you shortly to confirm your order.
      </p>
    </div>
  );
}
