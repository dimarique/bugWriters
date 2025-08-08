import React from 'react'
import style from './Category.module.css'
import Fertilizer from './image/fertilizer.png'
import ProtectiveProducts from './image/protectiveProducts.png'
import PlantingMaterial	from './image/plantingMaterial.png'
import ToolsAndEquipment from './image/toolsAndEquipment.png'




const Category = () => {
  return (
    <div className={style.category_overlay}>

      <h2 className={style.category_title}>Categories</h2>

      <div className={style.category_content}>
        <div>
            <img src={Fertilizer} alt="Fertilizer" />
            <a href="#"><p>Fertilizer</p></a>
        </div>

        <div>
            <img src={ProtectiveProducts} alt="Protective Products" />
            <a href="#"><p>Protective products and septic tanks</p></a>
        </div>

        <div>
            <img src={PlantingMaterial} alt="Planting Material" />
            <a href="#"><p>Planting Material</p></a>
        </div>

        <div>
            <img src={ToolsAndEquipment} alt="Tools and Equipment" />
            <a href="#"><p>Tools and Equipment</p></a>
        </div>

      </div>
    </div>
  )
}

export default Category