import { useEffect, useState } from 'react';
import * as coursesDataAPI from '../services/fetchDataCourses';

export const useFetchCoursesDataAPI = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCoursesDataAPI() {
      setLoading(true);
      try {
        const items = await coursesDataAPI.fetchCourseData();
        setItems(items);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCoursesDataAPI();
  }, []);
  return { items, loading };
};
