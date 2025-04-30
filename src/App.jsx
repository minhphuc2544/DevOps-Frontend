import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";

export default function App() {
  const baseURL = import.meta.env.VITE_BASE_URL || '/';
  return (
    <div className="app-container">
       <Menu />
    <Routes>
      <Route path={`${baseURL}*`} element={<Navigate to={baseURL} />} />
      <Route path={`${baseURL}/`} element={<Home />} />
    </Routes>
    </div>
  )
}

