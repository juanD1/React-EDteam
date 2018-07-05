//Dependencies
import React, { Component } from "react";
import {
  BrowserRouter, //Invocar el manejo de rutas
  Route, //Manejo de rutas
  Link, //Manejo de enlaces
  Switch //Interruptos
} from "react-router-dom";
//Components
import Home from "../pages/";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardCourses from "../pages/protected/DashboardCourses";
//Routes
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/acerca" component={About} />
        <PublicRoute
          authed={this.state.authed}
          path="/login"
          component={Login}
        />
        <PublicRoute
          authed={this.state.authed}
          path="/registro"
          component={Register}
        />
        <PrivateRoute
          authed={this.state.authed}
          path="/cursos"
          component={DashboardCourses}
        />
        <Route component={Error404} />
      </Switch>
    );
  }
}

export default Routes;
