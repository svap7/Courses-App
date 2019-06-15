import React from "react";
import { Button } from "reactstrap";

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
};

const renderEditButton = props => {
  console.log(props);
  return (
    <Button
      color="info"
      onClick={e => {
        editCourse(props.row.courseId);
      }}
    >
      Edit Course
    </Button>
  );
};
