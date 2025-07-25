import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Sass/style.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App title="Translator"/>
  </StrictMode>,
)
