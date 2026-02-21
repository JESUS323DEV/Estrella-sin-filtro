import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Globales
import './styles/index.css'

//Styles
import './styles/layout/Header.css'
import "./styles/sections/Hero.css"
import "./styles/sections/Services.css"
import "./styles/sections/WebDevServices.css"
import "./styles/layout/Footer.css"

import "./styles/Responsive.css"


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
