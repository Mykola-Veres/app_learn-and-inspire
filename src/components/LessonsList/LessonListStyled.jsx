import styled from 'styled-components';

export const ListLessonsStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
`;

export const ItemLessonsStyled = styled.li`
  position: relative;
  height: 200px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  background: #dde2ff;
  border-radius: 12px;
  transform: scale(1);
  transition: transform 100ms linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(72, 62, 62, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media (min-width: 1144px) {
    width: 1140px;
    height: 200px;
  }
`;

export const ImageLessonConteinerStyled = styled.div`
  width: 180px;
  height: 80px;
  margin-right: 10px;
  object-fit: contain;
  @media (min-width: 1144px) {
    margin-left: 100px;
    width: 300px;
    height: 120px;
    margin-top: 5px;
  }
`;

export const ImageLessonStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const TitleLessonStyled = styled.h3`
  width: 180px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.12px;
  color: #070c18;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 1144px) {
    width: 500px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const LessonTextStyled = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.23619px;
  color: #3f424e;
  :not(:last-child) {
    margin-right: 35px;
  }
  @media (min-width: 1144px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const LessonConteinerTextStyled = styled.div`
  display: flex;
  margin-top: 10px;
  @media (min-width: 1144px) {
  }
`;
