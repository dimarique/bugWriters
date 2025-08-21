import React from 'react'
import styles from './AllProducts.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
const AllProducts = () => {
    const dispatch = useDispatch();

    const { products, status, error } = useSelector(state => state.products)
    useEffect(() => {
        if (status === "idle") dispatch(fetchProducts())
    }, [status])
    return (
        <>
            {/* <div className={`${styles.allProducts_breadcrumbs} side_padding`}>Хлебные крошки</div> */}
            <div className={`${styles.allProducts_container} side_padding bottom_margin`}>
                <h2>All products</h2>
                <div>filter</div>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>{error}</p>}
                {status === 'succeeded' && (
                    <div className={styles.allProducts_items}> {
                        products.length === 0 ? (<p>Empty</p>) : (
                            products.map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        discont_price={product.discont_price} />
                                )
                            })
                        )

                    }  </div>
                )}



            </div>
        </>
    )
}
export default AllProducts
