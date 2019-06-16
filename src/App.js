import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import UnknownPage from "./components/common/UnknownPage";
import CoursesPage from "./components/courses/CoursesPage";
import ManageCourse from "./components/courses/ManageCourse";
import AddCourse from "./components/courses/AddCourse";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:id" component={ManageCourse} />
        <Route path="/add" exact component={AddCourse} />
        <Route component={UnknownPage} />
      </Switch>
    </div>
  );
}

export default App;
