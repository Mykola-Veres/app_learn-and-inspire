import LessonList from 'components/LessonsList/LessonsList';
import ReactPlayer from 'react-player';
import {
  ConteinerLessonsStyled,
  CourseTextStyled,
  DescriptionConteinerStyled,
  ListSkillsStyled,
  PlayerStyled,
  RatingsConreinerStyled,
  TitleCourseStyled,
} from './LessonDetailsStyled';

export default function LessonDetails({
  item: { meta, title, lessons, description, rating, previewImageLink },
}) {
  return (
    <>
      {meta && (
        <ConteinerLessonsStyled>
          <div>
            <img src={previewImageLink + `/cover.webp`} alt={title} />
          </div>
          <div>
            <TitleCourseStyled>{title}</TitleCourseStyled>
          </div>

          <RatingsConreinerStyled>Rating: {rating}</RatingsConreinerStyled>

          <div>
            <PlayerStyled>
              {/* <ReactPlayer url={meta.courseVideoPreview.link} playing={true} /> */}
            </PlayerStyled>
          </div>

          <DescriptionConteinerStyled>
            <CourseTextStyled>{description}</CourseTextStyled>
          </DescriptionConteinerStyled>

          <ListSkillsStyled>
            <p>Skills:</p>
            {meta.skills
              ? meta.skills.map((skill, index) => <li key={index}>{skill}</li>)
              : 'no Skills'}
          </ListSkillsStyled>

          <LessonList lessons={lessons}></LessonList>
        </ConteinerLessonsStyled>
      )}
    </>
  );
}
