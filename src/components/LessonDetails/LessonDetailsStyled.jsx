import styled from 'styled-components';

export const ConteinerLessonsStyled = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1144px) {
    width: 1140px;
  }
`;

export const TitleCourseStyled = styled.h2`
  width: 400px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.2625px;
  color: #070c18;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  @media (min-width: 1144px) {
    width: 200px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.225px;
  }
`;

export const RatingsConreinerStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #111113;
  margin-bottom: 8px;
  @media (min-width: 1144px) {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
  }
`;

export const ListSkillsStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.3px;
  color: #001855;
  margin-left: 15px;
  margin-top: 10px;
  @media (min-width: 1144px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const DescriptionConteinerStyled = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  @media (min-width: 1144px) {
    justify-content: center;
  }
`;

export const CourseTextStyled = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.23619px;
  color: #040e2b;
  @media (min-width: 1144px) {
    font-size: 20px;
    line-height: 27px;
    text-align: center;
  }
`;

export const ConteinerLessonsDetailsStyled = styled.div`
  @media (min-width: 1144px) {
    display: flex;
  }
`;

export const ImageCoursesStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const ImageCoursesConteinerStyled = styled.div`
  width: 400px;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 20px;
  object-fit: contain;
  @media (min-width: 1144px) {
    width: 500px;
    height: 180px;
    margin-top: 5px;
  }
`;

export const ConteinerLessonsTitleStyled = styled.div`
  @media (min-width: 1144px) {
    flex-direction: column;
  }
`;

export const ReactPlayerCourseStyled = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 8px;
  border-color: #413d3d;
  border-width: 1px;
`;
