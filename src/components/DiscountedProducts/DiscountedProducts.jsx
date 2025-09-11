import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./DiscountedProducts.module.css";
import { setIsDiscounted } from "../../redux/slices/filtersSlice";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkeletonGrid from "../Skeleton/SkeletonGrid";
import Filters from "../Filters/Filters";
import ProductsList from "../ProductsList/ProductsList";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const DiscountedProducts = () => {
  const { status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsDiscounted(true));
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs />
      <SectionHeader text={"Discounted Products"} hasButton={false} />
      <Filters price={true} discount={false} sort={true} />

      {status === "loading" && <SkeletonGrid count={12} />}
      {status === "failed" && <div>Error: {error}</div>}
      <ProductsList />
    </>
  );
};

export default DiscountedProducts;
