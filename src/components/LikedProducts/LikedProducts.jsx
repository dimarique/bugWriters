import React from 'react'
import styles from './LikedProducts.module.css'
// import ProductCard from '../ProductCard/ProductCard'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts } from '../../redux/slices/productsSlice'
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const LikedProducts = () => {

    // const dispatch = useDispatch();


    // const { products, status, error } = useSelector(state => state.products)

    // useEffect(() => {
    //     if (status === "idle") dispatch(fetchProducts())
    // }, [status])

    return (
        <>
            <div className={`${styles.likedProducts_breadcrumbs} side_padding`}>Хлебные крошки</div>


            {/* <div className={`${styles.likedProducts_container} side_padding bottom_margin`}>
                <h2>Liked products</h2>

                <div>filter</div>

                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>{error}</p>}
                {status === 'succeeded' && (
                      <div className={styles.likedProducts_items}> {
                        products.length === 0 ? (<p>Empty</p>) : (
                             products.map((product) => {
                        return (

                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                discont_price={product.discont_price} />
                        )
                    })
                        )


                      }  </div>
                )}
                
                
        

            </div> */}

            <ProductsContainer title="Liked products" />
        </>
    )
}

export default LikedProducts