import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./CartProduct.module.css";
import { dropProduct, clearCart } from '../../redux/slices/cartSlice';

export default function CartProduct() {
  const dispatch = useDispatch(); // диспатчим наши действия dropProduct, clearCart
  const cartState = useSelector((state) => state.cart);//состояние корзины товаров хранится в cartState


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));// Каждый раз, когда меняется состояние корзины товаров → сохраняем в LocalStorage
  }, [cartState]);//следим за изменением состояния корзины товаров

  return (

   <div className={style.cart}>
      {Object.entries(cartState.cartProducts).length === 0 && (
        <div className={style.emptyCart}>
          <p>Looks like you have no items in your basket currently.</p>
          <Link to="/main">Continue Shopping</Link>
        </div>
      )}
    </div>

  );
}
