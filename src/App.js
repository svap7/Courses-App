import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import UnknownPage from "./components/common/UnknownPage";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={UnknownPage} />
      </Switch>
    </div>
  );
}

export default App;
