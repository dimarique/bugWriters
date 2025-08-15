
import React from "react";
import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

// CategoryCard.js
const CategoryCard = ({ id, title, image }) => {
  const baseUrl = "http://localhost:3333/";
  return (
    <div className={style.categoryCard}>
      <Link to={`/categories/${id}`} className={style.categoryCard_link}>
        <img src={`${baseUrl}${image}`} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};


export default CategoryCard;

