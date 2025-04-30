// src/pages/Login.jsx
import '../styles/Login.css'
import { useState } from 'react'
import EyeToggle from '../components/EyeToggle';

export default function Login({ onClose, onForgotPassword, onSignup }) {

    const [ password, setPassword ] = useState('');
    return (
        <div className='Login'>
            <div className="login-container">
                <h2>ĐĂNG NHẬP</h2>
                <h5>Đăng nhập để tiếp tục truy cập vào tài khoản của bạn</h5>
                <span className='login-Closed-icon' onClick={onClose}>
                    
                </span>
                <div className='input-group'>
                    <p>Email hoặc tên người dùng*</p>
                    <input 
                        type="text"
                        placeholder='mail@gmail.com'
                        className='form-input' 
                    />
     
                    <p>Mật khẩu*</p>
                    <EyeToggle
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Tối thiểu 8 kí tự."
                        wrapClassName='password-wrapper'
                        inputClassName='form-input form-input-extension'
                        iconClassName='eye-icon'
                    />
                </div>

                <div className='remember-and-forgot-pasword'>
                    <div className='remember-me'>
                        <input 
                            type="checkbox"
                            id='remember'
                            name='remember'
                            className='remember-me-checkbox'    
                        />
                        <label htmlFor="remember" className='remember-me-label'>
                            Nhớ mật khẩu
                        </label>
                    </div>

                    <button className='form-forgot-password' onClick={onForgotPassword}>Quên mật khẩu?</button>      
                </div>
                
                <div className='login-group'>
                    <button className='other-login'></button>
                    <button className='btn-login'>Đăng nhập</button>
                </div>
            </div>
            <div className='signup-prompt'>
                <p>Bạn chưa có tài khoản?
                     <button className='signup-link' onClick={onSignup}> Đăng kí </button>
                     ngay
                </p>
            </div>
        </div>
    )   
}