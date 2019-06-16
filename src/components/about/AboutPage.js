import React from "react";
import "./aboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1 className="about-page">About Page</h1>
      <p className="about-page-description">
        This is all about React, Redux, React Hooks and React router
      </p>
      <p className="about-page-description">
        To check all the courses <Link to="/courses">Click Here</Link>
      </p>
    </div>
  );
};

export default AboutPage;
