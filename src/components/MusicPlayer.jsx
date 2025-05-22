import { useState, useRef, useEffect } from "react"
import "../styles/MusicPlayer.css"

export default function MusicPlayer( {currentSong, nameSong}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAudio, setIsAudio] = useState(null)
  const [isNameSong, setNameSong] = useState(null)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)

//   useEffect(() => {
//   if (currentSong) {
//     const audio = new Audio(currentSong);
//     audioRef.current = audio;

//     setIsAudio(currentSong);
//     setNameSong(nameSong);
//     setIsPlaying(true); // tự động phát khi chọn bài mới

//     audio.play();

//     audio.addEventListener("timeupdate", updateProgress);
//     audio.addEventListener("loadedmetadata", () => {
//       setDuration(audio.duration);
//     });

//     return () => {
//       audio.pause();
//       audio.removeEventListener("timeupdate", updateProgress);
//     };
//   }
// }, [currentSong]);

useEffect(() => {
  if (currentSong) {
    // Nếu đang có bài cũ → dừng nó
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(currentSong);
    audioRef.current = audio;

    setIsAudio(currentSong);
    setNameSong(nameSong);  // hoặc bỏ nếu đã truyền sẵn tên từ props
    setIsPlaying(true);

    const handleMetadata = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleMetadata);

    // Phát nhạc và bắt lỗi nếu có
    audio
      .play()
      .catch((err) => console.error("Không thể phát nhạc:", err));

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleMetadata);
    };
  }
}, [currentSong]);


  // useEffect(() => {
  //   // Tạo audio từ link blob
  //   if(isAudio) {
  //   setIsAudio (currentSong);
  //   setNameSong (nameSong);
  //   }

  //   audioRef.current = new Audio(isAudio)

  //   const audio = audioRef.current

  //   audio.addEventListener("timeupdate", updateProgress)
  //   audio.addEventListener("loadedmetadata", () => {
  //     setDuration(audio.duration)
  //   })

  //   return () => {
  //     audio.pause()
  //     audio.removeEventListener("timeupdate", updateProgress)
  //   }
  // }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      const newTime = percent * duration
      setCurrentTime(newTime)
      audioRef.current.currentTime = newTime
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="music-player-footer">
      <div className="music-player-container">
        {/* Song info */}
        <div className="song-info">
          <div className="song-thumbnail">
            <img src="https://static.vecteezy.com/system/resources/previews/002/249/673/original/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg" alt="Song thumbnail" />
          </div>
          <div className="song-details">
            {/* <p className="song-title">{{isNameSong} : "Chưa chọn bài hát"}</p> */}
            <p className="song-title">{isAudio ? isNameSong : "Chưa chọn bài hát"}</p>
          </div>
          <button className={`favorite-button ${isFavorite ? "active" : ""}`} onClick={toggleFavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        {/* Player controls */}
        <div className="player-controls">
          <div className="control-buttons">
            <button className="control-button">{/* Previous (chưa làm) */}</button>
            <button className="play-button" onClick={togglePlay}>
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
            <button className="control-button">{/* Next (chưa làm) */}</button>
          </div>

          {/* Progress bar */}
          <div className="progress-container">
            <span className="time-info">{formatTime(currentTime)}</span>
            <div ref={progressBarRef} className="progress-bar" onClick={handleProgressClick}>
              <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
              <div className="progress-handle" style={{ left: `${(currentTime / duration) * 100}%` }}></div>
            </div>
            <span className="time-info">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="volume-control">
          <button className="volume-button" onClick={toggleMute}>
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23"></line>
                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
          <div className="volume-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}