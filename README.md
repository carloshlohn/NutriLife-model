# NutriLife - Aplicativo de Nutrição e Bem-Estar

NutriLife é um aplicativo web desenvolvido em React que oferece ferramentas úteis para ajudar no controle da saúde e nutrição. O aplicativo inclui calculadoras de IMC, necessidades de proteína e hidratação diária.

## Funcionalidades Principais

- **Calculadora de IMC**: Calcula seu Índice de Massa Corporal e fornece a classificação
- **Necessidade de Proteína**: Calcula a quantidade diária de proteína baseada em peso, nível de atividade e objetivos
- **Hidratação Diária**: Calcula a quantidade ideal de água a ser consumida diariamente
- **Interface Intuitiva**: Design limpo e responsivo para fácil utilização

## Tecnologias Utilizadas

- React
- Vite
- Styled Components
- JavaScript (ES6+)

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o aplicativo no navegador

## Estrutura do Projeto

```
src/
├── pages/
│   ├── Home/
│   │   ├── calculadora.jsx  # Componente principal com todas as calculadoras
│   │   └── index.jsx        # Página inicial com introdução
├── styles/
│   ├── GlobalStyles.js      # Estilos globais
│   └── styles.js            # Componentes estilizados
└── main.jsx                 # Ponto de entrada da aplicação
```

## Licença

Este projeto está licenciado sob a licença MIT.
