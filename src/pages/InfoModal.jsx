"use client"

import { X } from "lucide-react"

export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body info-modal-body">{content}</div>
        <div className="modal-footer">
          <button className="modal-cancel" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}
