import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListCoursesStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 47px;
  padding-left: 9px;
  padding-right: 9px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

export const TitleCoursesStyled = styled.h2`
  width: 170px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  @media (min-width: 1144px) {
    width: 500px;
    margin-bottom: 0px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.625px;
  }
`;

export const ItemCoursesStyled = styled(NavLink)`
  position: relative;
  width: 400px;
  height: 220px;
  display: flex;
  background: #eff0f5;
  border-radius: 8px;
  transform: scale(1);
  transition: transform 100ms linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (min-width: 1144px) {
    width: 1140px;
    height: 200px;
  }
`;

export const ConteinerStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-right: 5px;
  @media (min-width: 1144px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const CoursesConteinerStyled = styled.div`
  display: flex;
`;

export const ImageCoursesStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const ImageCoursesConteinerStyled = styled.div`
  width: 180px;
  height: 80px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  object-fit: contain;
  @media (min-width: 1144px) {
    width: 450px;
    height: 150px;
    margin-top: 5px;
  }
`;

export const CoursesTextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  @media (min-width: 1144px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.23619px;
  }
`;

export const CoursesSkillsStyled = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12px;
  color: #878d9d;
  margin-left: 5px;
  @media (min-width: 1144px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.2px;
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
  }
`;

export const CoursesDateConteinerStyled = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  @media (min-width: 1144px) {
    margin-left: 0px;
  }
`;
export const CoursesDateStyled = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.206667px;
  color: #878d9d;
  @media (min-width: 1144px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.23619px;
    color: #66686c;
  }
`;

export const TextConteinerStyled = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  @media (min-width: 1144px) {
    justify-content: center;
    width: 180px;
    text-align: center;
  }
`;

export const IconConteinerStyled = styled.div`
  margin-top: 10px;
  display: flex;
  @media (min-width: 1144px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
  }
`;

export const RatingsConreinerStyled = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: #7c7e84;
  @media (min-width: 1144px) {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.22px;
    color: #505050;
    margin-bottom: 20px;
  }
`;

export const ConteinerlessonsStyled = styled.div`
  margin-top: 8px;
  @media (min-width: 1144px) {
  }
`;
