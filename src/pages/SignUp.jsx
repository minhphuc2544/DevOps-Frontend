import '../styles/SignUp.css'
import SignUpForm from "../components/SignUpForm.jsx"
import { useState } from "react";

export default function SignUp({ onClose, onLogin}) {

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <SignUpForm onClose={onClose} onLogin={onLogin} />
    </div>
  )
}