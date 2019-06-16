import React, { useEffect, useContext } from "react";
import { getAllCourses } from "../../api/CoursesApi";
import * as coursesAction from "./action/coursesAction";
import { Store } from "../../store";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { columndef } from "../../columnDef/courses-col-def";

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
  }, [dispatch, state]);

  const props = {
    courses: state.courses,
    state: { state, dispatch }
  };
  return (
    <div>
      {props.courses ? (
        <ReactTable
          columns={columndef}
          data={props.courses}
          showPagination={true}
          defaultPageSize={5}
          showPageSizeOptions={false}
          loading={false}
        />
      ) : null}
    </div>
  );
};

export default CoursesPage;
