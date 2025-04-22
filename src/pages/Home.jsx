import '../styles/Home.css'
import { Link, Navigate } from 'react-router-dom'

import { useState } from 'react';

import SectionTab from '../components/SectionTab'



function Home() {
    return (
        <div className='Home-Page'>
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

              <Link to='/music' className='btn-music link-text'>Music</Link>
              
              <Link to='/register' className='outline-btn link-text'>Đăng kí</Link>

              <Link to='/login' className='fill-btn link-text'>Đăng nhập</Link>
              
            </div>
            <div className='Main-Option'>
              <div className='Main'>
              <h2>Gần đây</h2>
                  <SectionTab>
                    
                  </SectionTab>
               
              </div>
              <div className='Option-TaskBar'></div>
            </div>
          </div>

          {/* This is tab music */}
          <div className='Music-Footer'></div>
        </div>
    )
  }
  export default Home;
  