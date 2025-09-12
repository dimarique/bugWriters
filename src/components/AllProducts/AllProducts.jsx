import React from "react";
import styles from "./AllProducts.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDiscounted } from "../../redux/slices/filtersSlice.js";
import Filters from "../Filters/Filters.jsx";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";
import ProductsList from "../ProductsList/ProductsList.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);
  let windowWidth = useWindowWidth();
  useEffect(() => {
    dispatch(setIsDiscounted(false));
  }, [dispatch]);
  return (
    <>
      {windowWidth >= 768 && <Breadcrumbs />}
      <div
        className={`${styles.allProducts_container} bottom_margin bottom_top`}
      >
        <SectionHeader text={"All products"} />

        <Filters price={true} discount={true} sort={true} />
        {status === "loading" && <SkeletonGrid count={12} />}
        {status === "failed" && <p>{error}</p>}
        {status === "succeeded" && <ProductsList />}
      </div>
    </>
  );
};
export default AllProducts;
