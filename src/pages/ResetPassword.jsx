import { useState } from "react"
import { Link } from "react-router-dom"

export default function ResetPassword({email, onClose}) {
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate passwords match
    if (newPassword !== repeatPassword) {
      alert("Passwords do not match!")
      return
    }

    // Handle reset password logic here
    console.log("Reset password with code:", code)
    // You would typically make an API call here
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
      <button onClick={onClose} style={styles.closeButton}>×</button>
        <h2 style={styles.title}>Đặt lại mật khẩu</h2>
        <p style={styles.description}>
          Nhập mật khẩu mới của bạn một cách cẩn thận. Mật khẩu phải dài ít nhất 8 ký tự.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.passwordInput}
              required
              minLength={8}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Repeat the password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              style={styles.passwordInput}
              required
              minLength={8}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="button" style={styles.googleButton}>
              <span style={styles.googleIcon}>G</span>
            </button>
            <button type="submit" style={styles.registerButton}>
              Đăng kí
            </button>
          </div>
        </form>

        <div style={styles.footer}>
          Bạn chưa có tài khoản?{" "}
          <Link to="/signup" style={styles.link}>
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  )
}

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#2d5d46",
    borderRadius: "12px",
    padding: "24px",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "12px",
    textAlign: "center",
  },
  description: {
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center",
    lineHeight: "1.4",
  },
  form: {
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    top: "250px",
    right: "560px",
    background: "transparent",
    border: "none",
    fontSize: "44px",
    color: "white",
    cursor: "pointer",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    boxSizing: "border-box",
    backgroundColor: "white",
  },
  passwordInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    boxSizing: "border-box",
    backgroundColor: "#e0e0e0",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  googleButton: {
    width: "48px",
    height: "48px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  googleIcon: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },
  registerButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    fontSize: "12px",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "underline",
  },
}