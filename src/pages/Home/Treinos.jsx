import { useNavigate } from "react-router-dom";
function Treinos() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Treinos</h1>
      <p className="text-lg">
        Em breve, você poderá acessar seus treinos aqui!
      </p>
      <button onClick={() => navigate("/")}>Voltar para o Início</button>
    </div>
  );
}
export default Treinos;
