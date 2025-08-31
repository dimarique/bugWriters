import styles from "./CategoriesList.module.css";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";


const CategoriesList = ({ limit }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      setDisplayedItems(limit ? categories.slice(0, limit) : categories);
    }
  }, [categories, limit]);

  return (
     
      <div className={styles.categories}>
        {displayedItems.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            categoryTitle={category.title}
            image={category.image}
          />
        ))}
      </div>
   
  );
};

export default CategoriesList;
