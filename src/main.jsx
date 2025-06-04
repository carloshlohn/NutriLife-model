import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import MyStyles from './styles/GlobalStyles'
import Calculadora from './pages/Home/calculadora'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyStyles/>
    <Home/>
    <Calculadora />
  </StrictMode>,
)
