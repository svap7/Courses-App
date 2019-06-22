import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Courses Page</h1>
      <p>
        This app uses React, Redux and React router for atbest responsive web
        page
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;
