import { Arrow } from 'assets/Arrow';
import LessonDetails from 'components/LessonDetails';
import Loader from 'components/Loader';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchLessonsDataAPI } from '../../hooks/useFetchDataLessons';
import {
  ReturnToLessonBoardConteinerStyled,
  ReturnToLessonBoardstyled,
  ReturnToLessonBoardTextStyled,
} from './LessonPage.staled';

export default function LessonPage() {
  const location = useLocation();
  const { courseId } = useParams();
  const { items, loading } = useFetchLessonsDataAPI(courseId);

  return (
    <>
      {loading && <Loader />}
      {/* {items && console.log('items', items)} */}
      <ReturnToLessonBoardConteinerStyled>
        <ReturnToLessonBoardstyled
          to={location?.state?.from ?? '/'}
          state={{ from: location }}
        >
          <Arrow />
          <ReturnToLessonBoardTextStyled>
            RETURN TO COURSES BOARD
          </ReturnToLessonBoardTextStyled>
        </ReturnToLessonBoardstyled>
      </ReturnToLessonBoardConteinerStyled>
      {items && <LessonDetails item={items} />}
    </>
  );
}
