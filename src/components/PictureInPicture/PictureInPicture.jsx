import { useState, useRef } from 'react';

const PictureInPicture = () => {
  const videoRef = useRef(null);
  const [isPipActive, setIsPipActive] = useState(false);

  const togglePip = () => {
    if (isPipActive) {
      document.exitPictureInPicture().then(() => {
        setIsPipActive(false);
      });
    } else {
      videoRef.current.requestPictureInPicture().then(() => {
        setIsPipActive(true);
      });
    }
  };

  return (
    <div>
      <video ref={videoRef} src="video.mp4" controls />
      <button onClick={togglePip}>
        {isPipActive ? 'Exit' : 'Enter'} Picture-in-Picture
      </button>
    </div>
  );
};

export default PictureInPicture;
