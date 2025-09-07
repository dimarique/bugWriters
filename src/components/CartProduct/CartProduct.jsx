import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import style from "./CartProduct.module.css";
import CartItem from "./CartItem.jsx";
import CartForm from "../CartForm/CartForm.jsx";



export default function CartProduct() {
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const cartEntries = Object.entries(cartState.cartProducts);

  return (
   
    <div className={style.cartWrapper}>
     
  {cartEntries.length === 0 ? (
    <div className={style.emptyCart}>
      <p>Looks like you have no items in your basket currently.</p>
      <Link to="/main">Continue Shopping</Link>
    </div>
  ) : (
    <>
      <div className={style.cartItemsColumn}>
        {cartEntries.map(([id, product]) => (
          <CartItem
            key={id}
            id={id}
            title={product.title}
            price={product.price}
            discont_price={product.discont_price}
            count={product.count}
            image={product.image}
          />
        ))}
      </div>
      <CartForm />
          </>
    
  )}
</div>

  );
}

