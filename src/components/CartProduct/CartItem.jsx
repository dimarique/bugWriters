import { useDispatch } from "react-redux";
import { removeProduct, incrementProduct, decrementProduct} from "../../redux/slices/cartSlice";
import style from "./CartItem.module.css";

export default function CartItem({ id, title, price, image, count }) {
  const dispatch = useDispatch();

  return (
    <div className={style.cartItem}>
      {image && <img src={image} alt={title} className={style.cartItem_image} />}
      <div className={style.cartItem_header}>
        <p className={style.cartItem_title}>{title}</p>
        <button onClick={() => dispatch(removeProduct(id))}>X</button>
      </div>
      <p>Price: {price}$</p>
      <p>Quantity: {count}</p>
      <div>
        <button onClick={() => dispatch(decrementProduct(id))}>-</button>
        <button onClick={() => dispatch(incrementProduct(id))}>+</button>
      </div>
    </div>
  );
}

