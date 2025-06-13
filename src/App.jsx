// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Calculadora from "./pages/Home/calculadora";
import Treinos from "./pages/Home/Treinos";
import Alimentação from "./pages/Home/Alimentação";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/alimentacao" element={<Alimentação />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;