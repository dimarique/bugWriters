import Footer from './components/footer/footer'
import './App.css'
import Hero from './components/HeroBlock/Hero.jsx'
import Header from "./components/Header/Header.jsx";
// import { Route, Routes } from "react-router-dom";
// import Main from "./pages/Main/Main.jsx";


function App() {
  return (
    <>
      <div className="content_wrapper">
        <Header />
        <Hero />
        <Footer />
    {/*
    <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
        */}

      </div>
    </>
  );
}

export default App;
