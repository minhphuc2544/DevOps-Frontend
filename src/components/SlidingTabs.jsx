"use client"

import { useState, useRef, useEffect } from "react"
import "../styles/SlidingTabs.css"
import musicIcon from "../assets/icons/music-icon.svg"

function SlidingTabs({ tabs, onTabChange }) {
  const [active, setActive] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const tabsRef = useRef([])

  useEffect(() => {
    const node = tabsRef.current[active]
    if (node) {
      setIndicatorStyle({
        left: node.offsetLeft + "px",
        width: node.offsetWidth + "px",
      })
    }

    // Call the onTabChange callback if provided
    if (onTabChange) {
      onTabChange(active)
    }
  }, [active, tabs, onTabChange])

  return (
    <div className="sliding-tabs">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`tab-item ${i === active ? "active" : ""}`}
          ref={(el) => (tabsRef.current[i] = el)}
          onClick={() => setActive(i)}
        >
          <img src={musicIcon || "/placeholder.svg"} alt="" className="tab-icon" />
          <span>{tab}</span>
        </div>
      ))}
      <div className="tab-indicator" style={indicatorStyle} />
    </div>
  )
}

export default SlidingTabs
