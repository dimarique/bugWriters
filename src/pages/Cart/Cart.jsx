import styles from "./Cart.module.css";
import CartProduct from "../../components/CartProduct/CartProduct.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import SectionHeaderButton from "../../components/SectionHeaderButton/SectionHeaderButton.jsx";

const Cart = () => {
    let windowWidth = useWindowWidth();
  return (
     
    <div className={styles.cart}>
 <SectionHeader
        text={"Shopping cart"}
        hasButton={windowWidth < 480 ? false : true}
        buttonText={"Back to the store"}
        linkTo="main"
      />
    <CartProduct />
     {windowWidth < 480 && (
        <SectionHeaderButton text={"Back to the store"} linkTo="main" />
      )}
     </div>
  )
  
};

export default Cart;
