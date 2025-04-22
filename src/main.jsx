import { Children, StrictMode } from 'react'
import './index.css'

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/Login'
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* /đường dẫn đến trang login */} 
          <Route path="/login" element={<Login />} />

          {/* /đường dẫn đến trang khác  */}
          
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
