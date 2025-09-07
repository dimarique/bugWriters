import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./DiscountedProducts.module.css";
import { fetchProducts } from "../../redux/slices/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkeletonGrid from "../Skeleton/SkeletonGrid";
import Filters from "../Filters/Filters";
import ProductsList from "../ProductsList/ProductsList";

const DiscountedProducts = () => {
  const { products, status, error } = useSelector((state) => state.products);
  const discountedProducts = useSelector(
    (state) => state.products.filteredByPriceProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <SectionHeader text={"Discounted Products"} hasButton={false} />
      <Filters />
      {status === "loading" && <SkeletonGrid count={12} />}
      {status === "failed" && <div>Error: {error}</div>}
      <div
        className={`${styles.discountedProducts} side_padding responsive_cards`}
      >
        <ProductsList />
        {/* {discountedProducts
          .filter((product) => product.discont_price)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              discont_price={product.discont_price}
            />
          ))} */}
      </div>
    </>
  );
};

export default DiscountedProducts;
