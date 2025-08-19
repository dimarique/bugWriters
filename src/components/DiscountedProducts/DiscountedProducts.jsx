import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./DiscountedProducts.module.css";
import { fetchProducts } from "../../redux/slices/productsSlice";
import ProductCard from "../ProductCard/ProductCard";

const DiscountedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div className={styles.discountedProducts}>
      {products.map(
        (product) =>
          product.discont_price && (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              discont_price={product.discont_price}
            />
          ),
      )}
    </div>
  );
};

export default DiscountedProducts;
