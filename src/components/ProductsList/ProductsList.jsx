import styles from "./ProductsList.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const { priceFrom, priceTo, isDiscounted } = useSelector(
    (state) => state.filters,
  );
  /* const filteredProducts = products.filter((item) => {
    if (priceFrom > priceTo) return false;
    return item.price >= priceFrom && item.price <= priceTo;
  }); */
  const filteredProducts = products.filter((item) => {
    if (priceFrom > priceTo) return false;

    const inPriceRange = item.price >= priceFrom && item.price <= priceTo;
    const discountOk = isDiscounted ? item.discont_price !== null : true;

    return inPriceRange && discountOk;
  });
  return (
    <div className={`side_padding responsive_cards`}>
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
