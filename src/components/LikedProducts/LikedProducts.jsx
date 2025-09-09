import React from "react";
import styles from "./LikedProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import SortProducts from "../SortProducts/SortProducts";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";
import { useState, useEffect } from "react";
import Filters from "../Filters/Filters.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";

const LikedProducts = () => {
  const favProducts = useSelector((state) => state.favorites.favProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // имитация загрузки, чтобы показать скелетон
    const timer = setTimeout(() => setLoading(false), 500); // 0.5 сек
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Breadcrumbs />

      <div
        className={`${styles.likedProducts_container} side_padding bottom_margin`}
      >
        <h2>Liked products</h2>
        <Filters price={true} sort={true} discount={false} />

        {loading ? (
          <SkeletonGrid count={8} />
        ) : favProducts.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div className={`${styles.likedProducts_items} responsive_cards`}>
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
