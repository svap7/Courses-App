import React from "react";
import { Button } from "reactstrap";
import * as coursesApi from "../api/CoursesApi";
import { withRouter } from "react-router-dom";

export const columndef = [
  {
    Header: "Course Id",
    accessor: "courseId",
    show: false
  },
  {
    Header: "Course Title",
    accessor: "title"
  },
  {
    id: "authorName",
    Header: "Author Name",
    accessor: auth => auth.author.name
  },
  {
    Header: "Course Duration",
    accessor: "duration"
  },
  {
    Header: "Edit Course",
    Cell: props => renderEditButton(props)
  }
];

const editCourse = courseId => {
  console.log(courseId);
  coursesApi.getCourse(courseId);
};

// const renderEditButton = props =>
//   withRouter(({ history }) => {
//     return (
//       <Button
//         color="info"
//         onClick={e => {
//           history.push(
//             "/courses/getCourse/${courseId}".replace(
//               "${courseId}",
//               props.row.courseId
//             )
//           );
//         }}
//       >
//         Edit Course
//       </Button>
//     );
//   });

const renderEditButton = props => {
  return (
    <Button color="info" onClick={e => editCourse(props.row.courseId)}>
      Edit Course
    </Button>
  );
};
