import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard.jsx";
import style from "./ProductsByCategory.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice.js";//загрузка списка товаров
import { fetchCategories } from "../../redux/slices/categoriesSlice.js"; //загрузка списка категорий

function ProductsByCategory() {
  const { Id } = useParams(); //получаем id категории из URL
  const dispatch = useDispatch();//Получаем функцию dispatch, чтобы запускать экшены
  const allProducts = useSelector((state) => state.products.products);//получаем список всех товаров
  const allCategories = useSelector((state) => state.categories.categories);//получаем список всех категорий

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchProducts()); //Если список товаров пуст → загружаем их (dispatch(fetchProducts()))
    }
    if (!allCategories.length) {
      dispatch(fetchCategories()); //Если список категорий пуст → загружаем их (dispatch(fetchCategories()))
    }
  }, [allProducts, allCategories, dispatch]); //чтобы эффект не запускался лишний раз

  const categoryProducts = allProducts.filter( //Фильтруем все товары → оставляем только те, у которых categoryId совпадает с Id из URL.
    (product) => product.categoryId === Number(Id)//Number(Id) потому что useParams возвращает строку.
  );
  const currentCategory = allCategories.find((el) => el.id === Number(Id)); //Находим категорию с нужным id.

  return (
    <div className={style.productsByCategoryContainer}>
      <h2 className={style.productsByCategoryTitle}>
        {currentCategory?.title}
      </h2>
      <div className={style.productsByCategory}>
        {categoryProducts.map(({ id, title, price, discont_price, image }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            discont_price={discont_price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategory;
