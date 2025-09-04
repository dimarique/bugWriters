import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductsList.module.css";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.products);
  const { priceFrom, priceTo, discounted } = useSelector(
    (state) => state.filters,
  );
  const filteredProducts = products.filter((item) =>
    item.price >= priceFrom && item.price <= priceTo && discounted
      ? item.discont_price !== null
      : true,
  );
  console.log(priceFrom, priceTo);
  console.log("filtered", filteredProducts);
  console.log("discounted is: ", discounted);

  return (
    <div className={styles.productsList}>
      {filteredProducts.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            discont_price={item.discont_price}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
