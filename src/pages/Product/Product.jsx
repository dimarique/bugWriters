import React from "react";
import ProductSingleCard from "../../components/ProductSingleCard/ProductSingleCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const Product = () => {
  let windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth >= 768 && <Breadcrumbs />}
      <ProductSingleCard />
    </div>
  );
};

export default Product;
