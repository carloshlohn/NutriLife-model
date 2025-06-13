import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c3e50",
          fontSize: "2.5rem",
          fontWeight: "600",
        }}
      >
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
            padding: "25px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#4CAF50",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              IMC
            </div>
            <h2
              style={{
                color: "#4CAF50",
                margin: 0,
                fontSize: "1.5rem",
              }}
            >
              Índice de Massa Corporal
            </h2>
          </div>

          <form onSubmit={calcularIMC}>
            <label style={{ display: "block", marginBottom: "20px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Peso (kg):
              </span>
              <input
                type="number"
                name="peso"
                min="0"
                step="0.1"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#4CAF50",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(76, 175, 80, 0.2)",
                  },
                }}
              />
            </label>
            <label style={{ display: "block", marginBottom: "25px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Altura (m):
              </span>
              <input
                type="number"
                name="altura"
                min="0"
                step="0.01"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#4CAF50",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(76, 175, 80, 0.2)",
                  },
                }}
              />
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "background-color 0.3s",
                  ":hover": {
                    backgroundColor: "#3e8e41",
                  },
                }}
              >
                Calcular IMC
              </button>
              {imc !== null && (
                <button
                  type="button"
                  onClick={() => resetarCalculadora("imc")}
                  style={{
                    padding: "12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.3s",
                    ":hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  Limpar
                </button>
              )}
            </div>
          </form>

          {imc !== null && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
                borderLeft: `5px solid ${corClassificacao}`,
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              >
                Resultado do IMC
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#2c3e50",
                    marginRight: "15px",
                  }}
                >
                  {imc.toFixed(1)}
                </div>
                <div
                  style={{
                    padding: "5px 10px",
                    backgroundColor: corClassificacao,
                    color: "white",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  {classificacaoImc}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  marginTop: "15px",
                }}
              >
                <h4
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#555",
                  }}
                >
                  Classificação IMC:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#555",
                  }}
                >
                  <li style={{ marginBottom: "5px" }}>
                    <span style={{ fontWeight: imc < 18.5 ? "600" : "400" }}>
                      Magreza: IMC abaixo de 18,5
                    </span>
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <span
                      style={{
                        fontWeight: imc >= 18.5 && imc < 25 ? "600" : "400",
                      }}
                    >
                      Normal: IMC entre 18,5 e 24,9
                    </span>
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <span
                      style={{
                        fontWeight: imc >= 25 && imc < 30 ? "600" : "400",
                      }}
                    >
                      Sobrepeso: IMC entre 25 e 29,9
                    </span>
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <span
                      style={{
                        fontWeight: imc >= 30 && imc < 40 ? "600" : "400",
                      }}
                    >
                      Obesidade: IMC entre 30 e 39,9
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: imc >= 40 ? "600" : "400" }}>
                      Obesidade Grave: IMC acima de 40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Calculadora de Proteína */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "25px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#2196F3",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              P
            </div>
            <h2
              style={{
                color: "#2196F3",
                margin: 0,
                fontSize: "1.5rem",
              }}
            >
              Necessidade de Proteína
            </h2>
          </div>

          <form onSubmit={calcularProteina}>
            <label style={{ display: "block", marginBottom: "20px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Peso (kg):
              </span>
              <input
                type="number"
                value={pesoProteina}
                onChange={(e) => setPesoProteina(e.target.value)}
                min="0"
                step="0.1"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#2196F3",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(33, 150, 243, 0.2)",
                  },
                }}
              />
            </label>

            <label style={{ display: "block", marginBottom: "20px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Nível de Atividade:
              </span>
              <select
                value={nivelAtividade}
                onChange={(e) => setNivelAtividade(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#2196F3",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(33, 150, 243, 0.2)",
                  },
                }}
              >
                <option value="leve">Leve (pouco exercício)</option>
                <option value="moderado">
                  Moderado (exercício 3-5x/semana)
                </option>
                <option value="intenso">
                  Intenso (exercício diário intenso)
                </option>
              </select>
            </label>

            <label style={{ display: "block", marginBottom: "25px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Objetivo:
              </span>
              <select
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#2196F3",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(33, 150, 243, 0.2)",
                  },
                }}
              >
                <option value="manter">Manter peso</option>
                <option value="ganhar">Ganhar massa muscular</option>
                <option value="perder">Perder peso</option>
              </select>
            </label>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "background-color 0.3s",
                  ":hover": {
                    backgroundColor: "#0b7dda",
                  },
                }}
              >
                Calcular Proteína
              </button>
              {proteinaDiaria && (
                <button
                  type="button"
                  onClick={() => resetarCalculadora("proteina")}
                  style={{
                    padding: "12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.3s",
                    ":hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  Limpar
                </button>
              )}
            </div>
          </form>

          {proteinaDiaria && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
                borderLeft: "5px solid #2196F3",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              >
                Sua Necessidade Diária
              </h3>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#2196F3",
                  marginBottom: "10px",
                }}
              >
                {proteinaDiaria}g
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    color: "#555",
                    marginLeft: "5px",
                  }}
                >
                  de proteína/dia
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  marginTop: "15px",
                }}
              >
                <h4
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#555",
                  }}
                >
                  Fontes de Proteína:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#555",
                  }}
                >
                  <li style={{ marginBottom: "5px" }}>
                    Peito de frango (100g): ~31g
                  </li>
                  <li style={{ marginBottom: "5px" }}>Ovos (1 unidade): ~6g</li>
                  <li style={{ marginBottom: "5px" }}>
                    Queijo cottage (100g): ~11g
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Feijão cozido (100g): ~9g
                  </li>
                  <li>Iogurte grego (100g): ~10g</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Calculadora de Água */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "25px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#00BCD4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              H₂O
            </div>
            <h2
              style={{
                color: "#00BCD4",
                margin: 0,
                fontSize: "1.5rem",
              }}
            >
              Necessidade de Água
            </h2>
          </div>

          <form onSubmit={calcularAgua}>
            <label style={{ display: "block", marginBottom: "20px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Peso (kg):
              </span>
              <input
                type="number"
                value={pesoAgua}
                onChange={(e) => setPesoAgua(e.target.value)}
                min="0"
                step="0.1"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#00BCD4",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(0, 188, 212, 0.2)",
                  },
                }}
              />
            </label>

            <label style={{ display: "block", marginBottom: "25px" }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Nível de Atividade:
              </span>
              <select
                value={nivelAtividadeAgua}
                onChange={(e) => setNivelAtividadeAgua(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  ":focus": {
                    borderColor: "#00BCD4",
                    outline: "none",
                    boxShadow: "0 0 0 2px rgba(0, 188, 212, 0.2)",
                  },
                }}
              >
                <option value="leve">Leve (pouca atividade física)</option>
                <option value="moderado">
                  Moderado (atividade física regular)
                </option>
                <option value="intenso">
                  Intenso (atleta ou trabalho físico intenso)
                </option>
              </select>
            </label>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#00BCD4",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "background-color 0.3s",
                  ":hover": {
                    backgroundColor: "#0097A7",
                  },
                }}
              >
                Calcular Água
              </button>
              {aguaDiaria && (
                <button
                  type="button"
                  onClick={() => resetarCalculadora("agua")}
                  style={{
                    padding: "12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.3s",
                    ":hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  Limpar
                </button>
              )}
            </div>
          </form>

          {aguaDiaria && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
                borderLeft: "5px solid #00BCD4",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              >
                Sua Necessidade Diária
              </h3>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#00BCD4",
                  marginBottom: "5px",
                }}
              >
                {aguaDiaria.ml}ml
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    color: "#555",
                    marginLeft: "5px",
                  }}
                >
                  ({aguaDiaria.litros}L)
                </span>
              </div>
              <div
                style={{
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                Aproximadamente {aguaDiaria.copos} copos de 250ml
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#555",
                  }}
                >
                  Dicas para Hidratação:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#555",
                  }}
                >
                  <li style={{ marginBottom: "5px" }}>Beba água ao acordar</li>
                  <li style={{ marginBottom: "5px" }}>
                    Tenha uma garrafa sempre à mão
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Beba antes de sentir sede
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Aumente a ingestão em dias quentes
                  </li>
                  <li>Consuma mais água durante exercícios</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#2c3e50", marginTop: 0 }}>Importância da Saúde</h3>
        <p style={{ color: "#555", maxWidth: "800px", margin: "0 auto" }}>
          Manter uma alimentação balanceada, hidratação adequada e praticar
          exercícios regularmente são pilares fundamentais para uma vida
          saudável. Estas calculadoras fornecem estimativas baseadas em
          diretrizes nutricionais, mas sempre consulte um profissional de saúde
          para orientações personalizadas.
        </p>
      </div>
      <button onClick={() => navigate("/")}>Voltar para o Início</button>
    </div>
  );
}
