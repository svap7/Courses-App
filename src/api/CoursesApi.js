export const getAllCourses = () => {
  fetch("/courses/getAllCourses")
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
};
