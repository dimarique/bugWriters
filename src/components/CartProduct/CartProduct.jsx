import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./CartProduct.module.css";
import CartItem from "./CartItem.jsx";


export default function CartProduct() {
  const cartState = useSelector((state) => state.cart); //состояние корзины товаров хранится в cartState



console.log("🛒 cartState:", cartState)


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState)); // Каждый раз, когда меняется состояние корзины товаров → сохраняем в LocalStorage
  }, [cartState]); //следим за изменением состояния корзины товаров

  console.log("🛒 cartState:", cartState);
  
 return (
  <div className={style.cart}>
       {Object.entries(cartState.cartProducts).length === 0 && ( //Если корзина пустая
      <div className={style.emptyCart}>
        <p>Looks like you have no items in your basket currently.</p>
        <Link to="/main">Continue Shopping</Link>
      </div>
    )}

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



