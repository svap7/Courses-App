export const getAllCourses = () => {
  return fetch("/courses/getAllCourses")
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getCourse = courseId => {
  return fetch(
    "/courses/getCourse/${courseId}".replace("${courseId}", courseId.toString())
  )
    .then(response => console.log(response.json()))
    .catch(err => {
      throw err;
    });
};

export const getAllAuthors = () => {
  return fetch("/authors/getAll")
    .then(response => response.json())
    .catch(err => {
      throw err;
    });
};
