import { useState } from 'react';
import ReactPlayerCourse from 'ReactPlayer/ReactPlayer';
import {
  ImageLessonConteinerStyled,
  ImageLessonStyled,
  ItemLessonsStyled,
  LessonConteinerTextStyled,
  LessonTextStyled,
  ListLessonsStyled,
  TitleLessonStyled,
} from './LessonListStyled';

export default function LessonList({ lessons }) {
  const [freeLesson, setFreeLesson] = useState('unlocked');
  const [lockedLesson, setLockedLesson] = useState(true);

  const handleLockLessons = () => {
    if (freeLesson === 'locked') {
      setLockedLesson(false);
    } else {
      setLockedLesson(true);
    }
  };

  return (
    <>
      <ListLessonsStyled>
        {lessons.map(lesson => (
          <ItemLessonsStyled
            key={lesson.id}
            onClick={() => {
              setFreeLesson(lesson.status);
              handleLockLessons();
            }}
          >
            <div>
              <LessonConteinerTextStyled>
                <LessonTextStyled>Lesson: {lesson.order}</LessonTextStyled>
                <LessonTextStyled>{lesson.status}</LessonTextStyled>
              </LessonConteinerTextStyled>
              <TitleLessonStyled>{lesson.title}</TitleLessonStyled>

              <ImageLessonConteinerStyled>
                <ImageLessonStyled
                  src={lesson.previewImageLink + `/lesson-${lesson.order}.webp`}
                  alt={lesson.title}
                />
              </ImageLessonConteinerStyled>
            </div>
            {lockedLesson ? (
              <ReactPlayerCourse link={lesson.link} status={lesson.status} />
            ) : (
              'Sorry, the lesson is closed'
            )}
          </ItemLessonsStyled>
        ))}
      </ListLessonsStyled>
    </>
  );
}
