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

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Provider store={store}>
        <div className="content_wrapper">
          <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
