import React from "react";
import styles from "./AllProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";
import Filters from "../Filters/Filters.jsx";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error, showDiscount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status]);

  const visibleDiscountProducts = showDiscount
    ? products.filter((product) => product.discont_price)
    : products;

  return (
    <>
      <div className={`${styles.allProducts_breadcrumbs} side_padding`}>
        Хлебные крошки
      </div>

      <div
        className={`${styles.allProducts_container} side_padding bottom_margin`}
      >
        <h2>All products</h2>

        <Filters />

        {status === "loading" && <SkeletonGrid count={12} />}
        {status === "failed" && <p>{error}</p>}
        {status === "succeeded" && (
          <div className={styles.allProducts_items}>
            {visibleDiscountProducts.length === 0 ? (
              <p>Empty</p>
            ) : (
              visibleDiscountProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    discont_price={product.discont_price}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default AllProducts;
