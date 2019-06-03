import React from "react";
import { getAllCourses } from "../../api/CoursesApi";

class CoursesPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    const list = getAllCourses();
    console.log(list);
  }

  render() {
    console.log(this.state.courses);
    return <h2> Courses Page </h2>;
  }
}

export default CoursesPage;
