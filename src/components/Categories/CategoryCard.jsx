
import React from "react";
import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, categoryTitle, image }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  return (
    <div className={style.categoryCard}>
      <Link to={`/categories/${id}`} className={style.categoryCard_link}>
        <img src={`${baseUrl}${image}`} alt={categoryTitle} />
        <p>{categoryTitle}</p>
      </Link>
    </div>
  );
};  


export default CategoryCard;

