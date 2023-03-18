import ReactPlayer from 'react-player';
import { ModalStyle, ReactPlayerStyled } from './CoursesVideoStyled';
import { createPortal } from 'react-dom';

function HoverVideo({ showVideo, courseVideoPreview }) {
  return createPortal(
    <>
      {showVideo && courseVideoPreview && (
        <ReactPlayerStyled>
          <ModalStyle>
            {/* <ReactPlayer
              url={courseVideoPreview.link}
              playing={true}
              volume={0}
            /> */}
          </ModalStyle>
        </ReactPlayerStyled>
      )}
    </>,
    document.querySelector('#modal-root')
  );
}

export default HoverVideo;
