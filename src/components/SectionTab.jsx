import React from 'react'
import '../styles/SectionTab.css'
/**
 * SectionTab
 * @param {{ children: React.ReactNode }} props
 */
export default function SectionTab({ children }) {
  return (
    <div className="section-tab">
      <div className="section-tab__line" />
      <div className="section-tab__label">{children}</div>
      <div className="section-tab__line" />
    </div>
  )
}