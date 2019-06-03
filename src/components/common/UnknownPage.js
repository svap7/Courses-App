import React from "react";
import { NavLink } from "react-router-dom";

const UnknownPage = () => {
  return (
    <div>
      <h1>Opps!! This page does not exists</h1>
      <nav>
        <NavLink to="/" exact>
          Go to Home Page
        </NavLink>
      </nav>
    </div>
  );
};
export default UnknownPage;
