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
      const selectedProducts = new Set();

      while (selectedProducts.size < 4) {
        let idx = Math.floor(Math.random() * products.length);
        products[idx].discont_price && selectedProducts.add(products[idx]);
      }

      setRandomItems(Array.from(selectedProducts));
    }
  }, [products]);
  return (
    <div className={`${styles.saleSection} side_padding`}>
      {randomItems.map((product) => {
        return (
          <ProductCard
            key={self.crypto.randomUUID()}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            discont_price={product.discont_price}
          />
        );
      })}
    </div>
  );
};

export default SaleSection;
