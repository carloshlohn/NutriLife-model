import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Calculadora from "./pages/Home/calculadora";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
