//Deoendencies
import React, { Component } from "react";
import {
  BrowserRouter, //Invocar el manejo de rutas
  Route, //Manejo de rutas
  Link, //Manejo de enlaces
  Redirect, //Manejo de redirecciones
  Switch
} from "react-router-dom";
import { firebaseAuth } from "../../data/config"; //config of firebase
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
import Loader from "../courses/global/Loader";

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

  handleOnClick(e) {
    if (e.target === document.getElementById("toggle")) {
      e.preventDefault();
    }
    document
      .getElementById("tuckedMenu")
      .classList.toggle("custom-menu-tucked");
    document.getElementById("toggle").classList.toggle("x");
  }

  componentDidMount() {
    //Listener onAuthStateChanged is all time verifing that state auth is true
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => {
          console.log("en el login");
          this.setState({
            authed: true,
            loading: false
          });
        }, 2500);
        this.setState({ loading: false });
      } else {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2500);
      }
    });
  }

  componentWillUnmount() {
    //when destroyed the sesion
    this.removeListener();
  }

  handleLogout() {
    logout();
    setTimeout(() => {
      this.setState({
        authed: false,
        loading: true
      });
    }, 2500);
    this.handleOnClick();
  }

  render() {
    return this.state.loading === true ? (
      <Loader />
    ) : (
      <BrowserRouter>
        <div>
          <header className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
              <a role="button" className="pure-menu-heading custom-menu-brand">
                <img className="edteam-logo" src={EDteamLogo} alt="EDteam" />
              </a>
              <a
                role="button"
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
                        to="/login" //regresa a login
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
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
