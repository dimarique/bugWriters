import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/slices/cartSlice";
import ProductCount from "../ProductCount/ProductCount.jsx";
import styles from "./CartItem.module.css";

export default function CartItem({ id, title, price, discont_price, image, count }) {
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_API_URL;

  return (
    <div className={styles.cartItem}>
       <div className= {styles.cartItem_image}> 
          <img src={`${baseUrl}${image}`} alt={title} />

          </div>


      <div className={styles.cartItem_info}>


        <div className={styles.cartItem_info_up}>
          <p >{title}</p>
          <button className={styles.cartItem_remove} onClick={() => dispatch(removeProduct(id))}>
            ✕
          </button>
        </div>
        <div className={styles.cartItem_info_down}>
               <ProductCount count={count} id={id} />
     
          {discont_price ? (
  <div className={styles.cartItem_prices}>
    <span className={styles.cartItem_price}>{`$${(discont_price * count).toFixed(2)}`}</span>
    <span className={styles.cartItem_discontPrice}>{`$${(price * count).toFixed(2)}`}</span>
  </div>
) : (
  <span className={styles.cartItem_price}>{`$${(price * count).toFixed(2)}`}</span>
)}

        </div>
     
      
      </div>
    </div>
  );
}

