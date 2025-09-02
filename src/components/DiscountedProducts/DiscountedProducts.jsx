import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./DiscountedProducts.module.css";
import { fetchProducts } from "../../redux/slices/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import Filters from "../Filters/Filters";

const DiscountedProducts = () => {
  const products = useSelector((state) => state.products.products);
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
      <div className={styles.discountedProducts}>
        {discountedProducts
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
          ))}
      </div>
    </>
  );
};

export default DiscountedProducts;
