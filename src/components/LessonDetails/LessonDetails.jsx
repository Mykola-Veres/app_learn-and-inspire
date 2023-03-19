import LessonList from 'components/LessonsList/LessonsList';
import ReactPlayerCourse from 'ReactPlayer/ReactPlayer';

import {
  ConteinerLessonsDetailsStyled,
  ConteinerLessonsStyled,
  ConteinerLessonsTitleStyled,
  CourseTextStyled,
  DescriptionConteinerStyled,
  ImageCoursesConteinerStyled,
  ImageCoursesStyled,
  ListSkillsStyled,
  RatingsConreinerStyled,
  ReactPlayerCourseStyled,
  TitleCourseStyled,
} from './LessonDetailsStyled';

export default function LessonDetails({
  item: { meta, title, lessons, description, rating, previewImageLink },
}) {
  return (
    <>
      {meta && (
        <ConteinerLessonsStyled>
          <ConteinerLessonsDetailsStyled>
            <ConteinerLessonsTitleStyled>
              <TitleCourseStyled>{title}</TitleCourseStyled>
              <ImageCoursesConteinerStyled>
                <ImageCoursesStyled
                  src={previewImageLink + `/cover.webp`}
                  alt={title}
                />
              </ImageCoursesConteinerStyled>
            </ConteinerLessonsTitleStyled>

            <ConteinerLessonsTitleStyled>
              <RatingsConreinerStyled>Rating: {rating}</RatingsConreinerStyled>

              <ReactPlayerCourseStyled>
                <ReactPlayerCourse
                  url={meta.courseVideoPreview.link}
                  playing={true}
                  volume={0.1}
                />
              </ReactPlayerCourseStyled>

              <DescriptionConteinerStyled>
                <CourseTextStyled>{description}</CourseTextStyled>
              </DescriptionConteinerStyled>

              <ListSkillsStyled>
                <p>Skills:</p>
                {meta.skills
                  ? meta.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  : 'no Skills'}
              </ListSkillsStyled>
            </ConteinerLessonsTitleStyled>
          </ConteinerLessonsDetailsStyled>

          <LessonList lessons={lessons}></LessonList>
        </ConteinerLessonsStyled>
      )}
    </>
  );
}
