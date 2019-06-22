import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { deleteCourse } from "../components/courses/action/coursesAction";

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
  // {
  //   Header: "Delete Course",
  //   Cell: props => renderDeleteButton(props)
  // }
];

const renderEditButton = ({ row }) => {
  return (
    <Link to={{ pathname: `/course/${row.courseId}` }}>
      <Button outline color="info">
        Edit Course
      </Button>
    </Link>
  );
};

const renderDeleteButton = ({ row }) => {
  return (
    <Button
      outline
      color="danger"
      onClick={e => {
        console.log("Button clicked");
        deleteCourse(row.courseId);
      }}
    >
      Delete Course
    </Button>
  );
};
