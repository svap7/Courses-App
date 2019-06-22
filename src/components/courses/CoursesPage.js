import React, { useEffect, useContext } from "react";
import { getAllCourses, getAllAuthors } from "../../api/CoursesApi";
import * as coursesAction from "./action/coursesAction";
import { Store } from "../../store";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { columndef } from "../../columnDef/courses-col-def";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import * as authorsAction from "./action/authorsAction";

const CoursesPage = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    if (state.courses.length === 0) {
      async function getCourses() {
        const result = await getAllCourses();
        dispatch(coursesAction.getAllCourses(result));
      }
      getCourses();
    }
  }, [dispatch, state.courses]);

  useEffect(() => {
    if (state.authors.length === 0) {
      async function getAuthors() {
        const result = await getAllAuthors();
        dispatch(authorsAction.getAllAuthors(result));
      }
      getAuthors();
    }
  }, [dispatch, state.authors]);

  const props = {
    courses: state.courses,
    state: { state, dispatch }
  };
  return (
    <div>
      <>
        <ReactTable
          columns={columndef}
          data={props.courses}
          showPagination={true}
          defaultPageSize={10}
          showPageSizeOptions={false}
          loading={false}
        />
        <Link to="/add">
          <Button color="primary" style={{ marginTop: 10 }}>
            Add Course
          </Button>
        </Link>
      </>
    </div>
  );
};

export default CoursesPage;
