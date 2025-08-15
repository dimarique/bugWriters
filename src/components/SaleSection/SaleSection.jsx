import styles from "./SaleSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useRandomDiscountProducts } from "../../hooks/useRandomDiscountProducts.js";

const SaleSection = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const randomItems = useRandomDiscountProducts(products, 4);

  return (
    <div className={`${styles.saleSection} side_padding`}>
      {randomItems.map((product) => (
        <ProductCard
          key={self.crypto.randomUUID()}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          discont_price={product.discont_price}
        />
      ))}
    </div>
  );
};

export default SaleSection;
