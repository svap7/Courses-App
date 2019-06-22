import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Store } from "../../store";
import { addCourseSuccess } from "./action/coursesAction";
import { Link } from "react-router-dom";
import { saveCourse } from "../../api/CoursesApi";

const AddCourse = () => {
  const { state, dispatch } = useContext(Store);
  const [title, setTitle] = useState("");
  const [authId, setAuthId] = useState(1);
  const [authName, setAuthName] = useState("");
  const [duration, setDuration] = useState("");

  const props = {
    authors: state.authors
  };

  const renderAuthors = authors => {
    return authors.map((author, index) => {
      return (
        <option key={index} value={author.authorId}>
          {author.name}
        </option>
      );
    });
  };

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const getAuthorsName = id => {
    return props.authors.find(auth => {
      return auth.authorId.toString() === id;
    }).name;
  };

  const updateAuthorId = e => {
    setAuthId(parseInt(e.target.value, 10));
    setAuthName(getAuthorsName(e.target.value));
  };

  const updateDuration = e => {
    setDuration(e.target.value);
  };

  const addCourse = () => {
    const _course = {
      ...{ author: { authorId: authId, name: authName } },
      duration,
      title
    };
    saveCourse(_course).then(() => {
      dispatch(addCourseSuccess(_course));
    });
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            placeholder="Course Title"
            id="title"
            onChange={updateTitle}
            value={title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Course Author</Label>
          <Input
            type="select"
            placeholder="Course Author"
            id="author"
            value={authId}
            onChange={updateAuthorId}
          >
            {renderAuthors(props.authors)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="duration">Course Duration</Label>
          <Input
            type="text"
            placeholder="Course Title"
            id="duration"
            value={duration}
            onChange={updateDuration}
          />
        </FormGroup>
      </Form>
      <Link to="/courses">
        <Button color="primary" onClick={addCourse}>
          Add Course
        </Button>
      </Link>
    </>
  );
};

export default AddCourse;
