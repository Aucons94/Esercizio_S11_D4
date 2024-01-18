import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";
import ArticoloSingolo from "./Components/ArticoloSingolo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticoloSingolo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
