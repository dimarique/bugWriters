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

function ProductsByCategory() {
  const { Id } = useParams(); // получаем id категории из URL
  const dispatch = useDispatch(); // Получаем функцию dispatch, чтобы запускать экшены

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
    <div className={`${style.productsByCategoryContainer} side_padding`}>
      <h2 className={style.productsByCategoryTitle}>
        {currentCategory?.title}
      </h2>
      <Filters />
      {status === "loading" && <SkeletonGrid count={12} />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <div className={`${style.productsByCategory} responsive_cards`}>
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
  );
}

export default ProductsByCategory;
