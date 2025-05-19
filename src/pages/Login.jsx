import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EyeToggle from '../components/EyeToggle'

export default function Login({ onClose, onForgotPassword, onSignup, setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
    // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })

      const contentType = response.headers.get('content-type')
      if (response.ok) {
        const data = await response.json()
        alert(data.message)
        localStorage.setItem('token', data.token)
        setCurrentUser({ username })
        close();
        // navigate('/pages/Home')

      } else {
        let message = 'Đăng nhập thất bại.'
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          message = data.message || message
        } else {
          const text = await response.text()
          message = text || message
        }
        alert(message)
      }
    } catch (err) {
      alert('Lỗi kết nối máy chủ.')
      console.error(err)
    }
  }

  return (
    <div className='Login'>
      <div className="login-container">
        <h2>ĐĂNG NHẬP</h2>
        <h5>Đăng nhập để tiếp tục truy cập vào tài khoản của bạn</h5>
        <span className='login-Closed-icon' onClick={onClose}></span>

        <form className='input-group' onSubmit={handleSubmit}>
          <p>Email hoặc tên người dùng*</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='mail@gmail.com'
            className='form-input'
            required
          />

          <p>Mật khẩu*</p>
          <EyeToggle
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Tối thiểu 8 kí tự."
            wrapClassName='password-wrapper'
            inputClassName='form-input form-input-extension'
            iconClassName='eye-icon'
            required
          />
          
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
            <button className='form-forgot-password' onClick={onForgotPassword}>
              Quên mật khẩu?
            </button>
          </div>

          <div className='login-group'>
            <button className='other-login' type="button"></button>
            <button className='btn-login' type="submit">Đăng nhập</button>
          </div>
        </form>
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
