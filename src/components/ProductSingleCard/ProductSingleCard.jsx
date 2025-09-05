

import React from "react";
import styles from "./ProductSingleCard.module.css";
import heart_filled from "../../assets/heart_filled.svg";
import heart_favorite from "../../assets/heart_favorite.svg";
import DescriptionSingleProduct from "../DescriptionSingleProduct/DescriptionSingleProduct.jsx";
import { fetchProducts } from "../../redux/slices/productsSlice.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { switchFavorites } from "../../redux/slices/favoritesSlice.js";
import { addProduct } from "../../redux/slices/cartSlice.js";
import ProductCount from "../ProductCount/ProductCount.jsx";


const ProductSingleCard = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products.length]);
  const product = products.find((product) => product.id === +id);
  const { title, price, discont_price, description, image } = product || {};
const [quantity, setQuantity] = useState(1);
const sellPrice = +(discont_price ?? price);
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
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id: product.id,
        title: product.title,
        price: sellPrice,
        image: product.image,
        count: quantity,
      })
    );
  };
  const [ModalOpen, setModalOpen] = useState(false)
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
          <img src={`${baseUrl}${image}`} alt="product image" onClick={()=> setModalOpen(true)}/>

          {discont_price && (
          <div className={styles.productSingleCard_sale_label}>
<p>- {Math.floor(((price - discont_price) / price) * 100)}%</p>

          </div>
          )}
  
        </div>
        <div className={styles.productSingleCard_price_button}>
      <div className={styles.productSignleCard_header2}>
        <h2 className={styles.productSignleCard_title}>{title}</h2>
        <img
          onClick={clickHeandler}
          src={isFav ? heart_favorite : heart_filled}
          alt="heard image"
        />


      </div>

          <div className={styles.productSingleCard_price}>
  


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

          
          {discont_price && (
          <div className={`${styles.productSingleCard_sale_label} ${styles.productSignleCard_sale_label2}`}>
<p>- {Math.floor(((price - discont_price) / price) * 100)}%</p>

          </div>
          )}
  
          </div>


<div className={styles.productSignleCard_quantButton}>
  
          <div className={styles.productSingleCard_quantity}>
<button onClick={() => setQuantity(qua => Math.max(1, qua -1))}>-</button>
<span>{quantity}</span>
<button onClick={() => setQuantity(qua=> qua + 1)}>+</button>

          </div>
      


          
          <button
            className={styles.productSingleCard_button}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>


         
</div> 

  <div className={`${styles.productSingleCard_description} ${styles.productSingleCard_description2}`}>
        <h3>Description</h3>
        <DescriptionSingleProduct text={description} />
      </div>
        </div>




      </div>
      <div className={styles.productSingleCard_description}>
        <h3>Description</h3>
        <DescriptionSingleProduct text={description} />
      </div>
{ModalOpen && <div className={styles.productSingleCard_modal} onClick={()=> setModalOpen(false)}>
  <img src={`${baseUrl}${image}`} alt="product image big" onClick={(event)=> event.stopPropagation()} />
  </div>}

    </div>
  );
};
export default ProductSingleCard;

