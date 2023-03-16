import { useFetchCoursesDataAPI } from '../../hooks/useFetchDataCourse';
import { useState } from 'react';

import CoursesListItem from '../../components/CoursesListItems';
import CoursesListPagination from 'components/CoursesListPagination';
import Loader from 'components/Loader';

export default function CoursesPage() {
  const { items, loading } = useFetchCoursesDataAPI();

  const [currantCoursesPage, setCurrantCoursesPage] = useState(1);
  const [coursesPerPage] = useState(10);

  const lastCoursesIndex = currantCoursesPage * coursesPerPage;
  const firstCoursesIndex = lastCoursesIndex - coursesPerPage;
  const currentCoursesList = items.slice(firstCoursesIndex, lastCoursesIndex);

  function paginete(pageNumber) {
    setCurrantCoursesPage(pageNumber + 1);
  }

  return (
    <div>
      {loading && <Loader />}
      {items && (
        <>
          <CoursesListItem items={currentCoursesList} />
          <CoursesListPagination
            totalCourses={items.length}
            coursesPerPage={coursesPerPage}
            paginete={paginete}
            setCurrantCoursesPage={setCurrantCoursesPage}
            currantCoursesPage={currantCoursesPage}
          />
        </>
      )}
    </div>
  );
}
