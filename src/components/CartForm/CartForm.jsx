import styles from "./CartForm.module.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import CartPopup from "../CartProduct/CartPopup.jsx";
import { useState } from "react";

const CartForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const [popupOpen, setPopupOpen] = useState(false); 

  const API_BASE = import.meta.env.VITE_API_URL || "";

  const cart = useSelector((state) => state.cart);
  const cartEntries = Object.entries(cart.cartProducts);

  const totalCount = cartEntries.reduce(
    (acc, [, product]) => acc + product.count,
    0
  );
  const totalPrice = cartEntries.reduce(
    (acc, [, product]) => acc + product.count * (product.discont_price || product.price),
    0
  );

  const onSubmit = (data) => {
    const items = cartEntries.map(([id, product]) => ({
      id,
      title: product.title,
      price: product.price,
      count: product.count,
    }));

    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      items,
      totalCount,
      totalPrice,
    };

    console.log("➡️ Sending order:", payload);

    return fetch(`${API_BASE}/order/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((dataResponse) => {
        console.log(dataResponse);

        reset();
        dispatch(clearCart());
        setPopupOpen(true);
        return dataResponse;
      })
      .catch((error) => {
        console.error("An error occurred while submitting the request.", error);
      });
  };

  return (
    <div className={styles.cartForm_container}>
      <div className={styles.cartForm_content}>
        <h2 className={styles.cartForm_title}>Order details</h2>
        <div className={styles.cartForm_orderSummary}>
          <h3>{totalCount} items</h3>
          <div className={styles.cartForm_price}>
            <h3>Total </h3>
            <h2>${totalPrice}</h2>
          </div>
        </div>

        <div>
          <form
            className={styles.cartForm_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.cartForm_inputs}>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Please enter your name",
                  minLength: { value: 3, message: "Name is too short (min 3)" },
                  maxLength: {
                    value: 40,
                    message: "Name is too long (max 40)",
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                    message: "Name can contain only letters",
                  },
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}

              <input
                type="tel"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Please enter your phone number",
                  minLength: { value: 8, message: "Phone number is too short" },
                  maxLength: { value: 15, message: "Phone number is too long" },
                  pattern: {
                    value: /^[+\d\s()-]+$/,
                    message: "Only allowed characters: 0-9 + ( ) - space",
                  },
                })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <button
              className={styles.cartForm_button}
              type="submit"
              onClick={() => setPopupOpen(true)}
            >
               Order
            </button>

            <div className={styles.cartForm_popup}></div>
          </form>
        </div>
      </div>
      <CartPopup
         open={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </div>
  );
};

export default CartForm;
