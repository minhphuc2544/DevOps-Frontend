import React from 'react';
import '../styles/HeaderBefore.css';

export default function Header({ onLogin, onSignup, currentUser}) {
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
          {currentUser  ? (
            <>
              <button className="header-button active">Music</button>
              <img className="avatar" src="/public/music.svg"></img> 
              <p className="welcome-user">{currentUser}</p>
            </>
      ) : (
        <>
          <button className="header-button" onClick={onSignup}>Đăng ký</button>
          <button className="header-button filled" onClick={onLogin}>Đăng nhập</button>
        </>
      )}
          {/* <button className="header-button" onClick={onSignup}>Đăng ký</button>
          <button className="header-button filled" onClick={onLogin}>Đăng nhập</button> */}
        </div>
      </header>
    )
  }