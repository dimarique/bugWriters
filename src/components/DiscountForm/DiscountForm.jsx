import React from 'react'
import styles from './discountForm.module.css'
import discount360 from '../../assets/imageDiscountForm/discount360.png'
import discount480 from '../../assets/imageDiscountForm/discount480.png'
import discount768 from '../../assets/imageDiscountForm/discount768.png'
import discount1000 from '../../assets/imageDiscountForm/discount1000.png'
import discount1440 from '../../assets/imageDiscountForm/discount1440.png'


const DiscountForm = () => {
    return (
        <div className={`${styles.discount_container} bottom_margin`}>
            <h2>5% off on the first order</h2>
            <div>
                <div className={styles.discount_content}>
                    <div className={styles.discount_form}>
                        <div className={styles.discount_inputs}>
                            <input type="text" placeholder='Name' />
                            <input type="tel" placeholder='Phone number' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <button className={styles.discount_button}>Get a discount</button>
                    </div>
                    <picture>
                        <source srcSet={discount1440} media='(min-width: 1440px)' />
                        <source srcSet={discount1000} media='(min-width: 1000px)' />
                        <source srcSet={discount768} media='(min-width: 768px)' />
                        <source srcSet={discount480} media='(min-width: 480px)' />

                        <img className={styles.discount_img} src={discount360} alt="discount image" />
                    </picture>


                </div>
            </div>
        </div>
    )
}
export default DiscountForm