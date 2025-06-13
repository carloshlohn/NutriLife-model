import { useNavigate } from "react-router-dom";
function Alimentação() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Alimentação</h1>
      <p>Esta é a página de alimentação.</p>
      <p>Aqui você encontrará informações sobre nutrição e dietas saudáveis.</p>
      <button onClick={() => navigate("/")}>Voltar para o Início</button>
    </div>
  );
}
export default Alimentação;
