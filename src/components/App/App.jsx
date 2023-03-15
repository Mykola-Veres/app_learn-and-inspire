import { Navigate, Route, Routes } from 'react-router-dom';
import CoursesPage from '../../pages/CoursesPage';
import LessonPage from '../../pages/LessonPage';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader';
import { Suspense } from 'react';
import Container from 'components/Conteiner/Conteiner';
import { GlobalStyle } from 'common/GlobalStyle';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/preview-courses/:courseId" element={<LessonPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
