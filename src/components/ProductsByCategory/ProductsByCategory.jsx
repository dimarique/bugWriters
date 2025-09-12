import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard.jsx";
import style from "./ProductsByCategory.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SkeletonGrid from "../Skeleton/SkeletonGrid.jsx";
import { fetchProducts } from "../../redux/slices/productsSlice.js"; //загрузка списка товаров
import { fetchCategories } from "../../redux/slices/categoriesSlice.js"; //загрузка списка категорий
import Filters from "../Filters/Filters.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

function ProductsByCategory() {
  const { Id } = useParams(); // получаем id категории из URL
  const dispatch = useDispatch(); // Получаем функцию dispatch, чтобы запускать экшены
  let windowWidth = useWindowWidth();

  const {
    products: allProducts,
    status,
    error,
  } = useSelector((state) => state.products); // список всех товаров + статус
  const allCategories = useSelector((state) => state.categories.categories); // список всех категорий

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchProducts());
    }
    if (!allCategories.length) {
      dispatch(fetchCategories());
    }
  }, [allProducts, allCategories, dispatch]);

  const categoryProducts = allProducts.filter(
    (product) => product.categoryId === Number(Id),
  );
  const currentCategory = allCategories.find((el) => el.id === Number(Id));

  return (
    <>
      {windowWidth >= 768 && <Breadcrumbs />}

      <div className={`${style.productsByCategoryContainer} bottom_margin bottom_top`}>
 
<SectionHeader text={currentCategory?.title}/>
      <Filters price={true} discount={true} sort={true} />
      {status === "loading" && <SkeletonGrid count={12} />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <div className={`responsive_cards side_padding`}>
          {categoryProducts.length === 0 ? (
            <p>Empty</p>
          ) : (
            categoryProducts.map(
              ({ id, title, price, discont_price, image }) => (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  discont_price={discont_price}
                  image={image}
                />
              ),
            )
          )}
        </div>
      )}
    </div>
    </>
  );
}

export default ProductsByCategory;
