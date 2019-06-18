import React, { useContext, useState } from "react";
import { Store } from "../../store";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { saveCourse } from "../../api/CoursesApi";

const ManageCourse = ({ match }) => {
  const { state, dispatch } = useContext(Store);
  const _course = state.courses.find(course => {
    return course.courseId.toString() === match.params.id;
  });

  const [course, setCourse] = useState(_course);

  const updateTitle = e => {
    console.log("event title " + e.target.value);
    const updatedCourse = Object.assign({}, course, { title: e.target.value });
    setCourse(updatedCourse);
  };

  const updateAuthor = e => {
    setCourse({
      ...course,
      author: { authorId: parseInt(e.target.value, 10) }
    });
  };

  const updateCourse = e => {
    e.preventDefault();
    saveCourse(course);
  };

  const props = { authors: state.authors };

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
          <Input
            type="text"
            value={course.title}
            onChange={updateTitle}
            id="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseAuthor">Course Author</Label>
          <Input
            type="select"
            placeholder="Course Author"
            id="courseAuthor"
            value={course.author.name}
            onChange={updateAuthor}
          >
            {renderAuthors(props.authors)}
          </Input>
        </FormGroup>
      </Form>
      <Button type="submit" onClick={updateCourse} color="primary">
        Update Course
      </Button>
    </>
  );
};

export default ManageCourse;
