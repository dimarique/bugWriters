import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./CartProduct.module.css";
import CartItem from "./CartItem.jsx";
// import { addProduct } from "../../redux/slices/cartSlice.js";

export default function CartProduct() {
  const cartState = useSelector((state) => state.cart); //состояние корзины товаров хранится в cartState
// const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState)); // Каждый раз, когда меняется состояние корзины товаров → сохраняем в LocalStorage
  }, [cartState]); //следим за изменением состояния корзины товаров

 return (
  <div className={style.cart}>
       {Object.entries(cartState.cartProducts).length === 0 && ( //Если корзина пустая
      <div className={style.emptyCart}>
        <p>Looks like you have no items in your basket currently.</p>
        <Link to="/main">Continue Shopping</Link>
      </div>
    )}
 {/* Тестовая кнопка 
      <button
        onClick={() =>
          dispatch(
            addProduct({
              id: "test1",
              title: "Test Product",
              price: 9.99,
              image: "https://via.placeholder.com/100",
            })
          )
        }
      >
          </button> */}
    {Object.entries(cartState.cartProducts).map(([id, product]) => (
        <CartItem
          key={id}
          id={id}
          title={product.title}
          price={product.price}
          count={product.count}
          image={product.image} 
        />
      ))}
  </div>
)
}