export const getAllCourses = courses => {
  return {
    type: "GET_ALL_COURSES",
    courses
  };
};

export const saveCourseSuccess = course => {
  return {
    type: "SAVE_COURSE_SUCCESS",
    course
  };
};

export const addCourseSuccess = course => {
  return {
    type: "ADD_COURSE_SUCCESS",
    course
  };
};
