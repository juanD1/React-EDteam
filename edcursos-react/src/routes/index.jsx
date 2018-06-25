//Deoendencies
import React, { Component } from "react";
import {
  BrowserRouter, //Invocar el manejo de rutas
  Route, //Manejo de rutas
  Link, //Manejo de enlaces
  Redirect, //Manejo de redirecciones
  withRouter, //Switch para modificar el valor de una ruta
  Switch
} from "react-router-dom";
import { firebaseAuth } from "../data/config"; //config of firebase
import { logout } from "../helpers/Auth";
//Assets
import "pure-css";
import "./css/index.css";
import EDteamLogo from "../images/edteam-logo.png";
//Components
import Home from "../pages/";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardCourses from "../pages/protected/DashboardCourses";

//Setting private route
const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to="/cursos" />
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      loading: true
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleOnClick() {
    document
      .getElementById("tuckedMenu")
      .classList.toggle("custom-menu-tucked");
    document.getElementById("toggle").classList.toggle("x");
  }

  handleLogout() {
    logout();
    this.setState({ authed: false });
    this.handleOnClick();
  }

  render() {
    return this.state.loading === false ? (
      <h1>Cargando...</h1>
    ) : (
      <BrowserRouter>
        <div>
          <header className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
              <a href="#" className="pure-menu-heading custom-menu-brand">
                <img src={EDteamLogo} alt="EDteam" />
              </a>
              <a
                href="#"
                className="custom-menu-toggle"
                id="toggle"
                onClick={this.handleOnClick}
              >
                <s className="bar" />
                <s className="bar" />
              </a>
            </div>
            <div
              className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked"
              id="tuckedMenu"
            >
              <div className="custom-menu-screen" />
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link
                    to="/"
                    className="pure-menu-link"
                    onClick={this.handleOnClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="pure-menu-item">
                  <Link
                    to="/acerca"
                    className="pure-menu-link"
                    onClick={this.handleOnClick}
                  >
                    Acerca
                  </Link>
                </li>
                {this.state.authed ? (
                  <span>
                    <li className="pure-menu-item">
                      <Link
                        to="/cursos"
                        className="pure-menu-link"
                        onClick={this.handleOnClick}
                      >
                        Cursos
                      </Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link
                        to="/logout"
                        className="pure-menu-link"
                        onClick={this.handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </span>
                ) : (
                  <span>
                    <li className="pure-menu-item">
                      <Link
                        to="/registro"
                        className="pure-menu-link"
                        onClick={this.handleOnClick}
                      >
                        Registro
                      </Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link
                        to="/login"
                        className="pure-menu-link"
                        onClick={this.handleOnClick}
                      >
                        Login
                      </Link>
                    </li>
                  </span>
                )}
              </ul>
            </div>
          </header>
          <main className="Main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                authed={this.state.authed}
                path="/acerca"
                component={About}
              />
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
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
