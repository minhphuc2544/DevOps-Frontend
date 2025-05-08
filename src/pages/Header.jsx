export default function Header() {
    return (
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
    )
  }
  