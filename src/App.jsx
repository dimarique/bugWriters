import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import MenuList from "./components/MenuList/MenuList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className="content_wrapper">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
