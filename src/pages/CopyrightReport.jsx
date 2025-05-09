import { useState } from "react"
import { X } from "lucide-react"

export default function CopyrightReportModal({ isOpen, onClose }) {
  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    contentUrl: "",
    description: "",
    ownershipProof: "",
    agreement: false,
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setReportData({
      ...reportData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!reportData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên"
    }

    if (!reportData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reportData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    if (!reportData.contentUrl.trim()) {
      newErrors.contentUrl = "Vui lòng nhập URL nội dung vi phạm"
    }

    if (!reportData.description.trim()) {
      newErrors.description = "Vui lòng mô tả vi phạm"
    }

    if (!reportData.agreement) {
      newErrors.agreement = "Bạn phải đồng ý với điều khoản báo cáo"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the report to your backend
      alert("Báo cáo vi phạm bản quyền đã được gửi thành công!")
      setReportData({
        name: "",
        email: "",
        contentUrl: "",
        description: "",
        ownershipProof: "",
        agreement: false,
      })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content copyright-modal">
        <div className="modal-header">
          <h3>Báo cáo vi phạm bản quyền</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="copyright-form">
            <div className="form-group">
              <label htmlFor="name">Họ và tên chủ sở hữu bản quyền:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reportData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? "field-error" : ""}`}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email liên hệ:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={reportData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? "field-error" : ""}`}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="contentUrl">URL nội dung vi phạm:</label>
              <input
                type="text"
                id="contentUrl"
                name="contentUrl"
                value={reportData.contentUrl}
                onChange={handleInputChange}
                className={`form-input ${errors.contentUrl ? "field-error" : ""}`}
                placeholder="https://"
              />
              {errors.contentUrl && <div className="error-message">{errors.contentUrl}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Mô tả vi phạm:</label>
              <textarea
                id="description"
                name="description"
                value={reportData.description}
                onChange={handleInputChange}
                className={`form-textarea ${errors.description ? "field-error" : ""}`}
                rows="4"
              ></textarea>
              {errors.description && <div className="error-message">{errors.description}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="ownershipProof">Bằng chứng sở hữu (không bắt buộc):</label>
              <textarea
                id="ownershipProof"
                name="ownershipProof"
                value={reportData.ownershipProof}
                onChange={handleInputChange}
                className="form-textarea"
                rows="3"
                placeholder="Cung cấp thông tin về quyền sở hữu của bạn đối với nội dung bị vi phạm"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={reportData.agreement}
                onChange={handleInputChange}
              />
              <label htmlFor="agreement">
                Tôi xác nhận thông tin trên là chính xác và tôi là chủ sở hữu hợp pháp của nội dung bị vi phạm
              </label>
              {errors.agreement && <div className="error-message">{errors.agreement}</div>}
            </div>

            <div className="form-actions">
              <button type="button" className="modal-cancel" onClick={onClose}>
                Hủy
              </button>
              <button type="submit" className="modal-save">
                Gửi báo cáo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}