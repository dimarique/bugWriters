import React, { useState } from 'react'
import styles from './DescriptionSingleProduct.module.css'

const DescriptionSingleProduct = () => {
    const text = 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.';


    const [expanded, setExpanded] = useState(false)
    const isLong = text.length > 50;

    const toggleText = () => {
        setExpanded(old => !old)
    }


    return (
        <div className={styles.description}>
            <p className={`${styles.text} ${expanded ? '' : styles.clamped}`}>{text}</p>

            {isLong && (<button className={styles.description_button} onClick={toggleText}>{expanded ? 'Read less' : 'Read more'}</button>)}

        </div>
    )
}

export default DescriptionSingleProduct