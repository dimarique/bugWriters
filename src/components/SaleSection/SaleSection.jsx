import styles from "./SaleSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

const SaleSection = () => {
  const [randomItems, setRandomItems] = useState([]);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProducts = [];

      for (let i = 0; i <= 3; i++) {
        selectedProducts.push(
          products[Math.floor(Math.random() * products.length)],
        );
      }

      setRandomItems(selectedProducts);
    }
  }, [products]);

  return (
    <div className={styles.saleSection}>
      {randomItems.map((product) => {
        return (
          <ProductCard
            key={self.crypto.randomUUID()}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </div>
  );
};

export default SaleSection;
