import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../store";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { getAllAuthors } from "../../api/CoursesApi";
import * as authorsAction from "./action/authorsAction";

const ManageCourse = ({ match }) => {
  const { state, dispatch } = useContext(Store);
  const course = state.courses.find(course => {
    return course.courseId.toString() === match.params.id;
  });

  useEffect(() => {
    console.log(state);
    if (state.authors.length === 0) {
      async function getAuthors() {
        const result = await getAllAuthors();
        dispatch(authorsAction.getAllAuthors(result));
      }
      getAuthors();
    }
  }, [dispatch, state]);

  const [title, setTitle] = useState(course.title);
  const updateTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="manageCourseTitle">Course Title</Label>
        <Input type="text" value={title} onChange={updateTitle} />
      </FormGroup>
    </Form>
  );
};

export default ManageCourse;
