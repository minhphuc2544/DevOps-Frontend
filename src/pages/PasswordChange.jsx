import { Eye, EyeOff } from "lucide-react"

export default function PasswordChange({
  passwordData,
  setPasswordData,
  showCurrentPassword,
  showNewPassword,
  showConfirmPassword,
  setShowCurrentPassword,
  setShowNewPassword,
  setShowConfirmPassword,
  setActiveView,
}) {
  const handlePasswordChange = () => {
    if (passwordData.newPassword.length < 8) {
      alert("Mật khẩu mới phải có ít nhất 8 ký tự!")
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Mật khẩu mới không khớp!")
      return
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      alert("Mật khẩu mới không được giống mật khẩu cũ!")
      return
    }

    alert("Mật khẩu đã được thay đổi thành công!")
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    setActiveView("info")
  }

  return (
    <div className="password-container">
      <h2 className="password-title">Đổi mật khẩu</h2>
      <div className="password-form">
        <div className="password-field">
          <div className="field-label">Mật khẩu cũ:</div>
          <div className="password-input-container">
            <input
              type={showCurrentPassword ? "text" : "password"}
              className="field-input"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
            />
            <span className="eye-icon" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>
        <div className="password-field">
          <div className="field-label">Mật khẩu mới:</div>
          <div className="password-input-container">
            <input
              type={showNewPassword ? "text" : "password"}
              className="field-input"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
            />
            <span className="eye-icon" onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>
        <div className="password-field">
          <div className="field-label">Nhập lại mật khẩu mới:</div>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="field-input"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
            />
            <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>
        <div className="password-actions">
          <button className="change-password-button" onClick={handlePasswordChange}>
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  )
}
