import React, { useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Store } from "../../store";
const AddCourse = () => {
  const { state, dispatch } = useContext(Store);

  const props = {
    authors: state.authors
  };
  console.log(props);

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
            <option>props.authors[0].name</option>
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
