import React, { useState } from 'react';

export default function Calculadora() {
  // Estados para IMC
  const [imc, setImc] = useState(null);
  
  // Estados para Proteína
  const [pesoProteina, setPesoProteina] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState('moderado');
  const [objetivo, setObjetivo] = useState('manter');
  const [proteinaDiaria, setProteinaDiaria] = useState(null);
  
  // Estados para Água
  const [pesoAgua, setPesoAgua] = useState('');
  const [nivelAtividadeAgua, setNivelAtividadeAgua] = useState('moderado');
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
      alert('Por favor, insira um peso válido.');
      return;
    }

    let fatorProteina = 1.2; // Base para sedentário

    switch (nivelAtividade) {
      case 'leve': fatorProteina = 1.4; break;
      case 'moderado': fatorProteina = 1.6; break;
      case 'intenso': fatorProteina = 2.0; break;
    }

    if (objetivo === 'ganhar' || objetivo === 'perder') {
      fatorProteina += 0.2;
    }

    setProteinaDiaria((pesoProteina * fatorProteina).toFixed(1));
  };

  const calcularAgua = (event) => {
    event.preventDefault();
    if (!pesoAgua || pesoAgua <= 0) {
      alert('Por favor, insira um peso válido.');
      return;
    }

    let fatorAgua = 35; // Base em ml/kg

    switch (nivelAtividadeAgua) {
      case 'moderado': fatorAgua = 40; break;
      case 'intenso': fatorAgua = 45; break;
    }

    const aguaMl = (pesoAgua * fatorAgua).toFixed(0);
    setAguaDiaria({
      ml: aguaMl,
      litros: (aguaMl / 1000).toFixed(2)
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Calculadora de Saúde</h1>
      
      {/* Calculadora de IMC */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Calculadora de IMC</h2>
        <form onSubmit={calcularIMC}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Peso (kg):
            <input 
              type="number" 
              name="peso" 
              required 
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Altura (m):
            <input 
              type="number" 
              name="altura" 
              step="0.01" 
              required 
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
          <button 
            type="submit" 
            style={{ padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Calcular IMC
          </button>
        </form>
        
        {imc !== null && (
          <div style={{ marginTop: '20px' }}>
            <h3>Seu IMC é: {imc.toFixed(2)}</h3>
            <p>
              Classificação: {imc < 18.5 ? 'Magreza' : 
                            imc < 25 ? 'Normal' : 
                            imc < 30 ? 'Sobrepeso' : 
                            imc < 40 ? 'Obesidade' : 'Obesidade Grave'}
            </p>
          </div>
        )}
      </div>

      {/* Calculadora de Proteína */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Necessidade Diária de Proteína</h2>
        <form onSubmit={calcularProteina}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Peso (kg):
            <input 
              type="number" 
              value={pesoProteina}
              onChange={(e) => setPesoProteina(e.target.value)}
              required 
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
          
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Nível de Atividade:
            <select 
              value={nivelAtividade}
              onChange={(e) => setNivelAtividade(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="leve">Leve</option>
              <option value="moderado">Moderado</option>
              <option value="intenso">Intenso</option>
            </select>
          </label>
          
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Objetivo:
            <select 
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="manter">Manter peso</option>
              <option value="ganhar">Ganhar massa</option>
              <option value="perder">Perder peso</option>
            </select>
          </label>
          
          <button 
            type="submit" 
            style={{ padding: '8px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Calcular Proteína
          </button>
        </form>
        
        {proteinaDiaria && (
          <div style={{ marginTop: '20px' }}>
            <h3>Você precisa de: {proteinaDiaria}g de proteína/dia</h3>
          </div>
        )}
      </div>

      {/* Calculadora de Água */}
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Necessidade Diária de Água</h2>
        <form onSubmit={calcularAgua}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Peso (kg):
            <input 
              type="number" 
              value={pesoAgua}
              onChange={(e) => setPesoAgua(e.target.value)}
              required 
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
          
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Nível de Atividade:
            <select 
              value={nivelAtividadeAgua}
              onChange={(e) => setNivelAtividadeAgua(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="leve">Leve</option>
              <option value="moderado">Moderado</option>
              <option value="intenso">Intenso</option>
            </select>
          </label>
          
          <button 
            type="submit" 
            style={{ padding: '8px 15px', backgroundColor: '#00BCD4', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Calcular Água
          </button>
        </form>
        
        {aguaDiaria && (
          <div style={{ marginTop: '20px' }}>
            <h3>Você precisa beber: {aguaDiaria.ml}ml ({aguaDiaria.litros}L) de água/dia</h3>
          </div>
        )}
      </div>
    </div>
  );
}