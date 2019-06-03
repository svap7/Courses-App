import React, { useState, useEffect } from "react";
import { getAllCourses } from "../../api/CoursesApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const result = await getAllCourses();
      setCourses(result);
    }
    getCourses();
  }, []);
  return (
    <div>
      {courses.map((course, index) => (
        <h1 key={index}>{course.title}</h1>
      ))}
    </div>
  );
};

export default CoursesPage;
