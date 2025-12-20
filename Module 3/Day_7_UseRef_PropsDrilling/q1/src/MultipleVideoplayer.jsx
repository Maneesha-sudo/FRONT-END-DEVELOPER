import { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function MultipleVideoPlayer() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();
  const forward = () => (videoRef.current.currentTime += 5);
  const rewind = () => (videoRef.current.currentTime -= 5);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % videos.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div>
      <h3>Multiple Video Player</h3>

      <video
        ref={videoRef}
        width="300"
        height="200"
        src={videos[currentIndex]}
        controls
      />

      <br />

      <button onClick={play}>▶️ Play</button>
      <button onClick={pause}>⏸ Pause</button>
      <button onClick={forward}>⏩ Forward</button>
      <button onClick={rewind}>⏪ Rewind</button>

      <br />

      <button onClick={prev}>⏮ Previous</button>
      <button onClick={next}>⏭ Next</button>
    </div>
  );
}

export default MultipleVideoPlayer;
