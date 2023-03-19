import ReactPlayer from 'react-player';
import { PlayerStyle } from './ReactPlayerStyled';
import { useState, useEffect } from 'react';

const ReactPlayerCourse = ({ link, playing, volume = 1 }) => {
  const [playedSeconds, setPlayedSeconds] = useState(0);

  useEffect(() => {
    const savedTime = localStorage.getItem('playedSeconds');
    if (savedTime) {
      setPlayedSeconds(parseFloat(savedTime));
    }
  }, []);

  const handleProgress = ({ playedSeconds }) => {
    setPlayedSeconds(playedSeconds);
    localStorage.setItem('playedSeconds', playedSeconds.toString());
  };

  return (
    <>
      <PlayerStyle>
        <ReactPlayer
          url={link}
          playing={playing}
          width="100%"
          height="100%"
          volume={volume}
          controls
          onProgress={handleProgress}
          progressInterval={1000}
          played={playedSeconds}
        />
      </PlayerStyle>
    </>
  );
};

export default ReactPlayerCourse;
