import HoverVideo from 'components/CoursesVideo/CoursesVideo';
import { useState } from 'react';
import { getNumberOfDays } from '../../utils/countDay';
import {
  ConteinerStyled,
  IconConteinerStyled,
  ImageCoursesConteinerStyled,
  ImageCoursesStyled,
  ItemCoursesStyled,
  CoursesDateConteinerStyled,
  CoursesDateStyled,
  CoursesTextStyled,
  ListCoursesStyled,
  RatingsConreinerStyled,
  TextConteinerStyled,
  TitleCoursesStyled,
  CoursesSkillsStyled,
  ConteinerlessonsStyled,
} from './CoursesListItem.styled';

export default function CoursesListItem({ items }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <ListCoursesStyled>
      {items &&
        items.map(
          ({
            id,
            meta,
            description,
            launchDate,
            title,
            previewImageLink,
            lessonsCount,
            rating,
          }) => (
            <ItemCoursesStyled to={`/preview-courses/${id}`} key={id}>
              <div
                onMouseEnter={() => setShowVideo(true)}
                onMouseLeave={() => setShowVideo(false)}
              >
                <HoverVideo
                  showVideo={showVideo}
                  courseVideoPreview={meta.courseVideoPreview}
                />
                <TitleCoursesStyled>{title}</TitleCoursesStyled>
                <ImageCoursesConteinerStyled>
                  {(
                    <ImageCoursesStyled
                      src={previewImageLink + '/cover.webp'}
                      alt={title}
                    />
                  ) || <ImageCoursesStyled src="{noImage}" alt="no pictures" />}
                </ImageCoursesConteinerStyled>
              </div>

              <ConteinerStyled>
                <IconConteinerStyled>
                  <RatingsConreinerStyled>
                    <p>Rating: {rating}</p>
                  </RatingsConreinerStyled>
                  <CoursesDateConteinerStyled>
                    <CoursesDateStyled>{`Launch: ${getNumberOfDays(
                      launchDate,
                      Date.now()
                    )} days`}</CoursesDateStyled>
                  </CoursesDateConteinerStyled>
                </IconConteinerStyled>

                <TextConteinerStyled>
                  <CoursesTextStyled>{description}</CoursesTextStyled>
                </TextConteinerStyled>

                <CoursesSkillsStyled>
                  <p>Skills:</p>
                  <ul>
                    {meta.skills
                      ? meta.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))
                      : 'no Skills'}
                  </ul>
                </CoursesSkillsStyled>

                <ConteinerlessonsStyled>
                  <CoursesTextStyled>lessons: {lessonsCount}</CoursesTextStyled>
                </ConteinerlessonsStyled>
              </ConteinerStyled>
            </ItemCoursesStyled>
          )
        )}
    </ListCoursesStyled>
  );
}
