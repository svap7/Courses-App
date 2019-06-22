import { combineReducers } from "redux";
import courses from "../components/courses/reducer/coursesReducer";
import authors from "../components/courses/reducer/authorsReducer";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
