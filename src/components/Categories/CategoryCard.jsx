
import React from "react";
import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const baseUrl = "http://localhost:3333/";

  return (
    <div className={style.categoryCard}>
      <Link to={`/categories/${category.id}`}>
        <img src={`${baseUrl}${category.image}`} alt={category.title} />
        <span className={style.categoryCard_title}>{category.title}</span>
      </Link>
    </div>
  );
};

export default CategoryCard;

