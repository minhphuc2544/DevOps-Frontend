import "../styles/Setting.css"
import { useState, useRef } from "react"
import { useEffect } from "react"
// Không cần import jwt-decode nữa
import Header from "./Header"
import ImageUploadModal from "./ImageUpload"
import PasswordChange from "./PasswordChange"
import ProfileInfo from "./ProfileInfo"
import RightSidebar from "./RightSideBar"
import MusicPlayer from "../components/MusicPlayer"

export default function SettingsPage() {
  const [activeView, setActiveView] = useState("info")
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: "",
    fullname:"",
    email: "",
    createdAt: "",
  })
  // Add state for profile image
  const [profileImage, setProfileImage] = useState(null)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageSource, setImageSource] = useState("upload") // "upload" or "url"
  const [imageUrl, setImageUrl] = useState("")
  const [imageError, setImageError] = useState("")

  // Reference for file input
  const fileInputRef = useRef(null)
  
  // Add validation errors state
  const [errors, setErrors] = useState({
    username: "",
    fullname:"",
    email: "",
    createdAt: "",
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  // Add state for password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  // Fetch user info from backend
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token")
        const username = localStorage.getItem("username") // Lấy username từ localStorage
        
        if (!token) {
          console.error("Token không tồn tại.")
          return
        }
        
        if (!username) {
          console.error("Username không tồn tại trong localStorage.")
          return
        }

       const response = await fetch(`http://localhost:8080/user`, {
        method: "POST", // Thay đổi thành POST
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      });

        if (!response.ok) {
          console.error("Lỗi API:", response.status)
          throw new Error("Không thể lấy thông tin người dùng.")
        }

        const data = await response.json()
        setUserInfo({
          username: data.username || "",
          fullname: data.fullname || "",
          email: data.email || "",
          createdAt: data.created_at?.split(" ")[0] || "",
        })
      } catch (error) {
        console.error("Lỗi khi gọi API lấy user info:", error)
      }
    }

    fetchUserInfo()
  }, [])


  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setImageError("Vui lòng chọn một tệp hình ảnh hợp lệ")
        return
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageError("Kích thước hình ảnh không được vượt quá 5MB")
        return
      }
      setImageError("")
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }
  // Handle image URL input
  const handleImageUrl = () => {
    if (!imageUrl) {
      setImageError("Vui lòng nhập URL hình ảnh")
      return
    }
    // Basic URL validation
    if (!imageUrl.match(/^(http|https):\/\/[^ "]+$/)) {
      setImageError("URL không hợp lệ")
      return
    }
    // Check if URL is an image
    const img = new Image()
    img.onload = () => {
      setProfileImage(imageUrl)
      setImageError("")
    }
    img.onerror = () => {
      setImageError("URL không phải là hình ảnh hợp lệ")
    }
    img.src = imageUrl
  }

  // Save image and close modal
  const saveImage = () => {
    setShowImageModal(false)
    // Here you would typically send the image to your backend
  }
  // Validation functions
  const validateName = (username) => {
    if (!username.trim()) return "Họ và tên không được để trống"
    if (username.trim().length < 2) return "Họ và tên phải có ít nhất 2 ký tự"
    return ""
  }
  const validateEmail = (email) => {
    if (!email.trim()) return "Email không được để trống"
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Email không hợp lệ"
    return ""
  }
  const validateFullname = (fullname) => {
    if (!fullname.trim()) return "Họ và tên không được để trống"
    if (fullname.trim().length < 2) return "Họ và tên phải có ít nhất 2 ký tự"
    return ""
  }
  const validateDate = (date) => {
    if (!date.trim()) return "Ngày tạo không được để trống"
    // Simple date validation (DD/MM/YYYY format)
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
    if (!dateRegex.test(date)) return "Ngày tạo phải có định dạng DD/MM/YYYY"
    return ""
  }
  // Handle input change with validation
  const handleInputChange = (e) => {
    const { name, value } = e.target  // Sửa username thành name
    setUserInfo((prev) => ({ ...prev, [name]: value }))
    // Validate on change
    let errorMessage = ""
    switch (name) {  // Sửa username thành name
      case "username":
        errorMessage = validateName(value)
        break
      case "email":
        errorMessage = validateEmail(value)
        break
      case "fullname":
        errorMessage = validateFullname(value)  // Sửa validatePhone thành validateFullname
        break
      case "createdAt":
        errorMessage = validateDate(value)
        break
      default:
        break
    }
    setErrors((prev) => ({ ...prev, [name]: errorMessage }))  // Sửa username thành name
  }
  // Validate all fields before saving
  const validateAllFields = () => {
    const usernameError = validateName(userInfo.username)
    const emailError = validateEmail(userInfo.email)
    const fullnameError = validateFullname(userInfo.fullname)  // Sửa validatePhone thành validateFullname
    const dateError = validateDate(userInfo.createdAt)
    setErrors({
      username: usernameError,
      email: emailError,
      fullname: fullnameError,
      createdAt: dateError,
    })
    // Return true if no errors
    return !usernameError && !emailError && !fullnameError && !dateError
  }
  // Handle save button click
  const handleSave = () => {
    if (validateAllFields()) {
      // All validations passed, save the data
      setIsEditing(false)
      // Here you would typically send the data to your backend
      alert("Thông tin đã được lưu thành công!")
    } else {
      // Validation failed, show alert
      alert("Vui lòng kiểm tra lại thông tin!")
    }
  }
  return (
    <>
      <div className="settings-app-container">
        <div className="main-content">
          <Header />
          <div className="settings-content">
            <h1 className="settings-title">Cài đặt tài khoản</h1>
            {activeView === "info" ? (
              <ProfileInfo
                isEditing={isEditing}
                userInfo={userInfo}
                errors={errors}
                profileImage={profileImage}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                setIsEditing={setIsEditing}
                setShowImageModal={setShowImageModal}
              />
            ) : (
              <PasswordChange
                passwordData={passwordData}
                setPasswordData={setPasswordData}
                showCurrentPassword={showCurrentPassword}
                showNewPassword={showNewPassword}
                showConfirmPassword={showConfirmPassword}
                setShowCurrentPassword={setShowCurrentPassword}
                setShowNewPassword={setShowNewPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                setActiveView={setActiveView}
              />
            )}
          </div>
        </div>
        <RightSidebar activeView={activeView} setActiveView={setActiveView} />
      </div>
      <MusicPlayer />
      <ImageUploadModal
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
        imageSource={imageSource}
        setImageSource={setImageSource}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        imageError={imageError}
        profileImage={profileImage}
        fileInputRef={fileInputRef}
        handleImageUpload={handleImageUpload}
        handleImageUrl={handleImageUrl}
        saveImage={saveImage}
      />   
    </>
  )
}