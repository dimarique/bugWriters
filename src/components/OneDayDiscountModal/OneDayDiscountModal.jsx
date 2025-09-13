import styles from "./OneDayDiscountModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchFavorites } from "../../redux/slices/favoritesSlice";
import heart_filled from "../../assets/heart_filled.svg";
import heart_favorite from "../../assets/heart_favorite.svg";
import ReactDOM from "react-dom";

const OneDayDiscountModal = ({ product, onClose, onAddToCart }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const dispatch = useDispatch();

  const isFav = useSelector((state) =>
    state.favorites.favProducts.some((fav) => fav.id === product.id)
  );

  const buttonHeandler = (event) => {
    event.stopPropagation();
    dispatch(switchFavorites(product));
  };

  const discountedPrice = (product.price / 2)*100/100;
const modalContent =(
     <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modal_top}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <span className={styles.modalTitle}>
          50% discount on product of the day!
        </span>
      </div>

      <div className={styles.modal_content}>
        <div className={styles.modal_bage}>
          <p>- {Math.floor((discountedPrice / product.price) * 100)}%</p>
          <a className={styles.productCard_favorite} onClick={buttonHeandler}>
            <img src={isFav ? heart_favorite : heart_filled} alt="favorite" />
          </a>
        </div>

        <img src={`${BASE_URL}${product.image}`} alt={product.title} />
        <span className={styles.modal_content_title}>{product.title}</span>

        <div className={styles.prices}>
          <span className={styles.price}>{`$${discountedPrice.toFixed(2)}`}</span>
          <span className={styles.discountPrice}>{`$${product.price.toFixed(2)}`}</span>
        </div>
      </div>

      <button
        className={styles.addBtn}
        onClick={() =>
          onAddToCart({ ...product, discont_price: discountedPrice })
        }
      >
        Add to cart
      </button>
    </div>
)
     return (
 ReactDOM.createPortal(modalContent, document.body)
  );
};

export default OneDayDiscountModal;
