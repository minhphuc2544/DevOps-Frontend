export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-image">AMS</div>
          <div className="logo-text">amazon music service</div>
        </div>
  
        <nav className="sidebar-nav">
          <div className="nav-item">
            <span className="nav-icon home-icon"></span>
            <span className="nav-text">Nhà</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon playlist-icon"></span>
            <span className="nav-text">Tuyển tập</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon album-icon"></span>
            <span className="nav-text">Album</span>
          </div>
  
          <div className="nav-section">
            <div className="section-title">Khám phá</div>
            <div className="nav-item">
              <span className="nav-icon-circle"></span>
              <span className="nav-text">Khám phá</span>
            </div>
          </div>
  
          <div className="nav-section">
            <div className="section-title">Bộ sưu tập</div>
            <div className="nav-item">
              <span className="nav-icon favorite-icon"></span>
              <span className="nav-text">Nhạc bạn thích</span>
            </div>
          </div>
  
          <div className="nav-section">
            <div className="section-title">Chung</div>
            <div className="nav-item active">
              <span className="nav-icon settings-icon"></span>
              <span className="nav-text">Cài đặt</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon help-icon"></span>
              <span className="nav-text">Hỗ trợ</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon logout-icon"></span>
              <span className="nav-text">Thoát</span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  