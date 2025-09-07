import styles from "./ProductsList.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const { priceFrom, priceTo } = useSelector((state) => state.filters);
  const filteredProducts = products.filter((item) => {
    return item.price >= priceFrom && item.price <= priceTo;
  });
  console.log(priceFrom, priceTo);
  console.log(products);
  return (
    <div className={`${styles.productsList} responsive_cards`}>
      {filteredProducts.map((product) => {
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
      })}
    </div>
  );
};

export default ProductsList;
