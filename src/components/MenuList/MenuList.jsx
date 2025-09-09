import styles from "./MenuList.module.css";
import { Link } from "react-router-dom";
import close from "../../assets/x.svg";
import OneDayDiscountModal from "../OneDayDiscountModal/OneDayDiscountModal";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice.js";

const MenuList = ({ menuIsOpen, setMenuIsOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();


const getRandomProduct = () => {
  if (!products || products.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * products.length);


  return {
  id: products[randomIndex].id,
  title: products[randomIndex].title,
  price: products[randomIndex].price,
  discont_price: products[randomIndex].discont_price || (products[randomIndex].price / 2).toFixed(2), // 50% скидка
  image: products[randomIndex].image,
};
}

  const handleAddToCart = (product) => {
     dispatch(
          addProduct({
            id: product.id,
            title: product.title,
            price: product.price,
            discont_price: product.discont_price,
            image: product.image,
        
          })
        );
      setIsModalOpen(false);
  };

  const randomProduct = getRandomProduct();
console.log('Random product:', randomProduct);
  return (
    <div className={`${styles.menuList} ${menuIsOpen ? styles.open : ""}`}>
      <img onClick={() => setMenuIsOpen(false)} src={close} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="products">All products</Link>
          </li>
          <li>
            <Link to="/sales">All sales</Link>
          </li>
           <button
                  className={styles.discount_link}
                  onClick={() => setIsModalOpen(true)}
                >
                  1 day discount!
                </button>
          
        </ul>
      </nav>
      {isModalOpen && randomProduct && (
        <OneDayDiscountModal
          product={randomProduct}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default MenuList;
