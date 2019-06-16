import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ManageCourse = ({ courseId }) => {
  const [showCourseForm, setShowCourseForm] = useState(false);

  const renderAddCourse = () => {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="courseTitle">Course Title</Label>
            <Input type="text" placeholder="Course Title" id="courseTitle" />
          </FormGroup>
          <FormGroup>
            <Label for="courseAuthor">Course Author</Label>
            <Input type="select" placeholder="Course Author" id="courseAuthor">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Form>
        <Button
          color="primary"
          onClick={() => setShowCourseForm(!showCourseForm)}
          disabled={showCourseForm}
        >
          Add Course
        </Button>
      </>
    );
  };

  return (
    <div>{courseId && courseId !== ":id" ? courseId : renderAddCourse()}</div>
  );
};

export default ManageCourse;
