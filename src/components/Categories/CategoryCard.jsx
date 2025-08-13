import React from "react";
import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
  return (
            <Link to={`./categories/${category.id}`} className={style.categoryCard_content_item}>
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </Link>
    
  );
};

export default CategoryCard;
     