import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  // ⏩ Forward 5 seconds
  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  // ⏪ Rewind 5 seconds
  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div>
        <h3>Single Video Player</h3>
      <video
        ref={videoRef}
        width="500"
        // height="100"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
      />

      <br />


      <button onClick={handlePlay}>▶️ Play</button>
      <button onClick={handlePause}>⏸ Pause</button>
      <button onClick={handleForward}>⏩ Forward</button>
      <button onClick={handleRewind}>⏪ Rewind</button>
      <br />
    </div>
    
  );
}

export default VideoPlayer;
