export default function MusicBox({ title, artist, onClick  }) {
  
    return (
      <div className="music-box" onClick={onClick}>
        <div className="music-option" >
        <div className="music-option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon-svg"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>
        </div>
        <div className="music-icon" />
        <div className="music-info">
          <div className="music-title">{title}</div>
          <div className="music-artist">© {artist}</div>
        </div>
      </div>
    );
  }
  