import React, { useContext, useState } from "react";
import { Store } from "../../store";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { saveCourse } from "../../api/CoursesApi";
import { Link } from "react-router-dom";
import { saveCourseSuccess } from "./action/coursesAction";

const ManageCourse = ({ match }) => {
  const { state, dispatch } = useContext(Store);
  const _course = state.courses.find(course => {
    return course.courseId.toString() === match.params.id;
  });

  const [title, setTitle] = useState(_course.title);
  const [authorId, setAuthorId] = useState(_course.author.authorId);
  const [authorName, setAuthorName] = useState(_course.author.name);
  const [duration, setDuration] = useState(_course.duration);
  const [course] = useState(_course);
  const props = {
    authors: state.authors,
    courses: state.courses,
    state: { state, dispatch }
  };

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateAuthorId = e => {
    setAuthorId(parseInt(e.target.value, 10));
    setAuthorName(getAuthorsName(e.target.value));
  };

  const getAuthorsName = id => {
    return props.authors.find(auth => {
      return auth.authorId.toString() === id;
    }).name;
  };

  const updateDuration = e => {
    setDuration(e.target.value);
  };

  const updateCourse = () => {
    const _course = {
      ...course,
      ...{ author: { authorId, name: authorName } },
      duration,
      title
    };
    saveCourse(_course).then(() => {
      dispatch(saveCourseSuccess(_course));
    });
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

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type="text" value={title} onChange={updateTitle} id="title" />
        </FormGroup>
        <FormGroup>
          <Label for="courseAuthor">Course Author</Label>
          <Input
            type="select"
            placeholder="Course Author"
            id="courseAuthor"
            value={authorId}
            onChange={updateAuthorId}
          >
            {renderAuthors(props.authors)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="duration">Course Duration</Label>
          <Input
            type="text"
            value={duration}
            onChange={updateDuration}
            id="duration"
          />
        </FormGroup>
      </Form>
      <Link to="/courses">
        <Button type="submit" color="primary" onClick={updateCourse}>
          Update Course
        </Button>
      </Link>
    </>
  );
};

export default ManageCourse;
