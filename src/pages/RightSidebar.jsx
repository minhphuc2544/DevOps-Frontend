export default function RightSidebar({ activeView, setActiveView }) {
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
            <div className="sidebar-menu-item">
              <span className="menu-icon interface-icon"></span>
              <span className="menu-text">Giới thiệu</span>
            </div>
            <div className="sidebar-menu-item">
              <span className="menu-icon terms-icon"></span>
              <span className="menu-text">Thỏa thuận sử dụng</span>
            </div>
            <div className="sidebar-menu-item">
              <span className="menu-icon privacy-icon"></span>
              <span className="menu-text">Chính sách bảo mật</span>
            </div>
            <div className="sidebar-menu-item">
              <span className="menu-icon copyright-icon"></span>
              <span className="menu-text">Báo cáo vi phạm bản quyền</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  