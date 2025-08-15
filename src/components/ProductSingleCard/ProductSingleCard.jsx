import React from 'react'
import styles from './ProductSingleCard.module.css'
import heardWhite from '../../assets/icons/heard_white_filled.svg'
import singleProductImg from '../../assets/imageProductSingleCard/singleProduct.jpg'
import DescriptionSingleProduct from "../DescriptionSingleProduct/DescriptionSingleProduct.jsx";



const ProductSingleCard = () => {
  return (
    <div className={`${styles.productSignleCard_container} side_padding`}>

      <div className={styles.productSignleCard_header}>
        <h2 className={styles.productSignleCard_title}>Secateurs</h2>
        <img src={heardWhite} alt="heard image" />
      </div>

      <div className={styles.productSingleCard_img_price_button}>

        <div className={styles.productSingleCard_img_container}>

          <img src={singleProductImg} alt="product image" />

          <div className={styles.productSingleCard_sale_label}>
            <p>-17%</p>
          </div>

        </div>

        <div className={styles.productSingleCard_price_button}>

          <div className={styles.productSingleCard_price}>
            <h2>$199</h2>
            <h3>$240</h3>
          </div>

          <div className={styles.productSingleCard_quantity}>
            {/* тут надо все вписать!!!! */}
          </div>

          <button className={styles.productSingleCard_button}>Add to cart</button>

        </div>

      </div>

      <div className={styles.productSingleCard_description}>
        <h3>Description</h3>
        <p><DescriptionSingleProduct /></p>

      </div>


    </div>
  )
}

export default ProductSingleCard