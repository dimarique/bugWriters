import React from "react";
import styles from "./ProductSingleCard.module.css";
import heart_filled from "../../assets/heart_filled.svg";
import heart_favorite from "../../assets/heart_favorite.svg";
import DescriptionSingleProduct from "../DescriptionSingleProduct/DescriptionSingleProduct.jsx";
import { fetchProducts } from "../../redux/slices/productsSlice.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DiscountAmountBage from "../DiscountAmountBage/DiscountAmountBage.jsx";
import { switchFavorites } from "../../redux/slices/favoritesSlice.js";
const ProductSingleCard = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products.length]);

  const product = products.find((product) => product.id === +id);
  const { title, price, discont_price, description, image } = product || {};

  const isFav = useSelector((state) =>
    state.favorites.favProducts.some((product) => product.id === +id)
  );

  const clickHeandler = () => {
    dispatch(
      switchFavorites({
        id: product.id,
        title: product.title,
        price: product.price,
        discont_price: product.discont_price,
        image: product.image,
      })
    );
  };

  return (
    <div className={`${styles.productSignleCard_container} side_padding`}>
      <div className={styles.productSignleCard_header}>
        <h2 className={styles.productSignleCard_title}>{title}</h2>

        <img
          onClick={clickHeandler}
          src={isFav ? heart_favorite : heart_filled}
          alt="heard image"
        />
      </div>

      <div className={styles.productSingleCard_img_price_button}>
        <div className={styles.productSingleCard_img_container}>
          <img src={`${baseUrl}${image}`} alt="product image" />

          {/* <div className={styles.productSingleCard_sale_label}>

          </div> */}

          {discont_price && (
            <DiscountAmountBage price={price} discont_price={discont_price} />
          )}
        </div>

        <div className={styles.productSingleCard_price_button}>
          <div className={styles.productSingleCard_price}>
            <h2>$199</h2>
            <h3>$240</h3>
          </div>

          <div className={styles.productSingleCard_quantity}>
            {/* тут надо все вписать!!!! */}
          </div>

          <button className={styles.productSingleCard_button}>
            Add to cart
          </button>
        </div>
      </div>

      <div className={styles.productSingleCard_description}>
        <h3>Description</h3>
        <DescriptionSingleProduct text={description} />
      </div>
    </div>
  );
};

export default ProductSingleCard;
