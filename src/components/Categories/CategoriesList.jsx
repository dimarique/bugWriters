import styles from "./CategoriesList.module.css";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";

// const CategoriesList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, []);

//   const categories = useSelector((state) => state.categories.categories);
//   const category = categories[0];
//   const baseUrl = "http://localhost:3333/";     
//   if (category) {
//     console.log(category.image);

//     return (
//       <div className={styles.categories}>
//         {category && (
//           <img src={`${baseUrl}${category.image}`} alt={category.title} />
//         )}
//         {/* {category && (
//         <CategoryCard key={category.id} category={category} />
//       )} */}
//         {categories.map((category) => (
//         <CategoryCard key={category.id} category={category} />
//       ))}
//       </div>
//     );
//   }
// };


const CategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className={styles.categories}>
        {categories.map((category) => {
          return (
          <CategoryCard 
          key={category.id} 
          // image={category.image}
          // title={category.title}
          category={category}
        />
      );
    })}
  </div>
);
};



export default CategoriesList;
