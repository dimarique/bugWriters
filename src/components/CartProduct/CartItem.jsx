import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/slices/cartSlice";
import ProductCount from "../ProductCount/ProductCount.jsx";
import style from "./CartItem.module.css";

export default function CartItem({ id, title, price, image, count }) {
  const dispatch = useDispatch();

  return (
    <div className={style.cartItem}>
       <div className= {style.cartItem_image}> 
          <img src={image} alt={title}  />
          </div>
       
    
      <div className={style.cartItem_info}>


        <div className={style.cartItem_info_up}>
          <p >{title}</p>
          <button className={style.cartItem_remove} onClick={() => dispatch(removeProduct(id))}>
            X
          </button>
        </div>
        <div className={style.cartItem_info_down}>
               <ProductCount count={count} id={id} />
        <p className={style.cartItem_price}> {price* count}$</p>
        

        </div>
     
      
      </div>
    </div>
  );
}


