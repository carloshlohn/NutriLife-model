import React, { useState } from 'react';

export default function Calculadora() {
  const [imc, setImc] = useState(null);

  function calcular(event) {
    event.preventDefault();
    const peso = parseFloat(event.target.peso.value);
    const altura = parseFloat(event.target.altura.value);
    const resultado = peso / (altura * altura);
    setImc(resultado);
  }

/**
   * Calcula a necessidade diária de proteína
   */
  const calcularProteina = () => {
    if (!pesoProteina || pesoProteina <= 0) {
      alert('Por favor, insira um peso válido.');
      return;
    }

    // Fator base de proteína por kg (1.2g/kg para sedentário)
    let fatorProteina = 1.2;

    // Ajusta o fator baseado no nível de atividade
    switch (nivelAtividade) {
      case 'leve':
        fatorProteina = 1.4;
        break;
      case 'moderado':
        fatorProteina = 1.6;
        break;
      case 'intenso':
        fatorProteina = 2.0;
        break;
      default:
        fatorProteina = 1.6;
    }

    // Ajusta o fator baseado no objetivo
    switch (objetivo) {
      case 'ganhar':
        fatorProteina += 0.2;
        break;
      case 'perder':
        fatorProteina += 0.2;
        break;
      default:
        break;
    }

    const proteina = (pesoProteina * fatorProteina).toFixed(1);
    setProteinaDiaria(proteina);
  };

  /**
   * Calcula a necessidade diária de água
   */
 
  /**
   * Calcula a necessidade diária de água
   */
  const calcularAgua = () => {
    if (!pesoAgua || pesoAgua <= 0) {
      alert('Por favor, insira um peso válido.');
      return;
    }
 
 // Fator base de água (35ml/kg)
    let fatorAgua = 35;

    // Ajusta o fator baseado no nível de atividade
    switch (nivelAtividadeAgua) {
      case 'leve':
        fatorAgua = 35;
        break;
      case 'moderado':
        fatorAgua = 40;
        break;
      case 'intenso':
        fatorAgua = 45;
        break;
      default:
        fatorAgua = 35;
    }

  const aguaMl = (pesoAgua * fatorAgua).toFixed(0);
    const aguaLitros = (aguaMl / 1000).toFixed(2);
    setAguaDiaria({ ml: aguaMl, litros: aguaLitros });
  };

    
    return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcular}>
        <label>
          Peso (kg):
          <input type="number" name="peso" required />
        </label>
        <br />
        <label>
          Altura (m):
          <input type="number" name="altura" step="0.01" required />
        </label>
        <br />
        <button type="submit">Calcular IMC</button>
        </form>
      {imc !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Seu IMC é: {imc.toFixed(2)}</h3>
          {imc < 18.5 && <p>Classificação: Magreza</p>}
          {imc >= 18.5 && imc < 25 && <p>Classificação: Normal</p>}
          {imc >= 25 && imc < 30 && <p>Classificação: Sobrepeso</p>}
          {imc >= 30 && imc < 40 && <p>Classificação: Obesidade</p>}
          {imc >= 40 && <p>Classificação: Obesidade Grave</p>}
        </div>
      )}
    </div>
  );
}
