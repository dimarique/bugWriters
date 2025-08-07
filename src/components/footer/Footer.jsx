import React from 'react'
import styles from './footer.module.css'
import instagram from '../../assets/icons/ic-instagram.svg'
import whatsapp from '../../assets/icons/ic-whatsapp.svg'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <h2>Contact</h2>

            <div className={styles.footer_cards}>
                <div className={styles.footer_card}>
                    <h3>Phone</h3>
                    <p>+49 999 999 99 99</p>
                </div>


                <div className={styles.footer_card}>
                    <h3>Socials</h3>
                    <div className={styles.footer_icons}>
                        <img src={instagram} alt="Instagram" />
                        <img src={whatsapp} alt="Whatsapp" />
                    </div>

                </div>


                <div className={styles.footer_card}>
                    <h3>Address</h3>
                    <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
                </div>

                <div className={styles.footer_card}>
                    <h3>Working Hours</h3>
                    <p>24 hours a day</p>
                </div>


                <div>
                    <iframe className={styles.footer_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.407622818629!2d13.37250577564544!3d52.50796183712204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1754509277036!5m2!1sru!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>

            </div>


        </div>
    )
}

export default Footer