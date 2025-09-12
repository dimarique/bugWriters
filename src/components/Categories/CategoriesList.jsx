import styles from "./CategoriesList.module.css";
import CategoryCard from "./CategoryCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionHeaderButton from "../../components/SectionHeaderButton/SectionHeaderButton.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";

const CategoriesList = ({ limit }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  let windowWidth = useWindowWidth();

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
      <SectionHeader
        text={"Categories"}
        hasButton={windowWidth < 480 ? false : true}
        buttonText={"All categories"}
        linkTo="categories"
      />
      <div className={`${styles.categories} side_padding bottom_margin`}>
        {displayedItems.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            categoryTitle={category.title}
            image={category.image}
          />
        ))}
      </div>
      {windowWidth < 480 && (
        <SectionHeaderButton text={"All categories"} linkTo="categories" />
      )}
    </>
  );
};

export default CategoriesList;
