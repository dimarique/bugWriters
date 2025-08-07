import React from 'react'
import styles from './Hero.module.css'


const Hero = () => {


  return (

    <div className={styles.hero_wrapper}>
      <div className={styles.hero_overlay}>
        <h1 className={styles.hero_title}>Amazing Discounts on Garden Products!</h1>
        <a className={styles.hero_link} href="#">Check out</a>
      </div>
    </div>
  )


}

export default Hero


