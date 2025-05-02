import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import Setting from "./pages/Setting";
import "./styles/App.css"

export default function App() {
  const baseURL = import.meta.env.VITE_BASE_URL || '/';
  return (
    <div className="app-container">
       <Menu />

       <div className="content-container">
    <Routes>
      <Route path={`${baseURL}*`} element={<Navigate to={baseURL} />} />
      <Route path={`${baseURL}/`} element={<Home />} />
      <Route path={`${baseURL}/setting`} element={<Setting />} />
    </Routes>
        </div>
    </div>
  )
}

