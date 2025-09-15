import styles from "./SaleSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionHeaderButton from "../../components/SectionHeaderButton/SectionHeaderButton.jsx";
import { useRandomDiscountProducts } from "../../hooks/useRandomDiscountProducts.js";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";

const SaleSection = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  let windowWidth = useWindowWidth();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const randomItems = useRandomDiscountProducts(products, 4);

  return (
    <>
        <SectionHeader
          text={"Sale"}
          hasButton={windowWidth < 480 ? false : true}
          buttonText={"All sales"}
          linkTo="sales"
        />
      <div className={`${styles.saleSection} side_padding bottom_margin`}>
        <div className={styles.cards_wrapper}>
          {randomItems.map((product) => (
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
        {windowWidth < 480 && (
          <SectionHeaderButton text={"All sales"} linkTo="sales" />
        )}
      </div>
    </>
  );
};

export default SaleSection;
