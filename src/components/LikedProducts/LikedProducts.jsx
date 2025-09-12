import React from "react";
import styles from "./LikedProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";
import { useState, useEffect } from "react";
import Filters from "../Filters/Filters.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const LikedProducts = () => {
  const favProducts = useSelector((state) => state.favorites.favProducts);
  const [loading, setLoading] = useState(true);
  let windowWidth = useWindowWidth();

  useEffect(() => {
    // имитация загрузки, чтобы показать скелетон
    const timer = setTimeout(() => setLoading(false), 500); // 0.5 сек
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {windowWidth >= 768 && <Breadcrumbs />}

      <div
        className={`${styles.likedProducts_container} bottom_margin bottom_top `}
      >
        <SectionHeader text={"Liked products"} />
        <Filters price={true} sort={true} discount={false} />

        {loading ? (
          <SkeletonGrid count={8} />
        ) : favProducts.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div className={`responsive_cards side_padding`}>
            {favProducts.map((product) => (
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
        )}
      </div>
    </>
  );
};

export default LikedProducts;
