"use client"

import { useState } from "react"
import "../styles/MusicSidebar.css"

export default function MusicSidebar() {
  const [activeTab, setActiveTab] = useState("Việt Nam")

  // Sample data for the ranking chart
  const rankingData = [
    { id: 1, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 2, title: "Country song", artist: "Artist", duration: "5:13", image: "/placeholder.jpg" },
    { id: 3, title: "Country song", artist: "Artist", duration: "5:12", image: "/placeholder.jpg" },
    { id: 4, title: "Country song", artist: "Artist", duration: "5:15", image: "/placeholder.jpg" },
    { id: 5, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 6, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 7, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
  ]

  // Sample data for the waiting list
  const currentlyPlaying = {
    title: "Country song",
    artist: "Artist",
    duration: "5:10",
    image: "/placeholder.jpg",
  }

  const upNext = [
    { id: 1, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 2, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 3, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 4, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
    { id: 5, title: "Country song", artist: "Artist", duration: "5:10", image: "/placeholder.jpg" },
  ]

  return (
    <div className="music-sidebar">
      <div className="sidebar-section ranking-section">
        <h2 className="sidebar-heading">Bảng xếp hạng bài hát</h2>

        <div className="region-tabs">
          <button
            className={`region-tab ${activeTab === "Việt Nam" ? "active" : ""}`}
            onClick={() => setActiveTab("Việt Nam")}
          >
            Việt Nam
          </button>
          <button
            className={`region-tab ${activeTab === "Âu Mỹ" ? "active" : ""}`}
            onClick={() => setActiveTab("Âu Mỹ")}
          >
            Âu Mỹ
          </button>
          <button
            className={`region-tab ${activeTab === "Hàn Quốc" ? "active" : ""}`}
            onClick={() => setActiveTab("Hàn Quốc")}
          >
            Hàn Quốc
          </button>
        </div>

        <div className="ranking-list">
          {rankingData.map((song) => (
            <div className="ranking-item" key={song.id}>
              <div className="ranking-number">{song.id}</div>
              <div className="song-thumbnail">
                <img src={song.image || "/placeholder.svg"} alt={song.title} />
              </div>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
              <div className="song-duration">{song.duration}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section playlist-section">
        <h2 className="sidebar-heading">Danh sách chờ</h2>

        <div className="playlist-subsection">
          <h3 className="subsection-heading">Đang phát</h3>
          <div className="playlist-item currently-playing">
            <div className="song-thumbnail">
              <img src={currentlyPlaying.image || "/placeholder.svg"} alt={currentlyPlaying.title} />
            </div>
            <div className="song-info">
              <div className="song-title">{currentlyPlaying.title}</div>
              <div className="song-artist">{currentlyPlaying.artist}</div>
            </div>
            <div className="song-duration">{currentlyPlaying.duration}</div>
          </div>
        </div>

        <div className="playlist-subsection">
          <h3 className="subsection-heading">Nội dung tiếp theo</h3>
          <div className="playlist-items">
            {upNext.map((song) => (
              <div className="playlist-item" key={song.id}>
                <div className="song-thumbnail">
                  <img src={song.image || "/placeholder.svg"} alt={song.title} />
                </div>
                <div className="song-info">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
                <div className="song-duration">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
