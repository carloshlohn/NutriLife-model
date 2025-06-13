import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Calculadora from "./pages/Home/calculadora";
import Treinos from "./pages/Home/Treinos";
import Alimentação from "./pages/Home/Alimentação";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/Treinos" element={<Treinos />} />
        <Route path="/Alimentação" element={<Alimentação />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
