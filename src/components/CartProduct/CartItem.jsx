import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, incrementProduct, decrementProduct} from "../../redux/slices/cartSlice";
import style from "./CartItem.module.css";

export default function CartItem({ id, title, price,  image, count }) {
  const dispatch = useDispatch();

  return (
    <div className={style.cartItem}>

      {image && <img src={image} alt={title} className={style.cartItem_image} />}

         <div className={style.cartItem_header}>

        <p className={style.cartItem_title}>{title}</p>
        <button className={style.cartProduct_remove} onClick={() => dispatch(removeProduct(id))}> X </button>

      </div>

  
      <p className={style.cartItem_price}>Price: {price}$</p>

 
      <div className={style.cartItem_controls}>
        <button
          className={style.cartItem_button}
          onClick={() => dispatch(decrementProduct(id))}
        >
          -
        </button>
        <span className={style.cartItem_count}>{count}</span>
        <button
          className={style.cartItem_button}
          onClick={() => dispatch(incrementProduct(id))}
        >
          +
        </button>
      </div>
    </div>
  );
}
