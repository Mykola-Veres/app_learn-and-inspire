import { useEffect, useState } from 'react';
import * as coursesDataAPI from '../services/fetchDataCourses';

export const useFetchLessonsDataAPI = courseId => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLessonsDataAPI() {
      setLoading(true);
      try {
        const items = await coursesDataAPI.fetchLessonsData(courseId);
        setItems(items);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }
    fetchLessonsDataAPI();
  }, [courseId]);
  return { items, loading };
};
