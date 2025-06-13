import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaHeartbeat, FaTint, FaDumbbell, FaArrowLeft } from "react-icons/fa";

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

const pulseButton = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
  70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
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
  font-family: "Poppins", sans-serif;
`;

const Header = styled.header`
  margin: 1rem 0 2rem;
  animation: ${fadeIn} 0.8s ease-out;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
  background: linear-gradient(to right, #4caf50, #2e7d32);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 3s infinite;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 0 auto 2rem; /* Centraliza e mantém margin-bottom */
  padding: 0 1rem; /* Adiciona padding nas laterais em telas pequenas */
  max-width: 700px;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  text-align: center;
  width: 90%; /* Garante que não fique colado nas bordas */
  
  @media (min-width: 768px) {
    width: 100%; /* Volta ao tamanho normal em telas maiores */
    padding: 0;
  }
`;

const CalculatorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 1rem 0;
`;

const CalculatorCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out ${(props) => props.delay || "0s"} both;
  border-top: 4px solid ${(props) => props.color || "#4caf50"};
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    animation: ${pulse} 2s ease-in-out;
  }
`;

const CalculatorHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CalculatorIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || "#4caf50"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  animation: ${pulse} 3s infinite;
`;

const CalculatorTitle = styled.h2`
  color: ${(props) => props.color || "#4caf50"};
  margin: 0;
  font-size: 1.5rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 1.2rem;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
  font-size: 0.95rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: ${(props) => props.color || "#4caf50"};
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => `${props.color || "#4caf50"}20`};
    animation: ${pulse} 1s;
  }
`;

const SelectField = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: "Poppins", sans-serif;
  background-color: white;

  &:focus {
    border-color: ${(props) => props.color || "#4caf50"};
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => `${props.color || "#4caf50"}20`};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

const PrimaryActionButton = styled.button`
  flex: 1;
  padding: 0.8rem;
  background: linear-gradient(to right, ${(props) => props.color || "#4caf50"}, 
    ${(props) => props.secondaryColor || "#2e7d32"});
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  font-family: "Poppins", sans-serif;
  animation: ${pulseButton} 2s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${(props) => `${props.color || "#4caf50"}40`};
    animation: none;
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryActionButton = styled(PrimaryActionButton)`
  background: white;
  color: ${(props) => props.color || "#4caf50"};
  border: 2px solid ${(props) => props.color || "#4caf50"};
  box-shadow: none;
  padding: 0.6rem;
  animation: none;

  &:hover {
    background: #f8f9f8;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ResultContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f8f8f8;
  border-radius: 8px;
  border-left: 5px solid ${(props) => props.color || "#4caf50"};
  animation: ${fadeIn} 0.5s ease-out;
`;

const ResultTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.color || "#4caf50"};
  margin-bottom: 0.5rem;
`;

const ResultDescription = styled.div`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TipsContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const TipsTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #555;
`;

const TipsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #555;
  font-size: 0.9rem;
`;

const TipItem = styled.li`
  margin-bottom: 0.3rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: white;
  color: #4caf50;
  border: 2px solid #4caf50;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  margin-top: 2rem;
  font-family: "Poppins", sans-serif;
  animation: ${pulse} 3s infinite;

  &:hover {
    background: #f5f9f5;
    transform: translateY(-2px);
    animation: none;
  }
`;

const InfoSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 3rem auto 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #4caf50;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  &:hover {
    animation: ${pulse} 2s ease-in-out;
  }
`;

const InfoText = styled.p`
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export default function Calculadora() {
  const navigate = useNavigate();

  // Estados para IMC
  const [imc, setImc] = useState(null);
  const [classificacaoImc, setClassificacaoImc] = useState("");
  const [corClassificacao, setCorClassificacao] = useState("");

  // Estados para Proteína
  const [pesoProteina, setPesoProteina] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("moderado");
  const [objetivo, setObjetivo] = useState("manter");
  const [proteinaDiaria, setProteinaDiaria] = useState(null);

  // Estados para Água
  const [pesoAgua, setPesoAgua] = useState("");
  const [nivelAtividadeAgua, setNivelAtividadeAgua] = useState("moderado");
  const [aguaDiaria, setAguaDiaria] = useState(null);

  // Efeito para classificar o IMC quando ele muda
  useEffect(() => {
    if (imc !== null) {
      let classificacao = "";
      let cor = "";

      if (imc < 18.5) {
        classificacao = "Magreza";
        cor = "#FFC107"; // Amarelo
      } else if (imc < 25) {
        classificacao = "Normal";
        cor = "#4CAF50"; // Verde
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
        cor = "#FF9800"; // Laranja
      } else if (imc < 40) {
        classificacao = "Obesidade";
        cor = "#F44336"; // Vermelho
      } else {
        classificacao = "Obesidade Grave";
        cor = "#D32F2F"; // Vermelho escuro
      }

      setClassificacaoImc(classificacao);
      setCorClassificacao(cor);
    }
  }, [imc]);

  function calcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(event.target.peso.value);
    const altura = parseFloat(event.target.altura.value);

    if (isNaN(peso)) {
      alert("Por favor, insira um peso válido.");
      return;
    }

    if (isNaN(altura)) {
      alert("Por favor, insira uma altura válida.");
      return;
    }

    if (altura <= 0) {
      alert("A altura deve ser maior que zero.");
      return;
    }

    const resultado = peso / (altura * altura);
    setImc(resultado);

    // Auto-preenche os pesos nas outras calculadoras
    setPesoProteina(peso);
    setPesoAgua(peso);
  }

  const calcularProteina = (event) => {
    event.preventDefault();
    if (!pesoProteina || pesoProteina <= 0) {
      alert("Por favor, insira um peso válido.");
      return;
    }

    let fatorProteina = 1.2; // Base para sedentário

    switch (nivelAtividade) {
      case "leve":
        fatorProteina = 1.4;
        break;
      case "moderado":
        fatorProteina = 1.6;
        break;
      case "intenso":
        fatorProteina = 2.0;
        break;
      default:
        fatorProteina = 1.6;
    }

    if (objetivo === "ganhar") {
      fatorProteina += 0.2;
    } else if (objetivo === "perder") {
      fatorProteina += 0.2;
    }

    setProteinaDiaria((pesoProteina * fatorProteina).toFixed(1));
  };

  const calcularAgua = (event) => {
    event.preventDefault();
    if (!pesoAgua || pesoAgua <= 0) {
      alert("Por favor, insira um peso válido.");
      return;
    }

    let fatorAgua = 35; // Base em ml/kg

    switch (nivelAtividadeAgua) {
      case "leve":
        fatorAgua = 35;
        break;
      case "moderado":
        fatorAgua = 40;
        break;
      case "intenso":
        fatorAgua = 45;
        break;
      default:
        fatorAgua = 40;
    }

    const aguaMl = (pesoAgua * fatorAgua).toFixed(0);
    setAguaDiaria({
      ml: aguaMl,
      litros: (aguaMl / 1000).toFixed(2),
      copos: Math.ceil(aguaMl / 250), // Considerando copos de 250ml
    });
  };

  const resetarCalculadora = (tipo) => {
    if (tipo === "imc") {
      setImc(null);
      setClassificacaoImc("");
    } else if (tipo === "proteina") {
      setProteinaDiaria(null);
    } else if (tipo === "agua") {
      setAguaDiaria(null);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Calculadoras de Saúde</Title>
        <Subtitle>
          Utilize nossas ferramentas para calcular seus indicadores de saúde e
          receba recomendações personalizadas
        </Subtitle>
      </Header>

      <CalculatorsContainer>
        {/* Calculadora de IMC */}
        <CalculatorCard delay="0s" color="#4CAF50">
          <CalculatorHeader>
            <CalculatorIcon color="#4CAF50">
              <FaHeartbeat />
            </CalculatorIcon>
            <CalculatorTitle color="#4CAF50">Índice de Massa Corporal</CalculatorTitle>
          </CalculatorHeader>

          <form onSubmit={calcularIMC}>
            <InputLabel>
              <LabelText>Peso (kg):</LabelText>
              <InputField
                type="number"
                name="peso"
                min="0"
                step="0.1"
                required
                color="#4CAF50"
              />
            </InputLabel>
            <InputLabel>
              <LabelText>Altura (m):</LabelText>
              <InputField
                type="number"
                name="altura"
                min="0"
                step="0.01"
                required
                color="#4CAF50"
              />
            </InputLabel>
            
            <ButtonGroup>
              <PrimaryActionButton color="#4CAF50" type="submit">
                Calcular IMC
              </PrimaryActionButton>
              {imc !== null && (
                <SecondaryActionButton
                  color="#4CAF50"
                  onClick={() => resetarCalculadora("imc")}
                >
                  Limpar
                </SecondaryActionButton>
              )}
            </ButtonGroup>
          </form>

          {imc !== null && (
            <ResultContainer color={corClassificacao}>
              <ResultTitle>Resultado do IMC</ResultTitle>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <ResultValue color={corClassificacao}>{imc.toFixed(1)}</ResultValue>
                <div
                  style={{
                    padding: "0.3rem 0.8rem",
                    backgroundColor: corClassificacao,
                    color: "white",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    marginLeft: "1rem",
                  }}
                >
                  {classificacaoImc}
                </div>
              </div>

              <TipsContainer>
                <TipsTitle>Classificação IMC:</TipsTitle>
                <TipsList>
                  <TipItem style={{ fontWeight: imc < 18.5 ? "600" : "400" }}>
                    Magreza: IMC abaixo de 18,5
                  </TipItem>
                  <TipItem style={{ fontWeight: imc >= 18.5 && imc < 25 ? "600" : "400" }}>
                    Normal: IMC entre 18,5 e 24,9
                  </TipItem>
                  <TipItem style={{ fontWeight: imc >= 25 && imc < 30 ? "600" : "400" }}>
                    Sobrepeso: IMC entre 25 e 29,9
                  </TipItem>
                  <TipItem style={{ fontWeight: imc >= 30 && imc < 40 ? "600" : "400" }}>
                    Obesidade: IMC entre 30 e 39,9
                  </TipItem>
                  <TipItem style={{ fontWeight: imc >= 40 ? "600" : "400" }}>
                    Obesidade Grave: IMC acima de 40
                  </TipItem>
                </TipsList>
              </TipsContainer>
            </ResultContainer>
          )}
        </CalculatorCard>

        {/* Calculadora de Proteína */}
        <CalculatorCard delay="0.1s" color="#2196F3">
          <CalculatorHeader>
            <CalculatorIcon color="#2196F3">P</CalculatorIcon>
            <CalculatorTitle color="#2196F3">Necessidade de Proteína</CalculatorTitle>
          </CalculatorHeader>

          <form onSubmit={calcularProteina}>
            <InputLabel>
              <LabelText>Peso (kg):</LabelText>
              <InputField
                type="number"
                value={pesoProteina}
                onChange={(e) => setPesoProteina(e.target.value)}
                min="0"
                step="0.1"
                required
                color="#2196F3"
              />
            </InputLabel>

            <InputLabel>
              <LabelText>Nível de Atividade:</LabelText>
              <SelectField
                value={nivelAtividade}
                onChange={(e) => setNivelAtividade(e.target.value)}
                color="#2196F3"
              >
                <option value="leve">Leve (pouco exercício)</option>
                <option value="moderado">Moderado (exercício 3-5x/semana)</option>
                <option value="intenso">Intenso (exercício diário intenso)</option>
              </SelectField>
            </InputLabel>

            <InputLabel>
              <LabelText>Objetivo:</LabelText>
              <SelectField
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                color="#2196F3"
              >
                <option value="manter">Manter peso</option>
                <option value="ganhar">Ganhar massa muscular</option>
                <option value="perder">Perder peso</option>
              </SelectField>
            </InputLabel>

            <ButtonGroup>
              <PrimaryActionButton color="#2196F3" secondaryColor="#0b7dda" type="submit">
                Calcular Proteína
              </PrimaryActionButton>
              {proteinaDiaria && (
                <SecondaryActionButton
                  color="#2196F3"
                  onClick={() => resetarCalculadora("proteina")}
                >
                  Limpar
                </SecondaryActionButton>
              )}
            </ButtonGroup>
          </form>

          {proteinaDiaria && (
            <ResultContainer color="#2196F3">
              <ResultTitle>Sua Necessidade Diária</ResultTitle>
              <ResultValue color="#2196F3">
                {proteinaDiaria}g
                <ResultDescription>de proteína/dia</ResultDescription>
              </ResultValue>

              <TipsContainer>
                <TipsTitle>Fontes de Proteína:</TipsTitle>
                <TipsList>
                  <TipItem>Peito de frango (100g): ~31g</TipItem>
                  <TipItem>Ovos (1 unidade): ~6g</TipItem>
                  <TipItem>Queijo cottage (100g): ~11g</TipItem>
                  <TipItem>Feijão cozido (100g): ~9g</TipItem>
                  <TipItem>Iogurte grego (100g): ~10g</TipItem>
                </TipsList>
              </TipsContainer>
            </ResultContainer>
          )}
        </CalculatorCard>

        {/* Calculadora de Água */}
        <CalculatorCard delay="0.2s" color="#00BCD4">
          <CalculatorHeader>
            <CalculatorIcon color="#00BCD4">H₂O</CalculatorIcon>
            <CalculatorTitle color="#00BCD4">Necessidade de Água</CalculatorTitle>
          </CalculatorHeader>

          <form onSubmit={calcularAgua}>
            <InputLabel>
              <LabelText>Peso (kg):</LabelText>
              <InputField
                type="number"
                value={pesoAgua}
                onChange={(e) => setPesoAgua(e.target.value)}
                min="0"
                step="0.1"
                required
                color="#00BCD4"
              />
            </InputLabel>

            <InputLabel>
              <LabelText>Nível de Atividade:</LabelText>
              <SelectField
                value={nivelAtividadeAgua}
                onChange={(e) => setNivelAtividadeAgua(e.target.value)}
                color="#00BCD4"
              >
                <option value="leve">Leve (pouca atividade física)</option>
                <option value="moderado">Moderado (atividade física regular)</option>
                <option value="intenso">Intenso (atleta ou trabalho físico intenso)</option>
              </SelectField>
            </InputLabel>

            <ButtonGroup>
              <PrimaryActionButton color="#00BCD4" secondaryColor="#0097A7" type="submit">
                Calcular Água
              </PrimaryActionButton>
              {aguaDiaria && (
                <SecondaryActionButton
                  color="#00BCD4"
                  onClick={() => resetarCalculadora("agua")}
                >
                  Limpar
                </SecondaryActionButton>
              )}
            </ButtonGroup>
          </form>

          {aguaDiaria && (
            <ResultContainer color="#00BCD4">
              <ResultTitle>Sua Necessidade Diária</ResultTitle>
              <ResultValue color="#00BCD4">
                {aguaDiaria.ml}ml
                <ResultDescription>({aguaDiaria.litros}L)</ResultDescription>
              </ResultValue>
              <ResultDescription>
                Aproximadamente {aguaDiaria.copos} copos de 250ml
              </ResultDescription>

              <TipsContainer>
                <TipsTitle>Dicas para Hidratação:</TipsTitle>
                <TipsList>
                  <TipItem>Beba água ao acordar</TipItem>
                  <TipItem>Tenha uma garrafa sempre à mão</TipItem>
                  <TipItem>Beba antes de sentir sede</TipItem>
                  <TipItem>Aumente a ingestão em dias quentes</TipItem>
                  <TipItem>Consuma mais água durante exercícios</TipItem>
                </TipsList>
              </TipsContainer>
            </ResultContainer>
          )}
        </CalculatorCard>
      </CalculatorsContainer>

      <InfoSection>
        <h3 style={{ color: "#2c3e50", marginTop: 0 }}>Importância da Saúde</h3>
        <InfoText>
          Manter uma alimentação balanceada, hidratação adequada e praticar
          exercícios regularmente são pilares fundamentais para uma vida
          saudável. Estas calculadoras fornecem estimativas baseadas em
          diretrizes nutricionais, mas sempre consulte um profissional de saúde
          para orientações personalizadas.
        </InfoText>
      </InfoSection>

      <BackButton onClick={() => navigate("/")}>
        <FaArrowLeft /> Voltar para o Início
      </BackButton>
    </Container>
  );
}