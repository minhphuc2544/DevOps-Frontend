import { useState } from "react"
import InfoModal from "./InfoModal"
import Introduction from "./Introduction" 
import Terms from "./TermOfUse"
import PrivacyPolicyContent from "./PrivacyPolicy"

export default function RightSidebar({ activeView, setActiveView }) {
  const [modalState, setModalState] = useState({
    introduction: false,
    terms: false,
    privacy: false,
    copyright: false,
  })

  const openModal = (modalName) => {
    setModalState({
      ...modalState,
      [modalName]: true,
    })
  }

  const closeModal = (modalName) => {
    setModalState({
      ...modalState,
      [modalName]: false,
    })
  }
  return (
    <div className="right-sidebar">
      <div className="sidebar-section">
        <h2 className="sidebar-title">Bảng điều khiển</h2>
        <div className="sidebar-menu">
          <div
            className={`sidebar-menu-item ${activeView === "info" ? "active" : ""}`}
            onClick={() => setActiveView("info")}
          >
            <span className="menu-icon account-icon"></span>
            <span className="menu-text">Thông tin tài khoản</span>
          </div>
          <div
            className={`sidebar-menu-item ${activeView === "password" ? "active" : ""}`}
            onClick={() => setActiveView("password")}
          >
            <span className="menu-icon password-icon"></span>
            <span className="menu-text">Mật khẩu</span>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">Bảng điều khiển</h2>
        <div className="sidebar-menu">
          <div className="sidebar-menu-item" onClick={() => openModal("introduction")}>
            <span className="menu-icon interface-icon"></span>
            <span className="menu-text">Giới thiệu</span>
          </div>
          <div className="sidebar-menu-item" onClick={() => openModal("terms")}>
            <span className="menu-icon terms-icon"></span>
            <span className="menu-text">Thỏa thuận sử dụng</span>
          </div>
          <div className="sidebar-menu-item" onClick={() => openModal("privacy")}>
            <span className="menu-icon privacy-icon"></span>
            <span className="menu-text">Chính sách bảo mật</span>
          </div>
          <div className="sidebar-menu-item">
            <span className="menu-icon copyright-icon"></span>
            <span className="menu-text">Báo cáo vi phạm bản quyền</span>
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={modalState.introduction}
        onClose={() => closeModal("introduction")}
        title="Giới thiệu"
        content={<Introduction />}
      />
      <InfoModal
        isOpen={modalState.terms}
        onClose={() => closeModal("terms")}
        title="Thỏa thuận sử dụng"
        content={<Terms />}
      />
      <InfoModal
        isOpen={modalState.privacy}
        onClose={() => closeModal("privacy")}
        title="Chính sách bảo mật"
        content={<PrivacyPolicyContent />}
      />
    </div>
  )
}