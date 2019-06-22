export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_COURSES": {
      return [...state, ...action.courses];
    }
    case "SAVE_COURSE_SUCCESS": {
      const _courseIndex = state.findIndex(course => {
        return course.courseId === action.course.courseId;
      });
      state.splice(_courseIndex, 1);
      return [...state, action.course];
    }
    case "ADD_COURSE_SUCCESS": {
      return [...state, action.course];
    }
    default: {
      return state;
    }
  }
}
