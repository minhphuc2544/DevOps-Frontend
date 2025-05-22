import { X, Upload, LinkIcon } from "lucide-react"

export default function ImageUploadModal({
  showImageModal,
  setShowImageModal,
  imageSource,
  setImageSource,
  imageUrl,
  setImageUrl,
  imageError,
  profileImage,
  fileInputRef,
  handleImageUpload,
  handleImageUrl,
  saveImage,
}) {
  if (!showImageModal) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Thay đổi ảnh đại diện</h3>
          <button className="modal-close" onClick={() => setShowImageModal(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="image-source-tabs">
            <button
              className={`image-source-tab ${imageSource === "upload" ? "active" : ""}`}
              onClick={() => setImageSource("upload")}
            >
              <Upload size={16} />
              Tải lên từ máy tính
            </button>
            <button
              className={`image-source-tab ${imageSource === "url" ? "active" : ""}`}
              onClick={() => setImageSource("url")}
            >
              <LinkIcon size={16} />
              Sử dụng URL
            </button>
          </div>

          {imageSource === "upload" ? (
            <div className="upload-section">
              <div className="upload-area" onClick={() => fileInputRef.current.click()}>
                <Upload size={48} />
                <p>Nhấp để chọn hoặc kéo thả hình ảnh vào đây</p>
                <p className="upload-note">Hỗ trợ: JPG, PNG, GIF (Tối đa: 5MB)</p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          ) : (
            <div className="url-section">
              <div className="url-input-container">
                <input
                  type="text"
                  className="url-input"
                  placeholder="Nhập URL hình ảnh"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <button className="url-submit" onClick={handleImageUrl}>
                  Kiểm tra
                </button>
              </div>
            </div>
          )}

          {imageError && <div className="image-error">{imageError}</div>}

          {profileImage && (
            <div className="image-preview-container">
              <h4>Xem trước</h4>
              <div className="image-preview" style={{ backgroundImage: `url(${profileImage})` }}></div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="modal-cancel" onClick={() => setShowImageModal(false)}>
            Hủy
          </button>
          <button className="modal-save" onClick={saveImage} disabled={!profileImage}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  )
}
