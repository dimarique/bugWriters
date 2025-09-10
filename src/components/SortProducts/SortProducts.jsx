import { useDispatch } from "react-redux";
import { compareProducts } from "../../redux/slices/productsSlice";
import style from "./SortProducts.module.css";

const SortProducts = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(compareProducts({ sortBy: e.target.value })); //вызывает action для сортировки
  };

  return (
    <div className={style.sortProducts}>
      <form>
        <label htmlFor="sort">Sorted</label>
        <select id="sort" onChange={handleSortChange}>
          <option value="">Select sorting</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
          <option value="priceAsc">Price: Low to high</option>
          <option value="priceDesc">Price: High to low</option>
        </select>
      </form>
    </div>
  );
};

export default SortProducts;
