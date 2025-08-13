import React from 'react'
import styles from './discountForm.module.css'
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
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
export default DiscountForm