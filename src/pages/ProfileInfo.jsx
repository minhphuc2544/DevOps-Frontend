export default function ProfileInfo({
    isEditing,
    userInfo,
    errors,
    profileImage,
    handleInputChange,
    handleSave,
    setIsEditing,
    setShowImageModal,
  }) {
    return (
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-image-section">
            <div
              className="profile-image"
              style={profileImage ? { backgroundImage: `url(${profileImage})`, backgroundSize: "cover" } : {}}
            ></div>
            <button className="edit-photo-button" onClick={() => setShowImageModal(true)}>
              Sửa ảnh
            </button>
          </div>
          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="profile-field">
                  <div className="field-label">Họ và tên:</div>
                  <div className="field-input-container">
                    <input
                      type="text"
                      name="username"
                      className={`field-input ${errors.username ? "field-error" : ""}`}
                      value={userInfo.username}
                      onChange={handleInputChange}
                    />
                    {errors.username && <div className="error-message">{errors.username}</div>}
                  </div>
                </div>
  
                <div className="profile-field">
                  <div className="field-label">Email:</div>
                  <div className="field-input-container">
                    <input
                      type="email"
                      name="email"
                      className={`field-input ${errors.email ? "field-error" : ""}`}
                      value={userInfo.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                </div>
  
                <div className="profile-field">
                  <div className="field-label">Tên đầy đủ:</div>
                  <div className="field-input-container">
                    <input
                      type="text"
                      name="fullname"
                      className={`field-input ${errors.fullname ? "field-error" : ""}`}
                      value={userInfo.fullname}
                      onChange={handleInputChange}
                    />
                    {errors.fullname && <div className="error-message">{errors.fullname}</div>}
                  </div>
                </div>
  
                <div className="profile-field">
                  <div className="field-label">Ngày tạo:</div>
                  <div className="field-input-container">
                    <input
                      type="text"
                      name="createdAt"
                      className={`field-input ${errors.createdAt ? "field-error" : ""}`}
                      value={userInfo.createdAt}
                      onChange={handleInputChange}
                    />
                    {errors.createdAt && <div className="error-message">{errors.createdAt}</div>}
                  </div>
                </div>
  
                <div className="profile-actions">
                  <button className="update-button" onClick={handleSave}>
                    Lưu thông tin
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="profile-field">
                  <div className="field-label">Username:</div>
                  <div className="field-value">{userInfo.username}</div>
                </div>
                <div className="profile-field">
                  <div className="field-label">Email:</div>
                  <div className="field-value">{userInfo.email}</div>
                </div>
                <div className="profile-field">
                  <div className="field-label">Fullname:</div>
                  <div className="field-value">{userInfo.fullname}</div>
                </div>
                <div className="profile-field">
                  <div className="field-label">Ngày tạo:</div>
                  <div className="field-value">{userInfo.createdAt}</div>
                </div>
                <div className="profile-actions">
                  <button className="update-button" onClick={() => setIsEditing(true)}>
                    Cập nhật thông tin
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
  