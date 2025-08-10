import Footer from "./components/footer/footer";
import "./App.css";
import Hero from "./components/HeroBlock/Hero.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import { useState } from "react";
import MenuList from "./components/MenuList/MenuList.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className="content_wrapper">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <MenuList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        {/* <Header />
          <Hero />
          <Footer /> 
         */}
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
