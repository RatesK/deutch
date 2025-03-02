import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mono from './quizes.jsx'
import HomePage from './home.jsx'
import './css.css'
import { HashRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/:id" element={<Mono />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HashRouter>
  </StrictMode>,
)
