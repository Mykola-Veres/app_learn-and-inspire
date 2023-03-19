import { ModalStyle, ReactPlayerStyled } from './CoursesVideoStyled';
import { createPortal } from 'react-dom';
import ReactPlayerCourse from 'ReactPlayer/ReactPlayer';

function HoverVideo({ showVideo, courseVideoPreview }) {
  return createPortal(
    <>
      {showVideo && courseVideoPreview && (
        <ReactPlayerStyled>
          <ModalStyle>
            <ReactPlayerCourse
              link={courseVideoPreview.link}
              playing={true}
              volume={0}
            />
          </ModalStyle>
        </ReactPlayerStyled>
      )}
    </>,
    document.querySelector('#modal-root')
  );
}

export default HoverVideo;
