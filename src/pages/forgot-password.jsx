import { useState } from "react"
import { Link } from "react-router-dom"

export default function ForgotPassword({ onClose}) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log("Sending reset link to:", email)
    // You would typically make an API call here
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Quên mật khẩu</h2>
        <p style={styles.description}>
          Nhập địa chỉ email của bạn bên dưới và chúng tôi sẽ gửi email cho bạn một liên kết để đặt lại mật khẩu của
          bạn.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="button" style={styles.googleButton}>
              <span style={styles.googleIcon}>G</span>
            </button>
            <button type="submit" style={styles.submitButton}>
              Gửi Email
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
    backgroundColor: "transparent",
    padding: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#568171",
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
  inputGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    boxSizing: "border-box",
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
  submitButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#222",
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