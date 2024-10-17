import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
