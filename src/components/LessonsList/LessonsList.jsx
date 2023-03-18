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
  return (
    <>
      <ListLessonsStyled>
        {lessons.map(lesson => (
          <ItemLessonsStyled key={lesson.id}>
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

            <div>{lesson.link}</div>
          </ItemLessonsStyled>
        ))}
      </ListLessonsStyled>
    </>
  );
}
