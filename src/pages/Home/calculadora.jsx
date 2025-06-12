import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Calculadora() {
  const Navigate = useNavigate();

  // Estados para IMC
  const [imc, setImc] = useState(null);

  // Estados para Proteína
  const [pesoProteina, setPesoProteina] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("moderado");
  const [objetivo, setObjetivo] = useState("manter");
  const [proteinaDiaria, setProteinaDiaria] = useState(null);

  // Estados para Água
  const [pesoAgua, setPesoAgua] = useState("");
  const [nivelAtividadeAgua, setNivelAtividadeAgua] = useState("moderado");
  const [aguaDiaria, setAguaDiaria] = useState(null);

  function calcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(event.target.peso.value);
    const altura = parseFloat(event.target.altura.value);
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
    }

    if (objetivo === "ganhar" || objetivo === "perder") {
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
      case "moderado":
        fatorAgua = 40;
        break;
      case "intenso":
        fatorAgua = 45;
        break;
    }

    const aguaMl = (pesoAgua * fatorAgua).toFixed(0);
    setAguaDiaria({
      ml: aguaMl,
      litros: (aguaMl / 1000).toFixed(2),
    });
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Calculadora de Saúde
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Calculadora de IMC */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#4CAF50", marginTop: 0 }}>
              Calculadora de IMC
            </h2>
            <form onSubmit={calcularIMC}>
              <label style={{ display: "block", marginBottom: "15px" }}>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Peso (kg):
                </span>
                <input
                  type="number"
                  name="peso"
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </label>
              <label style={{ display: "block", marginBottom: "15px" }}>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Altura (m):
                </span>
                <input
                  type="number"
                  name="altura"
                  step="0.01"
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </label>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Calcular IMC
              </button>
            </form>

            {imc !== null && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "4px",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Seu IMC é: {imc.toFixed(2)}</h3>
                <p style={{ fontWeight: "bold" }}>
                  Classificação:{" "}
                  {imc < 18.5
                    ? "Magreza"
                    : imc < 25
                    ? "Normal"
                    : imc < 30
                    ? "Sobrepeso"
                    : imc < 40
                    ? "Obesidade"
                    : "Obesidade Grave"}
                </p>
              </div>
            )}
          </div>

          {/* Calculadora de Proteína */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2196F3", marginTop: 0 }}>
              Necessidade de Proteína
            </h2>
            <form onSubmit={calcularProteina}>
              <label style={{ display: "block", marginBottom: "15px" }}>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Peso (kg):
                </span>
                <input
                  type="number"
                  value={pesoProteina}
                  onChange={(e) => setPesoProteina(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </label>

              <label style={{ display: "block", marginBottom: "15px" }}>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Nível de Atividade:
                </span>
                <select
                  value={nivelAtividade}
                  onChange={(e) => setNivelAtividade(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                >
                  <option value="leve">Leve</option>
                  <option value="moderado">Moderado</option>
                  <option value="intenso">Intenso</option>
                </select>
              </label>

              <label style={{ display: "block", marginBottom: "15px" }}>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Objetivo:
                </span>
                <select
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                >
                  <option value="manter">Manter peso</option>
                  <option value="ganhar">Ganhar massa</option>
                  <option value="perder">Perder peso</option>
                </select>
              </label>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Calcular Proteína
              </button>
            </form>

            {proteinaDiaria && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "4px",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Você precisa de:</h3>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "10px 0",
                  }}
                >
                  {proteinaDiaria}g{" "}
                  <span style={{ fontSize: "16px" }}>de proteína/dia</span>
                </p>
              </div>
            )}
          </div>

        {/* Calculadora de Água */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px',
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#00BCD4', marginTop: 0 }}>Necessidade de Água</h2>
          <form onSubmit={calcularAgua}>
            <label style={{ display: 'block', marginBottom: '15px' }}>
              <span style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Peso (kg):</span>
              <input 
                type="number" 
                value={pesoAgua}
                onChange={(e) => setPesoAgua(e.target.value)}
                required 
                style={{ 
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </label>
            
            <label style={{ display: 'block', marginBottom: '15px' }}>
              <span style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nível de Atividade:</span>
              <select 
                value={nivelAtividadeAgua}
                onChange={(e) => setNivelAtividadeAgua(e.target.value)}
                style={{ 
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                <option value="leve">Leve</option>
                <option value="moderado">Moderado</option>
                <option value="intenso">Intenso</option>
              </select>
            </label>
            
            <button 
              type="submit" 
              style={{ 
                width: '100%',
                padding: '10px',
                backgroundColor: '#00BCD4',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Calcular Água
            </button>
          </form>
          
          {aguaDiaria && (
            <div style={{ 
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#f8f8f8',
              borderRadius: '4px'
            }}>
              <h3 style={{ marginTop: 0 }}>Você precisa beber:</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
                {aguaDiaria.ml}ml <span style={{ fontSize: '16px' }}>({aguaDiaria.litros}L) de água/dia</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
