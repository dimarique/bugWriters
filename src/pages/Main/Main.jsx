import styles from "./Main.module.css";
import Hero from "../../components/HeroBlock/Hero.jsx";
import CategoriesList from "../../components/Categories/CategoriesList.jsx";
import DiscountForm from "../../components/DiscountForm/DiscountForm.jsx";
import SaleSection from "../../components/SaleSection/SaleSection.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionHeaderButton from "../../components/SectionHeaderButton/SectionHeaderButton.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts.jsx";


const Main = () => {
  let windowWidth = useWindowWidth();
  return (
    <div className={styles.main}>
      <Hero />
      {/* <DiscountedProducts /> */}
      <SectionHeader
        text={"Categories"}
        hasButton={windowWidth < 480 ? false : true}
        buttonText={"all categories"}
      />
      <CategoriesList limit={4} />
      {windowWidth < 480 && <SectionHeaderButton text={"all categories"} />}
      <DiscountForm />
      <SectionHeader
        text={"Sale"}
        hasButton={windowWidth < 480 ? false : true}
        buttonText={"all sales"}
      />
      <SaleSection />
      {windowWidth < 480 && <SectionHeaderButton text={"all sales"} />}
    </div>
  );
};

export default Main;
