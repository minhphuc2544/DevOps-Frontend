import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage.jsx"
import SettingPage from "./pages/SettingPage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SettingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  )
}

export default App
