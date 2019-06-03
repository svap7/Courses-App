import React from "react";
import { getAllCourses } from "../../api/CoursesApi";

class CoursesPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  async componentDidMount() {
    this.setState({
      courses: await getAllCourses()
    });
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        {courses.map((course, index) => (
          <h1 key={index}>{course.title}</h1>
        ))}
      </div>
    );
  }
}

export default CoursesPage;
