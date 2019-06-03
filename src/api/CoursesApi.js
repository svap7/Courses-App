export const getAllCourses = () => {
  return fetch("/courses/getAllCourses").then(response => response.json()).catch(err => console.log(err));
};
