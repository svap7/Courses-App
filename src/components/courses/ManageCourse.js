import React from "react";
import AddCourse from "./AddCourse";

const ManageCourse = ({ match }) => {
  return <div>{match.params.id ? match.params.id : <AddCourse />}</div>;
};

export default ManageCourse;
