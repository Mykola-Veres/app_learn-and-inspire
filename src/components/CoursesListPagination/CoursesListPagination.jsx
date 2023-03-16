import { ArrowLeft } from 'assets/ArrowLeft';
import { ArrowRight } from 'assets/ArrowRight';
import {
  LeftButtonStyled,
  PaginationConteinerStyled,
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationListStyled,
  RightButtonStyled,
} from './CoursesListPagination.styled';

export default function CoursesListPagination({
  totalCourses,
  coursesPerPage,
  paginete,
  setCurrantCoursesPage,
  currantCoursesPage,
}) {
  const numberPages = [];

  for (let index = 0; index < totalCourses / coursesPerPage; index++) {
    numberPages.push(index);
  }

  function nextPage() {
    if (numberPages.length === currantCoursesPage) {
      return;
    }
    setCurrantCoursesPage(prev => prev + 1);
  }

  function prevPage() {
    if (currantCoursesPage === 1) {
      return;
    }
    setCurrantCoursesPage(prev => prev - 1);
  }

  return (
    <PaginationConteinerStyled>
      <LeftButtonStyled onClick={prevPage} disabled={false}>
        <ArrowLeft />
      </LeftButtonStyled>
      <PaginationListStyled>
        {totalCourses &&
          numberPages.map(number => (
            <PaginationItemStyled key={number}>
              <PaginationLinkStyled
                to={`/`}
                onClick={() => {
                  paginete(number);
                }}
              >
                {number + 1}
              </PaginationLinkStyled>
            </PaginationItemStyled>
          ))}
      </PaginationListStyled>

      <RightButtonStyled onClick={nextPage} disabled={false}>
        <ArrowRight />
      </RightButtonStyled>
    </PaginationConteinerStyled>
  );
}
