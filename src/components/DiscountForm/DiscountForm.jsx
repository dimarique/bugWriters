import React from "react";
import styles from "./DiscountForm.module.css";
import discount360 from "../../assets/imageDiscountForm/discount360.png";
import discount480 from "../../assets/imageDiscountForm/discount480.png";
import discount768 from "../../assets/imageDiscountForm/discount768.png";
import discount1000 from "../../assets/imageDiscountForm/discount1000.png";
import discount1440 from "../../assets/imageDiscountForm/discount1440.png";
import { useForm } from "react-hook-form";

const DiscountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const API_BASE = import.meta.env.VITE_API_URL || "";

  const onSubmit = (data) => {
    return fetch(`${API_BASE}/sale/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);

        reset();
        return responseData;
      })
      .catch((error) => {
        console.error("An error occurred while submitting the request.", error);
      });
  };

  return (
    <div className={`${styles.discount_container} bottom_margin`}>
      <h2>5% off on the first order</h2>
      <div>
        <div className={styles.discount_content}>
          <form
            className={styles.discount_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.discount_inputs}>
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

            <button className={styles.discount_button} type="submit">
              Get a discount
            </button>
          </form>

          <picture>
            <source srcSet={discount1440} media="(min-width: 1440px)" />
            <source srcSet={discount1000} media="(min-width: 1000px)" />
            <source srcSet={discount768} media="(min-width: 768px)" />
            <source srcSet={discount480} media="(min-width: 480px)" />

            <img
              className={styles.discount_img}
              src={discount360}
              alt="discount image"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default DiscountForm;
