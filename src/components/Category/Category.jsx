import React from 'react'
import style from './Category.module.css'
import Fertilizer from '../../assets/imageCategory/fertilizer.png'
import ProtectiveProducts from '../../assets/imageCategory/protectiveProducts.png'
import PlantingMaterial	from '../../assets/imageCategory/plantingMaterial.png'
import ToolsAndEquipment from '../../assets/imageCategory/toolsAndEquipment.png'




const Category = () => {
  return (
    <div className={style.category}>

      <div className={style.category_header}>
        <h2 className={style.category_header_title}>Categories</h2>
        <div className={style.category_header_buttons}>
          <button className={style.category_header_button}>All categories</button>
        </div>

      </div>

      <div className={style.category_content}>
        <div className={style.category_content_item}>
            <img src={Fertilizer} alt="Fertilizer" />
            <a href="#"><p>Fertilizer</p></a>
        </div>

        <div className={style.category_content_item}>
            <img src={ProtectiveProducts} alt="Protective Products" />
            <a href="#"><p>Protective products and septic tanks</p></a>
        </div>

        <div className={style.category_content_item}>
            <img src={PlantingMaterial} alt="Planting Material" />
            <a href="#"><p>Planting Material</p></a>
        </div>

        <div className={style.category_content_item}>
            <img src={ToolsAndEquipment} alt="Tools and Equipment" />
            <a href="#"><p>Tools and Equipment</p></a>
        </div>

        <button className={style.category_button}>All categories</button>

      </div>
    </div>
  )
}

export default Category