import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import { useSelector } from "react-redux";
import React from "react";

const Breadcrumbs = () => {
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  const currentPath = useLocation();
  const stops = currentPath.pathname.split("/").filter(Boolean);

  const places = {
    main: "Main",
    categories: "Categories",
    products: "All products",
    sales: "All sales",
    favorites: "Liked products",
  };

  const crumbs = [];

  if (stops[0] !== "main" && stops.length > 0) {
    crumbs.push({ label: places.main, path: "/main" });
  }

  if (stops[0] === "categories") {
    if (stops.length === 1) {
      crumbs.push({ label: places.categories });
    } else if (stops[1]) {
      crumbs.push({ label: places.categories, path: "/categories" });
      const category = categories.find((c) => String(c.id) === stops[1]);
      crumbs.push({ label: category ? category.title : stops[1] });
    }
  } else if (stops[0] === "products") {
    crumbs.push({ label: places.products });
  } else if (stops[0] === "product" && stops[1]) {
    const product = products.find((p) => String(p.id) === stops[1]);
    if (product) {
      const category = categories.find((c) => c.id === product.categoryId);
      if (category) {
        crumbs.push({ label: places.categories, path: "/categories" });
        crumbs.push({
          label: category.title,
          path: "/categories/" + category.id,
        });
      }
      crumbs.push({ label: product.title });
    }
  } else {
    stops.forEach((stop, index) => {
      const path = "/" + stops.slice(0, index + 1).join("/");
      const label = places[stop] || stop;
      crumbs.push({ label, path });
    });
  }

  return (
    <div className={`${styles.breadcrumbs} side_padding`}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className={styles.line}></div>}
          <div className={styles.crumb}>
            {crumb.path ? (
              <Link to={crumb.path}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
