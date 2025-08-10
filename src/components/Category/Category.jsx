import React from "react";
import style from "./Category.module.css";
import Fertilizer from "../../assets/imageCategory/fertilizer.png";
import ProtectiveProducts from "../../assets/imageCategory/protectiveProducts.png";
import PlantingMaterial from "../../assets/imageCategory/plantingMaterial.png";
import ToolsAndEquipment from "../../assets/imageCategory/toolsAndEquipment.png";

const Category = () => {
  return (
    <div className={style.category}>
      <div className={style.category_header}>
        <h2 className={style.category_header_title}>Categories</h2>

        <div className={style.category_header_buttons}>
          <hr className={style.category_header_line} />
          <button className={style.category_header_button}>
            All categories
          </button>
        </div>
      </div>

      <div className={style.category_content}>
        <div className={style.category_content_item}>
          <div className={style.category_content_item}>
            <a href="#">
              <img src={Fertilizer} alt="Fertilizer" />
              <span>Fertilizer</span>
            </a>
          </div>
        </div>

        <div className={style.category_content_item}>
          <a href="#">
            <img src={ProtectiveProducts} alt="Protective Products" />
            <span>Protective products and septic tanks</span>
          </a>
        </div>

        <div className={style.category_content_item}>
          <a href="#">
            <img src={PlantingMaterial} alt="Planting Material" />
            <span>Planting Material</span>
          </a>
        </div>

        <div className={style.category_content_item}>
          <a href="#">
            <img src={ToolsAndEquipment} alt="Tools and Equipment" />
            <span>Tools and Equipment</span>
          </a>
        </div>

        <button className={style.category_button}>All categories</button>
      </div>
    </div>
  );
};

export default Category;
