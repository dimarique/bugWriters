import styles from "./CategoriesList.module.css";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import { useLocation } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import SectionHeaderButton from "../SectionHeaderButton/SectionHeaderButton.jsx";

const CategoriesList = ({ limit }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  let windowWidth = useWindowWidth();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      setDisplayedItems(limit ? categories.slice(0, limit) : categories);
    }
  }, [categories, limit]);

  return (
    <>
        {/* <SectionHeader
          text={"Categories"}
          hasButton={
            windowWidth < 480 || currentPath.includes("categories")
              ? false
              : true
          }
          buttonText={"All categories"}
          linkTo="categories"
        /> */}
      <div
        className={`${styles.categories} side_padding bottom_margin bottom_top`}
        >
        <h2 className={styles.cards_title}>Categories</h2>
        <div className={styles.cards_wrapper}>
          {displayedItems.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              categoryTitle={category.title}
              image={category.image}
            />
          ))}
        </div>
        {windowWidth < 480 && !currentPath.includes("categories") && (
          <SectionHeaderButton text="All categories" linkTo="categories" />
        )}
      </div>
    </>
  );
};

export default CategoriesList;
