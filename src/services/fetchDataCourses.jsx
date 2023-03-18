import axios from 'axios';

axios.defaults.baseURL = `https://api.wisey.app/api/v1`;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZGY4M2RjMS0xY2VlLTQ2YTItOWU1MC1kOTAzNWU3ZTk0NjMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjEyNDMsImV4cCI6MTY3OTcyMTI0M30.kuzyZWbzLKIuYUqGZeUdxx42A-zwdaneDvZ3I6ddqiU';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export function fetchCourseData() {
  const fetchCoursesData = axios
    .get(`/core/preview-courses`)
    .then(response => response.data.courses);
  return fetchCoursesData;
}

export function fetchLessonsData(courseId) {
  const fetchCourseData = axios
    .get(`/core/preview-courses/${courseId}`)
    .then(response => response.data);
  return fetchCourseData;
}
