import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";

import Footer from './components/Footer/Footer.jsx'


import { useState } from "react";
import MenuList from "./components/MenuList/MenuList.jsx";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/footer/Footer.jsx";
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
