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

export const deleteCourse = courseId => dispatch => {
  console.log("Delete course");
  fetch(`/courses/delete/${courseId}`, {
    method: "delete"
  })
    .then(() => {
      dispatch(deleteSuccessCourseAction(courseId));
    })
    .catch(err => console.log(err));
};

const deleteSuccessCourseAction = courseId => {
  return {
    type: "DELETE_COURSE_SUCCESS",
    courseId
  };
};
