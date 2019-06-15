export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_COURSES": {
      return [...state, ...action.courses];
    }
    default: {
      return state;
    }
  }
}
