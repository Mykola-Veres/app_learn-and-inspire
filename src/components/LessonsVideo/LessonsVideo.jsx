import {} from './LessonsVideoStyled';
// import { createPortal } from 'react-dom';
import { useState, useRef } from 'react';

// function LessonsVideo({ showVideo, courseVideoPreview }) {
//   return createPortal(
//     <>
//       {showVideo && courseVideoPreview && (

const Player = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  console.log('item', item);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };
  return (
    <>
      {item && (
        <div>
          <video
            onTimeUpdate={handleProgress}
            ref={videoRef}
            width="100%"
            height="100%"
            controls
          >
            <source
              // src={item.meta.courseVideoPreview.link}
              src="https://wisey.app/videos/goal-setting-101-become-productive-not-busy/preview/AppleHLS1/preview.m3u8"
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/m3u8"
            />
          </video>
          <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <progress value={progress} max="100" />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
//       )}
//     </>,
//     document.querySelector('#modal-root')
//   );
// }

// export default LessonsVideo;
