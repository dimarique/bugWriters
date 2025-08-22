import styles from './FilterDiscount.module.css'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showDiscount } from '../../redux/slices/productsSlice'

const FilterDiscount = () => {

    const dispatch = useDispatch()

    const checked = useSelector(state => state.products.showDiscount)

    const handleCheckBox = (event) => {
        // is waitiung for true/false
        dispatch(showDiscount(event.target.checked))
    }

    return (
        <div className={styles.filterDiscount_container}>
            <label htmlFor="filterDiscount">Discounted items</label>
            <input id='filterDiscount' className={styles.checkbox} type="checkbox" onChange={handleCheckBox} checked={checked} />


        </div>
    )
}

export default FilterDiscount