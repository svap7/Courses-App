import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddCourse = props => {
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
        onClick={() => console.log("Code to be added to save new Course")}
      >
        Add Course
      </Button>
    </>
  );
};

export default AddCourse;
