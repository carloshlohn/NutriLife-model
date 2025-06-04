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