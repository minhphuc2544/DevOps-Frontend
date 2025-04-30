import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import "../styles/SignUp.css"

export default function SignUpForm({ onClose, onLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Xử lý đăng ký ở đây
  }

  return (
    <div className="SignUp">
      <div className="login-container">
        <h2>Đăng ký</h2>
        <h5>
          Để tải lên âm nhạc và hình ảnh, bạn phải chấp nhận các{" "}
          <Link to="/terms" className="signup-link">điều khoản</Link>{" "}và{" "}
          <Link to="/privacy" className="signup-link">điều kiện</Link>{" "}
          của chúng tôi trên trang web
        </h5>
        <span className='sigup-Closed-icon' onClick={onClose}></span>
        <form onSubmit={handleSubmit} className="input-group">
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
                <Link to="/terms" className="signup-link">điều khoản</Link>{" "}và{" "}
                <Link to="/privacy" className="signup-link">điều kiện</Link>
              </label>
            </div>
          </div>

          <div className="login-group">
            <a href="#" className="other-login"></a>
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
    </div>
  )
}