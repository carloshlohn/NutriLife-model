import { useNavigate } from "react-router";
import { Tittle } from "./styles";

function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>
        <Tittle>Bem-vindo ao NutriLife</Tittle>
      </h1>
      <section id="subtitulo">
        <p>Seu aplicativo de nutrição e bem-estar</p>
        <p>Explore nossas funcionalidades:</p>
        <ul>
          <li>Calculadora de IMC</li>
          <li>Quanto de água devo tomar?</li>
          <li>Dicas de saúde</li>
        </ul>
      </section>
      <button onClick={() => Navigate("/Calculadora")}>
        ir para as calculadoras
      </button>
    </div>
  );
}
export default Home;
// This is a simple Home component that renders a heading.
