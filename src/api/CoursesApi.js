export const getAllCourses = () => {
  return fetch("/courses/getAllCourses").then(response => response.json());
};
