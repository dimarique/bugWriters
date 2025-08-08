import Category from "./components/Category/Category.jsx";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/HeroBlock/Hero.jsx";

function App() {
  return (
    <>
      <div className="content_wrapper">
        <Header />
        <Hero />
        <Category />
      </div>
    </>
  );
}

export default App;
