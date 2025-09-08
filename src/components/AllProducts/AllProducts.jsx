import React from "react";
import styles from "./AllProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../redux/slices/productsSlice";
import { setIsDiscounted } from "../../redux/slices/filtersSlice.js";
import Filters from "../Filters/Filters.jsx";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";
import ProductsList from "../ProductsList/ProductsList.jsx";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(setIsDiscounted(false));
  }, [dispatch]);
  /* useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status]); */

  /* const visibleDiscountProducts = showDiscount
    ? products.filter((product) => product.discont_price)
    : products; */

  return (
    <>
      <div className={`${styles.allProducts_breadcrumbs} side_padding `}>
        Хлебные крошки
      </div>

      <div
        className={`${styles.allProducts_container} side_padding bottom_margin `}
      >
        <h2>All products</h2>

        <Filters price={true} discount={true} sort={true} />
        {status === "loading" && <SkeletonGrid count={12} />}
        {status === "failed" && <p>{error}</p>}
        {status === "succeeded" && <ProductsList />}
      </div>
    </>
  );
};
export default AllProducts;
