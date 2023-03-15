import { useFetchCoursesDataAPI } from '../../hooks/useFetchDataCourse';

import Loader from 'components/Loader';

export default function JobList() {
  const { items, loading } = useFetchCoursesDataAPI();

  return (
    <div>
      {loading && <Loader />}
      {items && (
        <div>{items && items.map(item => <div>{item.title}</div>)}</div>
      )}
    </div>
  );
}
