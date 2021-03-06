import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Index from "../views/index/Index";

const history = createHashHistory();
export default class MyRouter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}
