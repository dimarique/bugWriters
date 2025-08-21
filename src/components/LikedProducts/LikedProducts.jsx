import React from 'react'
import styles from './LikedProducts.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'


const LikedProducts = () => {



    const favProducts = useSelector(state => state.favorites.favProducts)


    return (
        <>
            {/* <div className={`${styles.likedProducts_breadcrumbs} side_padding`}>Хлебные крошки</div> */}


            <div className={`${styles.likedProducts_container} side_padding bottom_margin`}>
                <h2>Liked products</h2>

                <div>filter</div>


                {favProducts.length === 0 ? (<p>Empty</p>) :

                    (<div className={styles.likedProducts_items}> {
                        favProducts.map((product) => {


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



                    }  </div>)}





            </div>


        </>
    )
}

export default LikedProducts