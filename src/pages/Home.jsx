import '../styles/Home.css'

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";  
import { useEffect, useState } from "react";
import SlidingTabs from '../components/SlidingTabs'
import Login from './Login'
import Signup from './SignUp'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'
import MusicPlayer from "../components/MusicPlayer"
import MusicSidebar from "../components/MusicSidebar"
import MusicBox from '../components/MusicBox'
import HeaderBefore from './HeaderBefore'

export default function Home() {

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
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

  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);
  const openResetPassword = () => { setResetPasswordOpen(true); return true; };
  const closeResetPassword = () => setResetPasswordOpen(false);

  const [email, setEmail] = useState("");

  const [musicList, setMusicList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [nameSong, setNameSong] = useState(null);

  useEffect(() => {
  const token = Cookies.get('access_token');
  const username = Cookies.get('username');
  setCurrentUser(username);
  if (!token) ;

  else {fetch('http://localhost:8082/task/getAllMusic', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.music) setMusicList(data.music);
      // console.log(data.music)
    })
    .catch((err) => console.error("Error fetching music:", err));
}}, []);


  useEffect(() => {
  const fetchUserInfo = async () => {
  const access_token = Cookies.get('access_token');

  if (!access_token) {

  } else {
    const response = await fetch(`http://localhost:8080/user/me`, {
          method: "POST", // Thay đổi thành POST
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username }),
        });
      
      if (response.ok){
        const data = await response.json()
        Cookies.set('id', data.id, { expires: oneHourFromNow });
      }
    
  }
}}, []);
   


  return (
    <>
      <div 
      className={`Home-Page ${(isLoginOpen || isSignupOpen || isForgotPasswordOpen) ? "blur" : ""}`}>
        <div className='Content'>
          {/*<div className='Lookup-TaskBar'>
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
            
          </div>*/}


          <HeaderBefore onLogin={openLogin} onSignup={openSignup} currentUser={currentUser}/>
            {/* {currentUser ? (
              <div className="Header-AFTER">
                <p className="welcome-user">Xin chào, {currentUser.username}!</p>
              </div>
            ) : (
              <HeaderBefore onLogin={openLogin} onSignup={openSignup} />
            )} */}


          <div className='Main-Option'>
            <div className='Main'>
              <h2 className='section-heading'>Gần đây</h2>
              <SlidingTabs tabs={['Âm nhạc', 'Danh sách', 'Video', 'Podcast' ]} />               
              <div className='display-recent'>
              {/* gọi thanh phần âm nhạc */}
              {/* <MusicBox title="Cinnamon girl" artist="Lana Delray" />
              <MusicBox title="Mijesty" artist="Eminem" />
              <MusicBox title="Country song" artist="Seether" />
              <MusicBox title="Mijesty" artist="Eminem" />
              <MusicBox title="Country song" artist="Seether" /> */}
              {musicList.length === 0 ? (
                  <p>Không có bài hát nào. Hãy đăng nhập!</p>
                ) : (
                  musicList.map((song) => (
                    <MusicBox
                      key={song.id}
                      title={song.name}
                      artist={song.artist}
                      onClick={() => {setCurrentSong(song.accessurl); setNameSong(song.name);} 
                      }
                      
                    />
                  ))
                )}

              </div>
              
              <h2 className='section-heading'>Gợi ý</h2>
              <SlidingTabs tabs={['Âm nhạc', 'Danh sách', 'Video', 'Podcast' ]} />               
              <div className='display-recent'>
              {/* <MusicBox title="Cinnamon girl" artist="Lana Delray" />
              <MusicBox title="Mijesty" artist="Eminem" />
              <MusicBox title="Country song" artist="Seether" />
              <MusicBox title="Mijesty" artist="Eminem" />
              <MusicBox title="Country song" artist="Seether" /> */}
              {musicList.length === 0 ? (
                <p>Không có bài hát nào. Hãy đăng nhập!</p>
              ) : (
                musicList.map((song) => (
                  <MusicBox
                    key={song.id}
                    title={song.name}
                    artist={song.artist}
                    onClick={() => {setCurrentSong(song.accessurl); setNameSong(song.name)}}
                  />
                ))
              )}

              </div>
            </div>
            <div className="Option-TaskBar">
              <MusicSidebar />
            </div>
          </div>
        </div>

        {/* This is tab music */}
        <div className="Music-Footer">
          {/* <MusicPlayer /> */}
          <MusicPlayer currentSong={currentSong} nameSong={nameSong} />
        </div>

      </div>

      {isLoginOpen && (
        <div className="overlay">
          <Login 
          onClose={closeLogin} 
          onForgotPassword={ () => {closeLogin(); openForgotPassword();} }
          onSignup={ () => {closeLogin(); openSignup();} }
          setCurrentUser={setCurrentUser}
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
          onEmailSubmitted={(email) => {
            setEmail(email);
            closeForgotPassword();      
            openResetPassword();       
          }}
          onShowSignUp={() => {
            closeForgotPassword();
            openSignup();
          }}
          />
        </div>
      )}

      {isResetPasswordOpen && (
        <div className="overlay">
          <ResetPassword
          email={email}
          onClose={closeResetPassword} />
        </div>
      )}
    </>
  )
}

