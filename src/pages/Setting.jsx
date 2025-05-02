import "../styles/Setting.css"

export default function SettingsPage () {
  return (
    <div className="app-container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="nav-arrow prev-arrow"></button>
            <button className="nav-arrow next-arrow"></button>
            <div className="search-container">
              <span className="search-icon"></span>
              <input type="text" placeholder="Tìm kiếm" className="search-input" />
            </div>
          </div>

          <div className="header-right">
            <button className="header-button active">Music</button>
            <button className="header-button">Video</button>
            <button className="notification-button"></button>
            <div className="user-avatar"></div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="settings-content">
          <h1 className="settings-title">Cài đặt tài khoản</h1>

          <div className="profile-container">
            <div className="profile-info">
              <div className="profile-image-section">
                <div className="profile-image"></div>
                <button className="edit-photo-button">Sửa ảnh</button>
              </div>

              <div className="profile-details">
                <div className="profile-field">
                  <div className="field-label">Họ và tên:</div>
                  <div className="field-value">Tên của bạn</div>
                </div>

                <div className="profile-field">
                  <div className="field-label">Email:</div>
                  <div className="field-value">Email@gmail.com</div>
                </div>

                <div className="profile-field">
                  <div className="field-label">Số điện thoại:</div>
                  <div className="field-value">0969 999 999</div>
                </div>

                <div className="profile-field">
                  <div className="field-label">Ngày tạo:</div>
                  <div className="field-value">30/03/2025</div>
                </div>

                <div className="profile-actions">
                  <button className="update-button">Cập nhật thông tin</button>
                  <button className="password-button">Đổi mật khẩu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="sidebar-section">
          <h2 className="sidebar-title">Bảng điều khiển</h2>
          <div className="sidebar-menu">
            <div className="sidebar-menu-item active">
              <span className="menu-icon account-icon"></span>
              <span className="menu-text">Thông tin tài khoản</span>
            </div>
            <div className="sidebar-menu-item">
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

      {/* Music Player */}
      <div className="music-player">
        <div className="player-left">
          <div className="song-thumbnail"></div>
          <div className="song-info">
            <div className="song-title">Country song</div>
            <div className="song-artist">Artist</div>
          </div>
          <button className="like-button"></button>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button className="control-button shuffle"></button>
            <button className="control-button previous"></button>
            <button className="control-button play"></button>
            <button className="control-button next"></button>
            <button className="control-button repeat"></button>
          </div>
          <div className="progress-container">
            <span className="current-time">2:04</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="total-time">5:15</span>
          </div>
        </div>

        <div className="player-right">
          <button className="volume-button"></button>
          <div className="volume-slider">
            <div className="volume-fill"></div>
          </div>
        </div>
      </div>
    </div>
  )
}


