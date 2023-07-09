import React, { useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    const videoElement = videoRef.current;

    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }

    setFullscreen(!isFullscreen);
  };

  return (
    <div className="video-player">
      <video name={props.name} ref={videoRef}>
        <source src={props.source} type="video/mp4" />
      </video>
      <div className="controls">
        <div className="play-volume">
          <button className="play-pause-button" onClick={togglePlay}>
            {isPlaying ? (
              <img src="/icons/pause.svg" alt="pause"width={22} />
            ) : (
              <img src="/icons/play.svg" alt="pause"width={22} />
            )}
          </button>

          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <button className="fullscreen-button" onClick={toggleFullscreen}>
          <img src="/icons/fullscreen.svg" alt="full-Screen"width={22} />
        </button>
      </div>
      <h2 style={{"textAlign":"center","fontSize":"16px","opacity":"0.5"}}>{props.title} </h2>
    </div>
  );
};

export default VideoPlayer;
