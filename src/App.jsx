import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoriesPage from "./pages/Categories/CategoriesPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./pages/Main/Main.jsx";
import Product from "./pages/Product/Product.jsx";
import Sales from "./pages/Sales/Sales.jsx";

import Favorites from "./pages/Favorites/Favorites.jsx";
import Products from "./pages/Products/Products.jsx";

import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Provider store={store}>
        <div className="content_wrapper">
          <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="*" element={<NotFound />}/> */}

            <Route path="/categories/:Id" element={<ProductsByCategory />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
