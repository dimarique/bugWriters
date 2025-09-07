import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoriesPage from "./pages/Categories/CategoriesPage.jsx";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice.js";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./pages/Main/Main.jsx";
import Product from "./pages/Product/Product.jsx";
import Sales from "./pages/Sales/Sales.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="content_wrapper">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:Id" element={<ProductsByCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
