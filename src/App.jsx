import { useState } from 'react'


import './styles/App.css'
import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from './pages/auth/Login.jsx'

function App() {
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
