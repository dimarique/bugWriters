import styles from "./ProductCard.module.css";
import heart_filled from "../../assets/heart_filled.svg";
import heart_favorite from "../../assets/heart_favorite.svg";
import cart_filled from "../../assets/cart_filled.svg";
import cart_active from '../../assets/cart_active.svg'
import DiscountAmountBage from "../DiscountAmountBage/DiscountAmountBage";
import { useDispatch, useSelector } from "react-redux";
import { switchFavorites } from "../../redux/slices/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { switchCart } from "../../redux/slices/cartSlice";

const ProductCard = ({ id, title, price, discont_price, image }) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const dispatch = useDispatch();

  const isFav = useSelector((state) =>
    state.favorites.favProducts.some((product) => product.id === id)
  );

  const buttonHeandler = (event) => {
    event.stopPropagation();
    dispatch(switchFavorites({ id, title, price, discont_price, image }));
  };

const isInCart = useSelector((state) => Boolean(state.cart.cartProducts[id]));

  const cartHandler = (event) => {
    event.stopPropagation();
    dispatch(switchCart({ id, title, price, discont_price, image, count: 1 }));
  };

  const navigate = useNavigate();

  const goToDescription = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.productCard} onClick={goToDescription}>
      <div className={styles.productCard_top}>
        {discont_price && (
          <DiscountAmountBage price={price} discont_price={discont_price} />
        )}

        <a className={styles.productCard_favorite} onClick={buttonHeandler}>
          <img src={isFav ? heart_favorite : heart_filled} alt="favorite" />
        </a>

        <a className={styles.productCard_cart} onClick={cartHandler}>
          <img src={isInCart ? cart_active : cart_filled} alt="cart" />
        </a>
        <img src={`${baseUrl}${image}`} alt="" />
      </div>

      <div className={styles.productCard_bottom}>
        <p className={styles.productCard_title}>{title}</p>
        <div className={styles.prices_wrapper}>
          {discont_price && (
            <span
              className={styles.productCard_discont_price}
            >{`$${discont_price}`}</span>
          )}
          <span
            className={
              discont_price
                ? styles.productCard_price
                : styles.productCard_discont_price
            }
          >{`$${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
