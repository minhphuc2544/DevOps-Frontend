import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Info } from "lucide-react"
import InfoModal from "../pages/InfoModal"
import TermsOfUseContent from "../pages/TermOfUse"
import PrivacyPolicyContent from "../pages/PrivacyPolicy"
import "../styles/SignUp.css"

export default function SignUpForm({ onClose, onLogin }) {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch("http://localhost:8081/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    })
console.log(JSON.stringify({
        username: formData.username,
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password,    
      }))
    if (response.ok) {
      alert("Đăng ký thành công!")
      onLogin() // chuyển sang trang đăng nhập nếu muốn
    } else {
      const data = await response.json()
      alert(`Đăng ký thất bại: ${data.message || "Lỗi không xác định"}`)
    }
  } catch (error) {
    alert("Lỗi kết nối đến máy chủ.")
    console.error(error)
  }
}

  return (
    <div className="SignUp">
      <div className="login-container">
        <h2>Đăng ký</h2>
        <h5>
          Để tải lên âm nhạc và hình ảnh, bạn phải chấp nhận các{" "}
          <span 
            className="signup-link" 
            style={{cursor: "pointer"}} 
            onClick={() => setShowTerms(true)}
          >
            điều khoản
          </span>
            {" "}và{" "}
          <span 
            className="signup-link" 
            style={{cursor: "pointer"}} 
            onClick={() => setShowPrivacy(true)}
          >
            điều kiện
          </span>
            {" "}của chúng tôi trên trang web
        </h5>
        <span className='sigup-Closed-icon' onClick={onClose}></span>
        <form onSubmit={handleSubmit} className="input-group">
          <p>Tên đăng nhập</p>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="form-input"
            required
          />
          <p>Họ tên</p>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="form-input"
            required
          />

          <p>Email</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />

          <p>Mật khẩu</p>
          <div className="password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-input"
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={50} /> : <Eye size={50} />}
            </span>
          </div>

          <div className="remember-and-forgot-pasword">
            <div className="remember-me">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className="remember-me-checkbox"
              />
              <label htmlFor="terms" className="remember-me-label">
                Tôi đã đọc và chấp nhận{" "}
                <span className="signup-link" style={{cursor: "pointer"}} onClick={() => setShowTerms(true)}>điều khoản</span>{" "}và{" "}
                <span className="signup-link" style={{cursor: "pointer"}} onClick={() => setShowPrivacy(true)}>điều kiện</span>
              </label>
            </div>
          </div>

          <div className="login-group">
            <button className="btn-submit" type="submit" disabled={!formData.agreeToTerms}>
              Đăng ký
            </button>
          </div>
        </form>

        <div className="login-prompt">
          <p>
            Bạn đã có tài khoản?{" "}
            <button className="login-link" onClick={onLogin}>Đăng nhập</button>
          </p>
        </div>
      </div>
      <InfoModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Thỏa thuận sử dụng"
        content={<TermsOfUseContent />}
      />
      <InfoModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Chính sách bảo mật"
        content={<PrivacyPolicyContent />}
      />
    </div>
  )
}