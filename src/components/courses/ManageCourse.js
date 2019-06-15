import React from "react";

const ManageCourse = ({ courseId }) => {
  console.log(courseId);
  return <div>{courseId ? courseId : "No Course found"}</div>;
};

export default ManageCourse;
