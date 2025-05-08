export default function MusicPlayer2() {
    return (
      <div className="music-player">
        <div className="player-left">
          <div className="song-thumbnail"></div>
          <div className="song-info">
            <div className="song-title">Country song</div>
            <div className="song-artist">Artist</div>
          </div>
          <button className="like-button"></button>
        </div>
  
        <div className="player-center">
          <div className="player-controls">
            <button className="control-button shuffle"></button>
            <button className="control-button previous"></button>
            <button className="control-button play"></button>
            <button className="control-button next"></button>
            <button className="control-button repeat"></button>
          </div>
          <div className="progress-container">
            <span className="current-time">2:04</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="total-time">5:15</span>
          </div>
        </div>
  
        <div className="player-right">
          <button className="volume-button"></button>
          <div className="volume-slider">
            <div className="volume-fill"></div>
          </div>
        </div>
      </div>
    )
  }
  