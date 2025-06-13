import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaHeartbeat, FaTint, FaDumbbell, FaAppleAlt, FaArrowRight, FaChartLine, FaMedal } from "react-icons/fa";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f0f5 100%);
  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.header`
  margin: 2rem 0 3rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
  background: linear-gradient(to right, #4CAF50, #2E7D32);
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
  border-top: 4px solid #4CAF50;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #4CAF50;
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
  background: linear-gradient(to right, #4CAF50, #2E7D32);
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

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: white;
  color: #4CAF50;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: none;
  
  &:hover {
    background: #f5f9f5;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 4rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #4CAF50;
`;

function Home() {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <FaHeartbeat />,
      title: "Calculadora de IMC",
      description: "Descubra seu Índice de Massa Corporal e receba recomendações personalizadas para melhorar sua saúde"
    },
    {
      icon: <FaTint />,
      title: "Hidratação Inteligente",
      description: "Calcule sua necessidade diária de água baseada no seu peso, atividade física e clima"
    },
    {
      icon: <FaDumbbell />,
      title: "Planos de Treino",
      description: "Acesse rotinas de exercícios personalizadas para diferentes níveis e objetivos"
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrição Personalizada",
      description: "Receba recomendações alimentares e planos nutricionais baseados no seu perfil"
    },
    {
      icon: <FaChartLine />,
      title: "Acompanhamento",
      description: "Registre seu progresso e visualize gráficos de evolução dos seus indicadores de saúde"
    },
    {
      icon: <FaMedal />,
      title: "Desafios Diários",
      description: "Participe de desafios para manter a motivação e criar hábitos saudáveis"
    }
  ];
  
  return (
    <Container>
      <Header>
        <Title>NutriLife</Title>
        <Subtitle>
          Sua plataforma completa para nutrição, bem-estar e saúde. 
          Combina ciência e tecnologia para ajudar você a alcançar seus objetivos de forma saudável e sustentável.
        </Subtitle>
      </Header>
      
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>
      
      <ButtonContainer>
        <PrimaryButton onClick={() => navigate("/Calculadora")}>
          <FaArrowRight /> Calculadoras
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate("/Treinos")}>
          <FaDumbbell /> Ver Treinos
        </SecondaryButton>
        <SecondaryButton onClick={() => navigate("/Alimentação")}>
          <FaAppleAlt /> Planos Alimentares
        </SecondaryButton>
      </ButtonContainer>
      
      <TestimonialSection>
        <h3 style={{ color: "#2c3e50", marginBottom: "1.5rem" }}>Depoimentos de Nossos Usuários</h3>
        <p style={{ fontStyle: "italic", color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}>
          "Com o NutriLife, consegui perder 12kg em 4 meses de forma saudável. As calculadoras me ajudaram a entender minhas necessidades e os planos de treino foram essenciais para minha evolução física."
          <br /><br />
          <span style={{ fontWeight: "600", color: "#4CAF50" }}>- Carlos M., 32 anos</span>
        </p>
      </TestimonialSection>
    </Container>
  );
}

export default Home;