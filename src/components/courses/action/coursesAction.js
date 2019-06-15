export const getAllCourses = courses => {
  return {
    type: "GET_ALL_COURSES",
    courses
  };
};
