import React from "react";
import { Link } from "react-router-dom";
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

const renderEditButton = ({ row }) => {
  return (
    <Link to={{ pathname: `/course/${row.courseId}` }}>
      <Button color="info">Edit Course</Button>
    </Link>
  );
};
