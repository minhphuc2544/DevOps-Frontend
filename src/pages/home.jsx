import '../styles/Home.css'

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import SlidingTabs from '../components/SlidingTabs'
import Login from './Login'
import Signup from './SignUpPage'
import ForgotPassword from './forgot-password'

export default function Home() {

  // for UI's purpose
  const [isLoginOpen, setLoginOpen] = useState(false);
  const openLogin = () => { setLoginOpen(true); return true; };
  const closeLogin = () => setLoginOpen(false);

  const [isSignupOpen, setSignupOpen] = useState(false);
  const openSignup = () => { setSignupOpen(true); return true; };
  const closeSignup = () => setSignupOpen(false);

  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const openForgotPassword = () => { setForgotPasswordOpen(true); return true; };
  const closeForgotPassword = () => setForgotPasswordOpen(false);



  return (
    <>
      <div 
      className={`Home-Page ${(isLoginOpen || isSignupOpen || isForgotPasswordOpen) ? "blur" : ""}`}>
        <div className='SideBar'>
          <div className='Sidebar-Header'>
            <h2>My app</h2>
          </div>
          <div className='Menu-TaskBar'>
          </div>
        </div> 
        <div className='Content'>
          <div className='Lookup-TaskBar'>
            <button className='icon-btn margin-left-40px'>
              <span className='arrow-left'/>
            </button>

            <button className='icon-btn'>
              <span className='arrow-right' />
            </button>

            <div className='search-box'>
              <span className='icon-search' />
              <input 
                type="text"
                placeholder='Tìm kiếm'
                aria-label='Tìm kiêm'
                />
            </div>

            <button className='btn-music link-text'>Music</button>
            
            <button className='outline-btn link-text' onClick={openSignup} >Đăng kí</button>

            <button className='fill-btn link-text' onClick={openLogin}>Đăng nhập</button>
            
          </div>
          <div className='Main-Option'>
            <div className='Main'>
              <h2 className='section-heading'>Gần đây</h2>
              <SlidingTabs tabs={['Âm nhạc', 'Danh sách', 'Video', 'Podcast' ]} />               
              <div className='display-recent'>

              </div>
              
              <h2 className='section-heading'>Gợi ý</h2>
              <SlidingTabs tabs={['Âm nhạc', 'Danh sách', 'Video', 'Podcast' ]} />               
              <div className='display-recent'>
                
              </div>
            </div>
            <div className='Option-TaskBar'></div>
          </div>
        </div>

        {/* This is tab music */}
        <div className='Music-Footer'></div>

      </div>

      {isLoginOpen && (
        <div className="overlay">
          <Login 
          onClose={closeLogin} 
          onForgotPassword={ () => {closeLogin(); openForgotPassword();} }
          onSignup={ () => {closeLogin(); openSignup();} }
          />
        </div>
      )}

      {isSignupOpen && (
        <div className="overlay">
          <Signup 
          onClose={closeSignup} 
          onLogin={ () => {closeSignup(); openLogin();} }
          />
        </div>
      )}

      {isForgotPasswordOpen && (
        <div className="overlay">
          <ForgotPassword 
          onClose={closeForgotPassword} 
          
          />
        </div>

      )}
    </>
  )
}

