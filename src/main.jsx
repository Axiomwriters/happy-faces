import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Donate from './components/Donate.jsx';
import PartnershipForm from './components/PartnershipForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/partner" element={<PartnershipForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
