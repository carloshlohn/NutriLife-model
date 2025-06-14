import { useNavigate } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FaArrowLeft, FaRunning, FaDumbbell } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

// ===========================
// Scroll Suave Global
// ===========================
const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

// ===========================
// Animações
// ===========================
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ===========================
// Estilos e Layouts
// ===========================
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f0f5 100%);
  padding: 2rem 1.5rem;
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.header`
  margin: 2rem 0 3rem;
  animation: ${fadeIn} 0.8s ease-out;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  background: linear-gradient(to right, #ff9800, #f57c00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 700px;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  text-align: center; /* Garante que o texto fique centralizado */
  margin-left: auto; /* Centraliza horizontalmente */
  margin-right: auto; /* Centraliza horizontalmente */
`;

const BackButton = styled.button`
  background: transparent;
  color: #ff9800;
  border: 2px solid #ff9800;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-self: flex-start;

  &:hover {
    background: #fff3e0;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 2rem 0;
`;

const InnerFeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.8rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  border-top: 4px solid #ff9800;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #ff9800;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const WorkoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  th, td {
    padding: 1.2rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #ff9800;
    color: white;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #fff3e0;
  }
`;

const TipCard = styled.div`
  background: #fff3e0;
  border-left: 5px solid #ff9800;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
`;

// ===========================
// Componente
// ===========================
function Treinos() {
  const navigate = useNavigate();

  const musculacaoTreinos = [
    { nome: "Treino de Peito", descricao: "Supino, flexões e crucifixo para desenvolver força e volume.", duracao: "45 min" },
    { nome: "Treino de Costas", descricao: "Barra fixa, remadas e puxadas para fortalecer o dorso.", duracao: "50 min" },
    { nome: "Treino de Pernas", descricao: "Agachamento, leg press e avanço para força e resistência.", duracao: "50 min" },
    { nome: "Treino de Braços", descricao: "Roscas e extensões para bíceps e tríceps.", duracao: "40 min" }
  ];

  const cardioTreinos = [
    { nome: "Corrida na Esteira", descricao: "Melhora da resistência com treino contínuo ou intervalado.", duracao: "30-45 min" },
    { nome: "HIIT", descricao: "Exercícios intensos intercalados com descanso. Queima extrema.", duracao: "20-30 min" },
    { nome: "Pular Corda", descricao: "Aumenta a coordenação e queima gordura.", duracao: "15-20 min" },
    { nome: "Bike Ergométrica", descricao: "Melhora do condicionamento em pedaladas variáveis.", duracao: "30-40 min" }
  ];

  const tiposMusculacao = [
    {
      nome: "Treino de Intensidade",
      descricao: "Focado em reduzir os intervalos entre séries, aumentar repetições ou utilizar técnicas como drop-set e bi-set para estimular a fadiga muscular.",
      beneficios: "Maior gasto calórico, definição e resistência muscular."
    },
    {
      nome: "Treino de Força",
      descricao: "Prioriza cargas altas com poucas repetições (3-6 reps) e maior tempo de descanso entre as séries para ganho de força bruta.",
      beneficios: "Aumento da força máxima, melhora na performance e na capacidade de levantar cargas pesadas."
    },
    {
      nome: "Treino de Hipertrofia",
      descricao: "Foco no aumento do volume muscular, utilizando repetições moderadas (8-12) e descanso intermediário (60-90 segundos).",
      beneficios: "Crescimento muscular, melhora na estética e resistência muscular local."
    }
  ];

  const trainingTip = "Lembre-se de sempre aquecer antes de iniciar e alongar ao final da sessão para evitar lesões.";

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <BackButton onClick={() => navigate("/")}>
            <FaArrowLeft /> Voltar
          </BackButton>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Title>Treinamento Efetivo</Title>
            <Subtitle>
              Descubra planos de treino para musculação, cardio e entenda os tipos de treino na academia.
            </Subtitle>
          </div>
        </Header>

        <FeaturesContainer>
          {/* Musculação */}
          <FeatureCard>
            <FeatureIcon><GiWeightLiftingUp /></FeatureIcon>
            <FeatureTitle>Musculação</FeatureTitle>
            <FeatureDescription>
              Foco na hipertrofia, força e definição para cada grupo muscular.
            </FeatureDescription>
            <WorkoutTable>
              <thead>
                <tr><th>Treino</th><th>Descrição</th><th>Duração</th></tr>
              </thead>
              <tbody>
                {musculacaoTreinos.map((treino, index) => (
                  <tr key={index}>
                    <td><strong>{treino.nome}</strong></td>
                    <td>{treino.descricao}</td>
                    <td>{treino.duracao}</td>
                  </tr>
                ))}
              </tbody>
            </WorkoutTable>
          </FeatureCard>

          {/* Cardio */}
          <FeatureCard>
            <FeatureIcon><FaRunning /></FeatureIcon>
            <FeatureTitle>Cardio</FeatureTitle>
            <FeatureDescription>
              Melhore sua resistência e queime calorias com treinos dinâmicos.
            </FeatureDescription>
            <WorkoutTable>
              <thead>
                <tr><th>Treino</th><th>Descrição</th><th>Duração</th></tr>
              </thead>
              <tbody>
                {cardioTreinos.map((treino, index) => (
                  <tr key={index}>
                    <td><strong>{treino.nome}</strong></td>
                    <td>{treino.descricao}</td>
                    <td>{treino.duracao}</td>
                  </tr>
                ))}
              </tbody>
            </WorkoutTable>
          </FeatureCard>

          {/* Tipos de Musculação */}
          <FeatureCard>
            <FeatureIcon><FaDumbbell /></FeatureIcon>
            <FeatureTitle>Tipos de Treino na Musculação</FeatureTitle>
            <FeatureDescription>
              Escolha o foco do seu treino: intensidade, força ou hipertrofia.
            </FeatureDescription>

            <InnerFeaturesContainer>
              {tiposMusculacao.map((treino, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1.2rem",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
                    borderTop: "4px solid #ff9800",
                    textAlign: "left",
                  }}
                >
                  <h3 style={{ color: "#2c3e50", marginBottom: "0.6rem", fontSize: "1.15rem" }}>
                    {treino.nome}
                  </h3>
                  <p style={{ color: "#666", marginBottom: "0.4rem", lineHeight: "1.5" }}>
                    {treino.descricao}
                  </p>
                  <p style={{ color: "#ff9800", fontWeight: "600" }}>
                    Benefícios: {treino.beneficios}
                  </p>
                </div>
              ))}
            </InnerFeaturesContainer>
          </FeatureCard>
        </FeaturesContainer>

        <TipCard>
          <FeatureTitle style={{ color: "#2c3e50", textAlign: "left" }}>Dica do Treinador</FeatureTitle>
          <FeatureDescription style={{ textAlign: "left" }}>{trainingTip}</FeatureDescription>
        </TipCard>
      </Container>
    </>
  );
}

export default Treinos;
