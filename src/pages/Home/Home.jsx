import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Componentes estilizados
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  
  span {
    color: #4CAF50;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const FeaturesContainer = styled.section`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  max-width: 600px;
  width: 100%;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  background: #f8f9fa;
  margin: 0.8rem 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:before {
    content: "✓";
    color: #4CAF50;
    font-weight: bold;
    margin-right: 10px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: #e9f5e9;
  }
`;

const CTAButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    background: #3e8e41;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

function Home() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Title>
        Bem-vindo ao <span>NutriLife</span>
      </Title>
      
      <Subtitle>
        Seu aplicativo completo para nutrição, bem-estar e saúde. 
        Ferramentas inteligentes para ajudar você a alcançar seus objetivos de forma saudável.
      </Subtitle>
      
      <FeaturesContainer>
        <h2 style={{ color: "#2c3e50", marginTop: 0 }}>Explore nossas funcionalidades:</h2>
        <FeatureList>
          <FeatureItem>
            Calculadora de IMC - Descubra seu Índice de Massa Corporal
          </FeatureItem>
          <FeatureItem>
            Hidratação ideal - Saiba quanta água você deve tomar diariamente
          </FeatureItem>
          <FeatureItem>
            Necessidade proteica - Calcule sua ingestão ideal de proteínas
          </FeatureItem>
          <FeatureItem>
            Dicas de saúde - Recomendações personalizadas para seu bem-estar
          </FeatureItem>
        </FeatureList>
      </FeaturesContainer>
      
      <CTAButton onClick={() => navigate("/Calculadora")}>
        <Icon>⚡</Icon>
        Acessar Calculadoras
      </CTAButton>
      <CTAButton onClick={() => navigate("/Treinos")}>
          Ir para a sessão de treinos
      </CTAButton>
      <CTAButton onClick={() => navigate("/Alimentação")}>
          Ir para a sessão de alimentação
      </CTAButton>
    </Container>
  );
}

export default Home;