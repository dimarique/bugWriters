import { useEffect } from "react";
import styles from "./CartPopup.module.css";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";

export default function CartPopup({ open, onClose, duration = 3000 }) {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className={styles.popup}>
      {windowWidth < 480 ? (
        <>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
          <div className={styles.content}>
            <h3>Congratulations!</h3>
            <p className={styles.paragraf}>
              Your order has been successfully placed on the website. A manager
              will contact you shortly to confirm your order.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.text}>
            <h3>Congratulations!</h3>
          <p className={styles.paragraf}>
              Your order has been successfully placed on the website. <br />  <br />A manager
              will contact you shortly to confirm your order.
            </p>
          </div>
         <button className={styles.closeButton} onClick={onClose}>
           ✕
         </button>
       </>
      )}
    </div>
  );
}
