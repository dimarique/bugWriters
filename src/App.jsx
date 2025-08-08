import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
  return (
    <>
      <div className="content_wrapper">
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
