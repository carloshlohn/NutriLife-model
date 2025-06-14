import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  FaAppleAlt,
  FaFish,
  FaSeedling,
  FaUtensils,
  FaChartPie,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

// Reutilizando animações e estilos base do Home
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Componentes estilizados reutilizados e adaptados
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f0f5 100%);
  padding: 3rem 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
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
  background: linear-gradient(to right, #4caf50, #2e7d32);
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
`;

const BackButton = styled.button`
  background: transparent;
  color: #4caf50;
  border: 2px solid #4caf50;
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
    background: #f5f9f5;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  border-top: 4px solid #4caf50;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #4caf50;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0;
  width: 100%;
  max-width: 800px;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(to right, #4caf50, #2e7d32);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 250px;
  justify-content: center;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
  }
`;

const MealPlanTable = styled.table`
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
    background-color: #4caf50;
    color: white;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f8e9;
  }
`;

const TipCard = styled.div`
  background: #e8f5e9;
  border-left: 5px solid #4caf50;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
`;

function Alimentacao() {
  const navigate = useNavigate();

  const nutritionFeatures = [
    {
      icon: <FaAppleAlt />,
      title: "Dietas Personalizadas",
      description: "Planos alimentares adaptados ao seu biotipo, objetivos e rotina"
    },
    {
      icon: <FaFish />,
      title: "Balanceamento Nutricional",
      description: "Proporções ideais de proteínas, carboidratos e gorduras boas"
    },
    {
      icon: <FaSeedling />,
      title: "Alimentação Natural",
      description: "Receitas com ingredientes frescos e integrais para mais saúde"
    },
    {
      icon: <FaChartPie />,
      title: "Controle de Porções",
      description: "Aprenda a medir quantidades ideais para cada refeição"
    }
  ];

  const mealPlans = [
    { 
      name: "Plano Básico", 
      description: "Para iniciantes na alimentação saudável",
      calories: "1800-2000 kcal",
      features: "Refeições simples e balanceadas"
    },
    { 
      name: "Plano Fit", 
      description: "Para quem busca definição muscular",
      calories: "2000-2200 kcal",
      features: "Alto teor proteico, carboidratos moderados"
    },
    { 
      name: "Plano Low Carb", 
      description: "Para perda de peso acelerada",
      calories: "1500-1700 kcal",
      features: "Baixo carboidrato, ênfase em gorduras boas"
    },
    { 
      name: "Plano Vegetariano", 
      description: "Dieta sem carne com nutrição completa",
      calories: "1900-2100 kcal",
      features: "Proteínas vegetais variadas"
    }
  ];

  const dailyMealPlan = [
    { time: "Café da Manhã (7h)", meal: "Omelete de claras com espinafre + 1 fatia pão integral" },
    { time: "Lanche (10h)", meal: "1 iogurte natural + 1 colher de chia + 5 castanhas" },
    { time: "Almoço (13h)", meal: "Arroz integral + feijão + frango grelhado + salada" },
    { time: "Lanche (16h)", meal: "1 banana + 1 colher de pasta de amendoim" },
    { time: "Jantar (19h)", meal: "Salmão grelhado + purê de batata-doce + legumes" },
    { time: "Ceia (21h)", meal: "1 copo de leite morno ou chá de camomila" }
  ];

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/")}>
          <FaArrowLeft /> Voltar
        </BackButton>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Title>Nutrição Inteligente</Title>
          <Subtitle>
            Descubra planos alimentares personalizados e aprenda a se alimentar 
            de forma saudável e sustentável para atingir seus objetivos.
          </Subtitle>
        </div>
      </Header>

      <FeaturesContainer>
        {nutritionFeatures.map((feature, index) => (
          <FeatureCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>

      <FeatureCard>
        <FeatureTitle style={{ textAlign: 'left', marginBottom: '2rem' }}>Nossos Planos Alimentares</FeatureTitle>
        
        <MealPlanTable>
          <thead>
            <tr>
              <th>Plano</th>
              <th>Descrição</th>
              <th>Calorias</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            {mealPlans.map((plan, index) => (
              <tr key={index}>
                <td><strong>{plan.name}</strong></td>
                <td>{plan.description}</td>
                <td>{plan.calories}</td>
                <td>{plan.features}</td>
              </tr>
            ))}
          </tbody>
        </MealPlanTable>
      </FeatureCard>

      <FeatureCard>
        <FeatureTitle style={{ textAlign: 'left' }}>Dia Nutricional Exemplo</FeatureTitle>
        <FeatureDescription style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          Um dia de alimentação balanceada para um adulto com atividade moderada:
        </FeatureDescription>
        
        <MealPlanTable>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Refeição</th>
            </tr>
          </thead>
          <tbody>
            {dailyMealPlan.map((meal, index) => (
              <tr key={index}>
                <td><strong>{meal.time}</strong></td>
                <td>{meal.meal}</td>
              </tr>
            ))}
          </tbody>
        </MealPlanTable>
      </FeatureCard>

      <TipCard>
        <FeatureTitle style={{ color: '#2c3e50', textAlign: 'center' }}>Dica do Nutricionista</FeatureTitle>
        <FeatureDescription style={{ textAlign: 'center' }}>
          "Mastigue bem os alimentos e coma sem pressa. Isso melhora a digestão e ajuda a reconhecer a saciedade, evitando excessos."
        </FeatureDescription>
      </TipCard>

    </Container>
  );
}

export default Alimentacao;