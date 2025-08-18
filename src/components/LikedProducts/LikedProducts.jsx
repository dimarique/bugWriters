import React from 'react'
import styles from './LikedProducts.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'

const LikedProducts = () => {

    const dispatch = useDispatch();

    // const products = useSelector(state => state.products.products);
    // const status = useSelector(state => state.products.status)
    // const error = useSelector(state => state.products.error)


    const { products, status, error } = useSelector(state => state.products)

    useEffect(() => {
        if (status === "idle" || status === 'failed') dispatch(fetchProducts())
    }, [status, dispatch])

    return (
        <div className={`${styles.likedProducts_container} side_padding bottom_margin`}>
            <h2>Liked products</h2>

            <div>filter</div>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' && products.length === 0 && <p>Empty</p>}

            <div className={styles.likedProducts_items}>

                {products.map((product) => {
                    return (

                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            discont_price={product.discont_price} />
                    )
                })}

            </div>

        </div>
    )
}

export default LikedProducts