import React from "react";
import style from "./CategoryList.module.css";
import Categories from "./Categories";    

const CategoryList = ({categories}) => {
  return (
    <div className={style.CategoryCard}>
      <div className={style.categoryCard_header}>
        <h2 className={style.categoryCard_header_title}>Categories</h2>

        <div className={style.categoryCard_header_buttons}>
          <hr className={style.categoryCard_header_line} />
          <Link to="./categories" className={style.categoryCard_header_button}>
            All categories
          </Link>
        </div>
      </div>
          <Categories categories={categories} />
    </div>


  );
};

export default CategoryList;
