import React from "react";
import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const baseUrl = "http://localhost:3333/";
  
  return (
    <Link
      to={`/categories/${category.id}`}
      className={style.categoryCard_content_item}
    >
      <img src={`${baseUrl}${category.image}`} alt={category.title} />
      <span>{category.title}</span>
    </Link>
  );
};

export default CategoryCard;
