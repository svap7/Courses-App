import { combineReducers } from "redux";
import courses from "../components/courses/reducer/coursesReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
